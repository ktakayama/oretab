
// カレントタブの隣に新タブを開く
window.addEventListener('load', function() {
   eval("gBrowser.loadOneTab ="+gBrowser.loadOneTab.toString().replace(
            // From
            'aIsUTF8});',

            // To
            'aIsUTF8});' +
            '  this.moveTabTo(tab, this.mTabContainer.selectedIndex+1);'

            ));
   }, false);

