
var _org = openURLIn;

openURLIn = function(where) {
   where = (where == 'tab')     ? 'current' :
           (where == 'current') ? 'tab' : where;

   _org.call(History, where);
}

eval("buildContextMenu ="+buildContextMenu.toString().replace(
         'openItemInNewTab.hidden = false;',
         'openItemInNewTab.hidden = true;')
    );

