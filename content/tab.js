
// history, paste
window.addEventListener('load', function ORE_openUILinkInit() {
   eval("openUILink = " + openUILink.toString().replace('where,', 'oretab_switch(where),'));
} , false);

// bookmark, sidebar
var __org_openNodeIn = PlacesUIUtils._openNodeIn;
PlacesUIUtils._openNodeIn = function ORE_PU_openNodeIn(aNode, aWhere, aWindow) {
   var aWhere = oretab_switch(aWhere);
   if(/^javascript:/.test(aNode.uri)) aWhere = 'current';
   return __org_openNodeIn.call(PlacesUIUtils, aNode, aWhere, aWindow);
}

function oretab_switch(where) {
   return (where == 'tab') ? 'current' : (where == 'current') ? 'tab' : where;
}

