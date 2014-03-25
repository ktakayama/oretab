
// カレントタブの隣に新タブを開く
window.addEventListener('load', function() {
   eval("gBrowser.loadOneTab ="+gBrowser.loadOneTab.toString().replace(
            // From
            'aDisableMCB});',

            // To
            'aDisableMCB});' +
            '  this.moveTabTo(tab, this.mTabContainer.selectedIndex+1);'

            ));
   }, false);

