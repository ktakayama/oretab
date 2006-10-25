
window.addEventListener('load', gBrowserInit, false);

function gBrowserInit() {
   /*
   var _addTab   = gBrowser.addTab;
   gBrowser.addTab = function() {
      // alert(arguments.callee.caller);
      var t = _addTab.apply(gBrowser, arguments);
      this.moveTabTo(t, this.mTabContainer.selectedIndex+1);
      return t;
   }
   */

   eval("gBrowser.loadOneTab ="+gBrowser.loadOneTab.toString().replace(
            'aAllowThirdPartyFixup);',
            'aAllowThirdPartyFixup);this.moveTabTo(tab, this.mTabContainer.selectedIndex+1);'
            ));
}

