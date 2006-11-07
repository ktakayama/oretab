/*
 * Copyright (c) 2006, Kyosuke Takayama <support@mc.neweb.ne.jp>

 * It is released under the MIT LICENSE.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.jp/licenses/mit-license.html
*/

window.addEventListener('load', FaviconizeTabInit, false);

function FaviconizeTabInit() {
   if(document.getElementById('tabContextFaviconizeTab')) return;

   var tabMenu = gBrowser.mStrip.firstChild.nextSibling;
   var tabItem = document.createElement('menuitem');
   tabItem.setAttribute('id',       'tabContextFaviconizeTab');
   tabItem.setAttribute('label',    'FaviconizeTab');
   tabItem.setAttribute('oncommand','toggleFaviconize(gBrowser.mContextTab);');
   tabItem.setAttribute('accesskey','f');

   var pos = tabMenu.lastChild.previousSibling;
   tabMenu.insertBefore(tabItem, pos);
}

function toggleFaviconize(tab) {
   if(!tab || tab.localName != 'tab')
      tab = gBrowser.mCurrentTab;

   if(tab._faviconized) {
      tab.className = tab.className.replace(' faviconized', '');
      tab.minWidth  = tab._oldMinWidth;
      tab.maxWidth  = tab._oldMaxWidth;
   } else {
      tab._oldMinWidth  = tab.minWidth || gBrowser.mTabContainer.mTabMinWidth;
      tab._oldMaxWidth  = tab.maxWidth || 250;

      tab.className = tab.className + ' faviconized';
      tab.minWidth  = '';
      tab.maxWidth  = '';
   }

   tab._faviconized = !tab._faviconized;
}

