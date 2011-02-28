
window.addEventListener('load', gBrowserInit, false);

// カレントタブの隣に新タブを開く
function gBrowserInit() {
   eval("gBrowser.loadOneTab ="+gBrowser.loadOneTab.toString().replace(
            // From
            'aRelatedToCurrent});',

            // To
            'aRelatedToCurrent});' +
            // 'if(this.mTabContainer.childNodes.length>this.mTabContainer.selectedIndex+2) ' +
            '  this.moveTabTo(tab, this.mTabContainer.selectedIndex+1);'

            ));
}

