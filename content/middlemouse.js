
window.addEventListener('load', middleInit, false);

function middleInit() {

   var gPrefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch).getBranch(null);

   var org = readFromClipboard;
   readFromClipboard = function() {
      var url = org();

      if(/^\w+:/.test(url))
         return url;

      var space = url.indexOf(" ");
      if(url.indexOf(".") >= 0 && space == -1)
         return url;

      var slash = url.indexOf("/");
      if(slash == 0)
         return url;

      if(space >= 0 && slash >= 0)
         return url;

      url = (gPrefs.getCharPref('keyword.URL')) + encodeURIComponent(url);
      return url;
   }
}

