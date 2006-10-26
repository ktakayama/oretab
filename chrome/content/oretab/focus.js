/////////////////////////////////
// flst.js
// Daniel Lindkvist
// 05-09-09
/////////////////////////////////

var flst =
{
  tabHistory: new Array(),
  nbrOfTabs: 1,
  oldTab: null,
  prefb: null,

  // init
  init: function()
  {
    gBrowser.mTabBox.addEventListener('select', flst.onTabClose, true);
    gBrowser.mTabBox.addEventListener('select', flst.onTabFocus, true);
    gBrowser.mTabBox.addEventListener('mousedown', flst.onMouseDown, true);
    gBrowser.mTabBox.addEventListener('click', flst.tabClickHandler,true);
    var prefService = Components.classes["@mozilla.org/preferences-service;1"]
        .getService(Components.interfaces.nsIPrefService);
    flst.prefb = prefService.getBranch("supert.");
    // init pref
    try {
      var enabled = flst.prefb.getBoolPref("flst.enabled");
    }catch(e){
      flst.prefb.setBoolPref("flst.enabled", true);
    }
    // set flst_id on first tab
    var tab = gBrowser.selectedTab;
    tab.setAttribute('flst_id', new Date().getTime());
    flst.tabHistory.push(tab.getAttribute('flst_id'));
  },

  onTabFocus: function(event)
  {
    var curTab = gBrowser.selectedTab;
    var selectedID = curTab.getAttribute('flst_id');

    if (!selectedID){
      selectedID = new Date().getTime();
      curTab.setAttribute('flst_id', selectedID);
    }

    if (flst.oldTab != selectedID) {
      flst.tabHistory.push(selectedID);
      flst.oldTab = selectedID;
      // clean out old entry from flst_tabHistory
      for (var i=0;i<flst.tabHistory.length-1; ++i) {
        if (flst.tabHistory[i] == selectedID) {
          flst.tabHistory.splice(i,1);
          return;
        }
      }
    }
  },// end onTabFocus

  onTabClose: function(event)
  {
    var nt;
    var tabs = gBrowser.mTabContainer.childNodes;
    var enabled = flst.prefb.getBoolPref("flst.enabled");

    // sync
    if(tabs.length > flst.nbrOfTabs)
      flst.nbrOfTabs = tabs.length;


    // if a tab was closed
    if(flst.nbrOfTabs > tabs.length) {
      flst.nbrOfTabs = tabs.length;
      // remove current tab from history
      var ot = flst.tabHistory.pop();
      // check if disabled
      if(!enabled)
        return;
      //get last selected tab
      if (flst.tabHistory.length > 0)
        nt = flst.tabHistory.pop();
      else
        return;

      flst.selectTab(nt);
    }
  }, // end onTabClose

   selectTab: function(id) {
      var tabs = gBrowser.mTabContainer.childNodes;
      var newTab;
      for (var i=tabs.length-1; i>=0; --i) {
        newTab = tabs[i];
        if (newTab.getAttribute('flst_id') == id) {
          gBrowser.selectedTab = newTab;
          // make sure first tab is in tabHistory
          if (flst.tabHistory.length == 0)
            flst.tabHistory.push(id);
          return;
        }
      }
   },

  onMouseDown: function(event)
  {
    if ((event.target.localName == "tab") && (event.target.linkedPanel.indexOf("panel")==0)) {
      //event.preventDefault();
      //event.preventBubble();
      event.stopPropagation();
    }
  },

  tabClickHandler: function(event)
  {
    if ((event.target.localName == "tab") && (event.target.linkedPanel.indexOf("panel")==0)) {
      if(gBrowser.selectedTab == event.target) {
         // flst.selectTab(flst.tabHistory.pop());
         flst.selectTab(flst.tabHistory[flst.tabHistory.length-2]);
      } else {
         gBrowser.selectedTab = event.target;
      }
    }
  }

};

window.addEventListener('load', flst.init, false);

