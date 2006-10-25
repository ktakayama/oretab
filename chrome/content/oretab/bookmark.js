
var _org = BookmarksCommand.openOneBookmark;

BookmarksCommand.openOneBookmark = function (aURI, aTargetBrowser, aDS) {
   var url = BookmarksUtils.getProperty(aURI, gNC_NS+"URL", aDS);

   if(aTargetBrowser == 'current' && url.indexOf('javascript:') != 0) {
      aTargetBrowser = 'tab';
   } else {
      aTargetBrowser = 'current';
   }

   _org.call(BookmarksCommand, aURI, aTargetBrowser, aDS);
}

