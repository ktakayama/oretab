
window.addEventListener('load', middleInit, false);

function middleInit() {

   var gPrefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

   var org = readFromClipboard;
   readFromClipboard = function() {
      var url = org();
      if(url.indexOf(":") >= 0)
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

   /*
   var _o = getShortcutOrURI;
   getShortcutOrURI = function(aURL, aPost) {
      var url = aURL;
      if(url.indexOf(".") == -1 &&
            url.indexOf(":") == -1
            ) {
         //%B0%DC%C6%B0
         url = (gPrefs.getCharPref('keyword.URL')) + encodeURIComponent(url);
      url = 'hoge';
      }
      return _o.call(null, url, aPost);
   }
   */
}

