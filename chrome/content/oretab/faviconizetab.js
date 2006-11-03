
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
   var aTab = gBrowser.mContextTab;

   if(aTab._faviconize) {
      aTab.minWidth = gBrowser.mTabContainer.mTabMinWidth;
      aTab.maxWidth = 250;
      aTab.className = "tabbrowser-tab";
   } else {
      aTab.minWidth = 32;
      aTab.maxWidth = 32;
      aTab.className = "faviconize-tab";
   }

   aTab._faviconize = !aTab._faviconize;
}

