
// history, paste
window.addEventListener('load', function ORE_openUILinkInit() {
   eval("openUILink = " + openUILink.toString().replace('where,', 'oretab_switch(where),'));
} , false);

// bookmark, sidebar
var __org_openNodeIn = PlacesUIUtils.openNodeIn;
PlacesUIUtils.openNodeIn = function ORE_PU_openNodeIn(aNode, aWhere) {
   var aWhere = oretab_switch(aWhere);
   if(/^javascript:/.test(aNode.uri)) aWhere = 'current';
   __org_openNodeIn.call(PlacesUIUtils, aNode, aWhere);
}

function oretab_switch(where) {
   return (where == 'tab') ? 'current' : (where == 'current') ? 'tab' : where;
}

