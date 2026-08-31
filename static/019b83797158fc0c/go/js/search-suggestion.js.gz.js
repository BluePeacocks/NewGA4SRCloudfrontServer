var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
window.SearchSuggestion=(function(){var d=window.$,j=window.searchTermsDataUrl||"/static/store/common/terms.json",k=false,i=null,b=function(n){i=n},c=(function(){var s=null,t=function(y,x){return{value:y,parentNode:x,children:[],isWord:false}},p=function(){return s},q=function(x,y){var z=null,A=false;d.each(x,function(C,B){if(B.value===y){z=B;A=true;return false}});if(A){return z}return null},n=function(y){var x=[];if(y.parentNode===null){return x}d.each(y.parentNode.children,function(A,z){if(z.value!==y.value){x.push(z)}});return x},r=function(z){var y=z,x=null,A=0;while(true){if(y.value===null){break}A+=1;y=y.parentNode}return A},o=function(A){var z=A,y=null,x="";while(true){if(z.value===null){break}x=z.value.concat(x);z=z.parentNode}return x},v=function(){s=t(null,null)},u=function(B){var A=s,C=null,z=null,y=null,x=0;while(true){if(x===B.length){A.isWord=true;break}C=B.charAt(x);z=q(A.children,C);if(z===null){y=t(C,A);A.children.push(y);A=y}else{A=z}x+=1}},w=function(y){var z=[],A=q(s.children,y.charAt(0)),x=[],B=function(C,D){if(D.children.length===0){x.push(C.concat(D.value));return}if(D.isWord){x.push(C.concat(D.value))}d.each(D.children,function(F,E){B(o(D),E)})};if(A===null){return[]}(function(){var C=y.slice(1).split(""),D=A;d.each(C,function(G,F){var E=q(D.children,F);if(E!==null){if(G!==(C.length-1)){D=E}else{B(o(E.parentNode),E)}d.each(n(E),function(H,I){z.push(I)})}else{d.each(D.children,function(I,H){z.push(H)});if(D!==A){d.each(n(D),function(H,I){z.push(I)})}return false}})}());(function(){d.each(z,function(D,F){var C=y.slice(r(F)).split(""),E=F,G=false;d.each(C,function(J,I){var H=q(E.children,I);if(H===null){G=true;return false}E=H});if(!G){B(o(E.parentNode),E)}})}());(function(){var D=null,C=[];d.each(x,function(F,E){if(E===y){D=E}else{C.push(E)}});C=d.unique(C);C.sort();if(D!==null){C.unshift(D)}x=C}());return x};return{init:v,insert:u,getRoot:p,search:w}}()),a=function(){return c.getRoot()},g=null,f=function(o){var n=null,p=function(q,r){if(!g.hasOwnProperty(r)){g[r]=[]}g[r].push(n);c.insert(r)};g={};for(n in o){if(o.hasOwnProperty(n)){if(!g.hasOwnProperty(n)){g[n]=[]}if(!g[n].hasOwnProperty(n)){g[n].push(n);c.insert(n)}d.each(o[n],p)}}},l=function(){return g},m=function(){if(!k){d.get(j,function(n){c.init();f(n);k=true;if(typeof i==="function"){i()}},"json")}},e=function(n){if(!k||(n.length<=1)){return[]}return c.search(n.toLowerCase())},h=function(n){n=n.toLowerCase();if(!g.hasOwnProperty(n)){return[]}return g[n]};m();return{setOnReady:b,getTermTrieRoot:a,getTermLookup:l,suggest:e,getControlTerms:h}}());
}

/*
     FILE ARCHIVED ON 17:28:58 Dec 28, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:19:06 Aug 31, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.605
  captures_list: 0.619
  exclusion.robots: 0.095
  exclusion.robots.policy: 0.078
  esindex: 0.012
  cdx.remote: 12.282
  LoadShardBlock: 99.831 (3)
  PetaboxLoader3.datanode: 653.173 (4)
  PetaboxLoader3.resolve: 18.704
  load_resource: 997.767
*/