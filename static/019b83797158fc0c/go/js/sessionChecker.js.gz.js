var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(function(b){var f=60;var d;function c(){b.get("/ajax/sessionCheck").fail(function(g){if(g.status===403){clearInterval(d);if(g.responseText==="IP_RESTRICTED"){e()}else{a()}}})}function a(){var g='<div class="modal fade" tabindex="-1" role="dialog">';g+='<div class="modal-dialog modal-sm" role="document">';g+='<div class="modal-content">';g+='<div class="modal-header"><h4 class="modal-title">Login Required</h4></div>';g+='<div class="modal-body">';g+="<p>You are currently logged out.</p>";g+="</div>";g+='<div class="modal-footer">';g+='<button type="button" class="btn btn-orange" onclick="window.location.href=\'/login?r='+encodeURIComponent(window.location.href)+"'\">Login</button>";g+="</div>";g+="</div>";g+="</div>";g+="</div>";b("body").empty();b(g).modal()}function e(){var g='<div class="modal fade" tabindex="-1" role="dialog">';g+='<div class="modal-dialog modal-sm" role="document">';g+='<div class="modal-content">';g+='<div class="modal-header"><h4 class="modal-title">Access Denied</h4></div>';g+='<div class="modal-body">';g+="<p>This account cannot be accessed from your current IP address. Contact your Team Admin or Vyond support for more information.</p>";g+='<p>To use a different account, click <a href="/logoff">here</a>.</p>';g+="</div>";g+='<div class="modal-footer">';g+='<button type="button" class="btn btn-orange" onclick="window.location.reload()">Retry</button>';g+="</div>";g+="</div>";g+="</div>";g+="</div>";b("body").empty();b(g).modal()}d=setInterval(c,f*1000)})(jQuery);
}

/*
     FILE ARCHIVED ON 16:29:54 Dec 22, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:15:29 Aug 31, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 1.002
  captures_list: 0.466
  exclusion.robots: 0.057
  exclusion.robots.policy: 0.048
  esindex: 0.008
  cdx.remote: 39.883
  LoadShardBlock: 115.35 (3)
  PetaboxLoader3.datanode: 127.273 (4)
  PetaboxLoader3.resolve: 85.941 (2)
  load_resource: 846.307
*/