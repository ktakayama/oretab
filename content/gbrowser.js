
window.addEventListener('load', gBrowserInit, false);

function gBrowserInit() {
   eval("gBrowser.loadOneTab ="+gBrowser.loadOneTab.toString().replace(
            // From
            'aAllowThirdPartyFixup);',

            // To
            'aAllowThirdPartyFixup);' +
            // 'if(this.mTabContainer.childNodes.length>this.mTabContainer.selectedIndex+2) ' +
            '  this.moveTabTo(tab, this.mTabContainer.selectedIndex+1);'

            ));
}

