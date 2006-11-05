
window.addEventListener('load', focusInit, false);

function focusInit() {
   gBrowser.mTabContainer.addEventListener('mousedown', oreFocus.mousedownTab,true);
   gBrowser.mTabContainer.addEventListener('click',  oreFocus.clickTab,true);
   gBrowser.mTabContainer.addEventListener('select', oreFocus.selectTab, true);

   eval("gBrowser.removeTab ="+gBrowser.removeTab.toString().replace(
            'this.selectedTab =',
            'if(oldTab._ore) this.selectedTab = oldTab._ore; else this.selectedTab = '
            ));

   var _org = gBrowser.removeTab;

   gBrowser.removeTab = function(aTab) {
      oreFocus.remove(aTab.linkedPanel);

      aTab._ore  = id2tab(oreFocus.history.pop());
      aTab.owner = null;

      _org.apply(gBrowser, arguments);
   }
}

function id2tab(id) {
   var containerChilds = gBrowser.mTabContainer.childNodes;
   var newIndex = 0;
   for(var i = 0; i < containerChilds.length; ++i) {
      if(containerChilds[i].linkedPanel == id) {
         newIndex = i;
         break;
      }
   }
   return containerChilds[newIndex];
}

var oreFocus = {
   history: new Array(),
   lastTab: null,

   remove: function(del) {
      for(var i = 0; i < oreFocus.history.length; i++)
         if(oreFocus.history[i] == del) { oreFocus.history.splice(i, 1); i--; }
   },

   selectTab: function(event) {
      // debug('select');
      if(gBrowser.mCurrentTab) {
         var newLink = gBrowser.mCurrentTab.linkedPanel;
         oreFocus.remove(newLink);
         oreFocus.history.push(newLink);
      }
   },

   clickTab: function(event) {
      if((event.button == 0) && (event.target.localName == "tab")) {
         if(oreFocus.lastTab == event.target) {
            // debug('focus');
            gBrowser.selectedTab = id2tab(oreFocus.history[oreFocus.history.length-2]);
         }
      }
   },

   mousedownTab: function(event) {
      if(event.target.localName == "tab")
         oreFocus.lastTab = gBrowser.selectedTab;
   }
}

// function debug(str) { dump('> ' + str + "\n"); }

