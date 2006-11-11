
// for [GO(History)] menu
var ORE_loadHistory = function(event) {
   var url = event.target.getAttribute('statustext');
   if (url) {
      var where = whereToOpenLink(event, false, true);
      where = (where == 'tab') ? 'current' : 'tab';
      openUILinkIn(url, where);
   }
}

window.addEventListener('load', ORE_historyInit, false);

function ORE_historyInit() {
   var menu = document.getElementById('go-menu');
   menu.setAttribute('oncommand', 'ORE_loadHistory(event)');
}

