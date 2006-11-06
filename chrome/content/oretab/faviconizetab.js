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
   tabItem.setAttribute('oncommand','doFaviconizeTab();');
   tabItem.setAttribute('accesskey','f');

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

