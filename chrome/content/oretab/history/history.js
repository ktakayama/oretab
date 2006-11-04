
// for [GO(History)] menu
ORE_loadHistory = function(event) {
   var url = event.target.getAttribute('statustext');
   if (url) {
      var where = whereToOpenLink(event, false, true);
      where = (where == 'tab') ? 'current' : 'tab';
      openUILinkIn(url, where);
   }
}

var menu = document.getElementById('go-menu');
menu.setAttribute('oncommand', 'ORE_loadHistory(event)');

