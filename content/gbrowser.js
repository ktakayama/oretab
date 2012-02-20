
window.addEventListener('load', gBrowserInit, false);

// カレントタブの隣に新タブを開く
function gBrowserInit() {
   eval("gBrowser.loadOneTab ="+gBrowser.loadOneTab.toString().replace(
            // From
            'aIsUTF8});',

            // To
            'aIsUTF8});' +
            '  this.moveTabTo(tab, this.mTabContainer.selectedIndex+1);'

            ));
}

