
window.addEventListener('load', FaviconizeTabInit, false);

function FaviconizeTabInit() {
   if(document.getElementById('tabContextFaviconizeTab')) return;

   var tabMenu = gBrowser.mStrip.firstChild.nextSibling;
   var tabItem = document.createElement('menuitem');
   tabItem.setAttribute('id',       'tabContextFaviconizeTab');
   tabItem.setAttribute('label',    'FaviconizeTab');
   tabItem.setAttribute('command',  'fav_doFaviconizeTab');

   var pos = tabMenu.lastChild.previousSibling;
   tabMenu.insertBefore(tabItem, pos);
}

function doFaviconizeTab() {
   var tab = gBrowser.mContextTab;
   if(tab.localName != "tab")
      tab = gBrowser.mCurrentTab;

   if(tab._faviconize) {
      tab.minWidth = gBrowser.mTabContainer.mTabMinWidth;
      tab.maxWidth = 250;
      tab.className = "tabbrowser-tab";
   } else {
      tab.minWidth = 32;
      tab.maxWidth = 32;
      tab.className = "faviconize-tab";
   }

   tab._faviconize = !tab._faviconize;
}

