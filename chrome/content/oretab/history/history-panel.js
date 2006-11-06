
var _org_openURLIn = openURLIn;

openURLIn = function(where) {
   where = (where == 'tab')     ? 'current' :
           (where == 'current') ? 'tab' : where;

   _org_openURLIn.call(History, where);
}

eval("buildContextMenu ="+buildContextMenu.toString().replace(
         'openItemInNewTab.hidden = false;',
         'openItemInNewTab.hidden = true;')
    );

