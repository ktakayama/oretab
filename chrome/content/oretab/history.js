
var _org = History.openURLIn;

History.openURLIn = function(where) {
   where = (where == 'current') ?  'tab' : 'current';

   _org.call(History, where);
}

