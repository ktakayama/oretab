
var _org_openOneBookmark = BookmarksCommand.openOneBookmark;

BookmarksCommand.openOneBookmark = function(aURI, aTargetBrowser, aDS) {
   var url = BookmarksUtils.getProperty(aURI, gNC_NS+"URL", aDS);

   var where = 'current';
   if(aTargetBrowser == 'current' && url.indexOf('javascript:') != 0)
      where = 'tab';

   _org_openOneBookmark.call(BookmarksCommand, aURI, where, aDS);
}

