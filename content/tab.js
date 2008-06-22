
var __org_arg_whereToOpenLink = whereToOpenLink;
whereToOpenLink = function( e, ignoreButton, ignoreAlt ) {
   var result = __org_arg_whereToOpenLink(e, ignoreButton, ignoreAlt);

   // bookmark - PU_openNodeWithEvent
   // history  - openUILink
   if(!/function (:?PU_openNodeWithEvent|openUILink)/.test(arguments.callee.caller)) return result;

   switch(result) {
   case 'tab':
      return 'current';
   case 'current':
      return 'tab';
   default:
      return result;
   }
}

