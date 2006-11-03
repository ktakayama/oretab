
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
   var item = document.getElementById('tabContextFaviconizeTab');
   if(aTab._faviconizeMinWidth) {
      aTab.minWidth = aTab._faviconizeMinWidth;
      aTab.maxWidth = 250;
      aTab._faviconizeMinWidth = null;
      item.label = 'FaviconizeTab';
   } else {
      aTab._faviconizeMinWidth = aTab.minWidth;
      aTab.minWidth = 50;
      aTab.maxWidth = 50;
      item.label = 'undo FaviconizeTab';
   }
}

