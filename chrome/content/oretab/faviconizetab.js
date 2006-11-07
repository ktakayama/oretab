/*
 * Copyright (c) 2006, Kyosuke Takayama <support@mc.neweb.ne.jp>

 * It is released under the MIT LICENSE.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.jp/licenses/mit-license.html
*/

var faviconize = {
   session: null,

   init: function() {
      if(document.getElementById('tabContextFaviconizeTab')) return;

      var tabMenu = gBrowser.mStrip.firstChild.nextSibling;
      var tabItem = document.createElement('menuitem');
      tabItem.setAttribute('id',       'tabContextFaviconizeTab');
      tabItem.setAttribute('label',    'FaviconizeTab');
      tabItem.setAttribute('oncommand','faviconize.toggle(gBrowser.mContextTab);');
      tabItem.setAttribute('accesskey','f');

      var pos = tabMenu.lastChild.previousSibling;
      tabMenu.insertBefore(tabItem, pos);

      if(typeof Cc != 'undefined')
         faviconize.session = Cc["@mozilla.org/browser/sessionstore;1"].getService(Ci.nsISessionStore);
   },

   restore: function(event) {
      var tab = event.originalTarget;

      if(faviconize.session.getTabValue(tab, 'faviconized')) {
         tab._faviconized = false,
         faviconize.toggle(tab);
      }
   },

   toggle: function(tab) {
      if(!tab || tab.localName != 'tab')
         tab = gBrowser.mCurrentTab;

      var session = faviconize.session;

      if(tab._faviconized) {
         tab.className = tab.className.replace(' faviconized', '');
         tab.minWidth  = tab._oldMinWidth;
         tab.maxWidth  = tab._oldMaxWidth;
         if(session) session.deleteTabValue(tab, 'faviconized');
      } else {
         tab._oldMinWidth  = tab.minWidth || gBrowser.mTabContainer.mTabMinWidth;
         tab._oldMaxWidth  = tab.maxWidth || 250;

         tab.className = tab.className + ' faviconized';
         tab.minWidth  = '';
         tab.maxWidth  = '';

         if(session) session.setTabValue(tab, 'faviconized', true);
      }

      tab._faviconized = !tab._faviconized;
   }
}

window.addEventListener('load', faviconize.init, false);
window.addEventListener('SSTabRestoring', faviconize.restore, false);

