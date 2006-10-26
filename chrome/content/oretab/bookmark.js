
var _org = BookmarksCommand.openOneBookmark;

BookmarksCommand.openOneBookmark = function (aURI, aTargetBrowser, aDS) {
   var url = BookmarksUtils.getProperty(aURI, gNC_NS+"URL", aDS);

   var where = 'current';
   if(aTargetBrowser == 'current' && url.indexOf('javascript:') != 0)
      where = 'tab';

   _org.call(BookmarksCommand, aURI, where, aDS);
}

