
BookmarksCommand.openOneBookmark = function (aURI, aTargetBrowser, aDS) {
   var url = BookmarksUtils.getProperty(aURI, gNC_NS+"URL", aDS);
   // Ignore "NC:" and empty urls.
   if (url == "")
      return;

   if(aTargetBrowser == 'current' && url.indexOf('javascript:') != 0) {
      aTargetBrowser = 'tab';
   } else {
      aTargetBrowser = 'current';
   }

   openUILinkIn(url, aTargetBrowser);
}

