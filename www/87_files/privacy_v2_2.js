tc_privacy_used = typeof tc_privacy_used != 'undefined' ? tc_privacy_used : 0;if(tc_privacy_used=='0'){/*
 * tagContainer Privacy v3.0
 * Copyright Tag Commander
 * http://www.tagcommander.com/
 * Generated: 12/12/2019 12:39:52
 * ---
 * Version   : 024
 * IDP       : 2
 * IDS       : 3969
 */
/*!compressed by YUI*/ if(typeof tC=="undefined"){(function(d){var a,l,f=d.document,h=d.location,i=d.navigator,c=d.tC,b=d.$,j=Object.prototype.toString,g=function(m,n){return new g.fn.init(m,n,a)},k={};g.fn=g.prototype={constructor:g,init:function(m,p,s){var o,q,n,r;if(!m){return this}if(m.nodeType){this.context=this[0]=m;this.length=1;return this}},each:function(n,m){return g.each(this,n,m)},ready:function(m){g.ready.promise(m);return this}};g.fn.init.prototype=g.fn;g.ssl=g.ssl||"https://manager.";g.isFunction=g.isFunction||function(m){return g.type(m)==="function"};g.inArray=g.inArray||function(q,n,p){var m,o=Array.prototype.indexOf;if(n){if(o){return o.call(n,q,p)}m=n.length;p=p?p<0?Math.max(0,m+p):p:0;for(;p<m;p++){if(p in n&&n[p]===q){return p}}}return -1};g.type=g.type||function(m){return m==null?String(m):k[j.call(m)]||"object"};g.each=g.each||function(r,s,o){var n,p=0,q=r.length,m=q===undefined||g.isFunction(r);if(o){if(m){for(n in r){if(s.apply(r[n],o)===false){break}}}else{for(;p<q;){if(s.apply(r[p++],o)===false){break}}}}else{if(m){for(n in r){if(s.call(r[n],n,r[n])===false){break}}}else{for(;p<q;){if(s.call(r[p],p,r[p++])===false){break}}}}return r};g.log=g.log||function(m,n){try{if(g.getCookie("tCdebugLib")&&console){console[n?n:"log"](m)}}catch(o){}};a=g(f);d.tC=g})(window)}tC.privacyVersion="024";tC.privacyID=2;tC.setCookie=tC.setCookie||function(c,f,a,i,d,h){if(!d){d=tC.domain()}var b=new Date();b.setTime(b.getTime());if(a){a=a*1000*60*60*24}var g=new Date(b.getTime()+(a));document.cookie=c+"="+escape(f)+((a)?";expires="+g.toGMTString():"")+((i)?";path="+i:";path=/")+((d)?";domain="+d:"")+((h)?";secure":"")};tC.getCookie=tC.getCookie||function(a){return(result=new RegExp("(?:^|; )"+encodeURIComponent(a)+"=([^;]*)").exec(document.cookie))?unescape(result[1]):""};tC.isCookieEnabled=function(){if(navigator.cookieEnabled&&window.navigator.userAgent.indexOf("MSIE")==-1){return true}document.cookie="cookietest=1";var a=document.cookie.indexOf("cookietest=")!=-1;document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";return a};tC.tc_hdoc=tC.tc_hdoc||false;if(!tC.domain){tC.domain=function(){this.tc_hdoc=document;try{try{this.tc_hdoc=top.document}catch(d){this.tc_hdoc=document}var a=typeof this.tc_hdoc.domain!="undefined"?this.tc_hdoc.domain.toLowerCase().split("."):false,g="^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";if(a.length<2||this.tc_hdoc.domain.match(g)){return""}else{var f=a[a.length-3],c=a[a.length-2],b=a[a.length-1];if(c=="co"||c=="com"){return"."+f+"."+c+"."+b}else{return"."+c+"."+b}}}catch(d){tC.log(["tC.domain error : ",d],"warn")}};tC.domain()}tC.fn.css=function(b){try{this.each(function(g,j){for(var d in b){var h="";if(/-/.test(d)){var c=d.split("-");for(var g in c){if(g==0){h=c[g]}else{var f=c[g].split(""),k=f.shift();h+=k.toUpperCase()+f.join("")}}}else{var h=d}j.style[h]=b[d]}})}catch(a){tC.log(["tC.fn.css->error",a.message],"warn")}return this};tC.fn.resetCss=function(){this.each(function(a,b){tC(b).css({border:"none",background:"none",font:"none",margin:"none",padding:"none",top:"none",left:"none",buttom:"none",right:"none",width:"none",height:"none"})});return this};tC.pixelTrack=tC.pixelTrack||{add:function(a,b){a=a||0;b=b||"img";tC.onDomReady(function(){if(b=="iframe"){var c=document.createElement(b);c.src=a;c.width=1;c.height=1;c.style.display="none";document.body.appendChild(c)}else{var c=new Image();c.src=a}})}};tC.coreReadyStandalone=true;if(tC.isDOMReady){tC.coreReadyStandalone=false}tC.domReady=tC.domReady||false;tC.isDOMReady=tC.isDOMReady||function(){if(document.readyState=="complete"||document.readyState=="loaded"){return true}if(document.readyState!="interactive"){return false}if(!document.documentElement.doScroll){return true}try{document.documentElement.doScroll("left");return true}catch(a){return false}};tC.waitingOnDomReadyCallBacks=tC.waitingOnDomReadyCallBacks||[];tC.excuteOnDomReadyCallBacks=tC.excuteOnDomReadyCallBacks||function(){for(var a=0;a<tC.waitingOnDomReadyCallBacks.length;a++){tC.waitingOnDomReadyCallBacks[a]()}tC.waitingOnDomReadyCallBacks=[]};tC.onDomReady=tC.onDomReady||function(b){if(this.domReady){b();return}tC.waitingOnDomReadyCallBacks.push(b);var a=false;if(document.addEventListener){a=true;document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);tC.excuteOnDomReadyCallBacks()},false)}else{if(document.attachEvent){a=true;document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);tC.excuteOnDomReadyCallBacks()}});if(document.documentElement.doScroll&&window==window.top){(function(){if(tC.domReady){return}try{document.documentElement.doScroll("left")}catch(c){setTimeout(arguments.callee,0);return}tC.excuteOnDomReadyCallBacks()})()}}}if(!a){window.onload=tC.excuteOnDomReadyCallBacks}};if(tC.coreReadyStandalone===true){if(tC.isDOMReady()){tC.domReady=true}else{tC.onDomReady(function(){tC.domReady=true})}}tC.privacy=tC.privacy||{reactived:null,id:null,version:null,categories:null,vendorsDisabled:null,cookieData:null,init:function(){var b=tC.getCookie(tC.privacy.getCN());if(b){tC.privacy.cookieData=b.indexOf("@")>=0?b.split("@"):b.split(tC.privacy.getCS())}else{tC.privacy.cookieData=[]}tC.privacy.categories=tC.getCookie(this.getPCCN());tC.privacy.vendorsDisabled=tC.getCookie(this.getVCN()).split(",");if(tC.privacy.categories=="ALL"){var a=parseInt(tC.privacy.cookieData[0]||0);if(a===1){tC.privacy.categories=[]}else{tC.privacy.categories=tC.privacy.allSelectableCategoriesId||[]}}else{tC.privacy.categories=tC.privacy.categories.split(",")}}};tC.privacy.In=tC.privacy.In||function(g,d,f,h,b){if(tC.isCookieEnabledBool==undefined){tC.isCookieEnabledBool=tC.isCookieEnabled()}if(tC.isCookieEnabledBool===false){return}f=f?f:"";h=h?h:"";tC.privacy.cok(0,d,h);tC.privacy.hit(1,d,g,b);tC.privacy.init();if(window.tCPrivacyTagManager){tC.privacy.sendDataOtherTMS()}};tC.privacy.Out=tC.privacy.Out||function(g,d,f,h,b){if(tC.isCookieEnabledBool==undefined){tC.isCookieEnabledBool=tC.isCookieEnabled()}if(tC.isCookieEnabledBool===false){return}f=f?f:"";h=h?h:"";tC.privacy.cok(1,d,h);tC.privacy.hit(0,d,g,b);tC.privacy.init();if(window.tCPrivacyTagManager){tC.privacy.sendDataOtherTMS()}};tC.privacy.cok=tC.privacy.cok||function(b,d,h){var g=typeof tc_privacy_force_domain!=="undefined"?tc_privacy_force_domain:null;tC.setCookie(tC.privacy.getCN(),b+tC.privacy.getCS()+d+tC.privacy.getCS()+h,396,"/",g);tC.setCookie(this.getPCCN(),h,396,"/",g)};tC.privacy.hit=function(k,l,c,m){var h=k===1?tC.getCookie(tC.privacy.getPCCN()):"";var j=tC.privacy.allSelectableCategoriesId.slice();var b=tC.privacy.getOptinCategories();var f=0;if(b.length>=tC.privacy.allSelectableCategoriesId.length){tC.privacy.allSelectableCategoriesId.forEach(function(a){if(b.indexOf(a)>-1){j.splice(j.indexOf(a),1)}});f=j.length==0?1:0}tC.privacy.init();if(k===0){var d=1}else{if(k===1){var d=0}else{var d=parseInt(tC.privacy.cookieData[0]||1)}}var g=d==0?"https://privacy.commander1.com":"https://privacy.trustcommander.net";tC.pixelTrack.add(g+"/privacy-consent/?id_tc="+(tC.privacy.containerId||0)+"&site=3969&version="+l+"&id_privacy="+c+"&privacy_action="+k+"&type_action="+m+"&list_categories="+h+"&optin_to_all="+f+"&tcpid="+tC.getCookie("TCPID")+"&tc_optout="+d+"&rand="+Math.random())};tC.privacy.rand=tC.privacy.rand||function(){var a=new Date();return""+a.getYear()+(a.getMonth()+1)+a.getDay()+a.getHours()+a.getMinutes()+a.getSeconds()+parseInt(Math.random()*12345678942)};tC.privacy.set=tC.privacy.set||function(a){tC.privacy.settings=a};tC.privacy.getCN=tC.privacy.getCN||function(){return typeof tc_privacy_cookie_name!="undefined"?tc_privacy_cookie_name:"TC_PRIVACY"};tC.privacy.getPCCN=tC.privacy.getPCCN||function(){return tC.privacy.getCN()+"_CENTER"};tC.privacy.getVCN=function(){return tC.privacy.getCN()+"_VENDOR"};tC.privacy.isEnable=tC.privacy.isEnable||function(){if(tC.privacy.cookieData===null){tC.privacy.init()}return(tC.privacy.cookieData.length<=2||(tC.privacy.reactivate!=""&&tC.privacy.cookieData[1]==tC.privacy.reactivate))};tC.privacy.getContainer=tC.privacy.getContainer||function(a){return a.getElementById("tc_div_preview")||a.body};tC.privacy.hitCounter=function(a,b){b=b?b:"banner";tC.privacy.init();var c=parseInt(tC.privacy.cookieData[0]||1);c=(typeof tC.privacy.cookieData[2]!="undefined"&&tC.privacy.cookieData[2]=="")?+!c:c;var d=c==0?"https://privacy.commander1.com":"https://privacy.trustcommander.net";tC.pixelTrack.add(d+"/privacy-consent/?id="+(tC.privacy.containerId||0)+"&site=3969&version="+tC.privacyVersion+"&id_privacy="+a+"&type_action="+b+"&privacy_action=V&tcpid="+tC.getCookie("TCPID")+"&tc_optout="+c+"&rand="+Math.random())};tC.privacy.getOptinCategories=tC.privacy.getOptinCategories||function(){tC.privacy.init();var a=parseInt(tC.privacy.cookieData[0]||0);return a===0&&tC.privacy.categories!=="undefined"&&tC.privacy.categories!=-1?tC.privacy.categories:[]};tC.privacy.getOptoutVendors=function(){var b=[];var a=tC.getCookie(tC.privacy.getVCN());if(a){b=a.split(",")}return b};tC.privacy.getCS=tC.privacy.getCS||function(){return typeof tC.privacyCookieSeparator!=="undefined"?tC.privacyCookieSeparator:"@"};tC.privacy.validRules=tC.privacy.validRules||function(d){if(tC.privacy.cookieData===null){tC.privacy.init()}if(!tC.privacy.cookieData.length||(tC.privacy.cookieData.length===1&&tC.privacy.cookieData[0]==="")){return true}var a=parseInt(tC.privacy.cookieData[0]||0),b=(tC.privacy.cookieData[2]||"").split(","),c=(tC.privacy.tagsCategoriesAssignation&&tC.privacy.tagsCategoriesAssignation[d])?tC.privacy.tagsCategoriesAssignation[d]:0;return(a===0&&(tC.inArray(c.toString(),b)!==-1||tC.inArray("ALL",b)!==-1))||(a===1&&(tC.inArray(c.toString(),b)===-1&&tC.inArray("ALL",b)===-1))};tC.privacy.sendDataOtherTMS=tC.privacy.sendDataOtherTMS||function(){var b="";var a=tC.privacy.getListCategoryConsent();if(window.tCPrivacyTagManager){switch(tCPrivacyTagManager){case"gtm":if(window.dataLayer&&"function"==typeof window.dataLayer.push){window.dataLayer.push({tcVendorsConsent:b,tcCategoriesConsent:a,event:"tcConsentChanged"})}break;case"adobe":if(window.digitalData&&window.digitalData.user){window.digitalData.user.tcVendorsConsent=b;window.digitalData.user.tcCategoriesConsent=a}break;default:break}}window.tcVendorsConsent=b;window.tcCategoriesConsent=a};tC.privacy.getListCategoryConsent=tC.privacy.getListCategoryConsent||function(){var a=tC.privacy.getOptinCategories();if(Array.isArray(a)&&(a.length==0||(a.length==1&&a[0]==""))){return tC.getCookie(tC.privacy.getCN())===""?"no_consent":"optout"}return a.join()};tC.privacy.tagsCategoriesAssignation=tC.privacy.tagsCategoriesAssignation||{"420":2,"174":3,E6:3,E18:3,E2:3,E7:3,E9:3,E15:3,E16:3,E17:3,E19:3,E35:3,E45:3,E47:3,E37:3,E38:3,E40:3,E41:3,E42:3,E8:3,E39:3,"137":3,"171":3,"139":3,"262":3,"140":3,"320":3,"310":3,"252":3,"172":3,"258":3,"253":3,"254":3,"255":3,"249":3,"367":3,"289":3,"120":3,"248":3,"175":3,"250":3,"170":3,"348":3,"362":3,"134":3,"229":3,"231":3,"232":3,"216":3,"217":3,"219":3,"322":3,"376":3,"218":3,"414":3,"133":3,"114":4,"115":4,"222":4,"224":4,"234":4,"286":4,"321":4,"326":4,"350":4,"364":4,"365":4,"389":4,"391":4,"102":4,"368":4,"392":4,"399":4,"403":4,"400":4,"401":4,"402":4,"260":4,"103":4,"214":4,"212":4,"271":4,"272":4,"280":4,"282":4,"279":4,"278":4,"277":4,"283":4,"284":4,"274":4,"273":4,"276":4,"150":4,"267":4,"210":4,"147":4,"281":4,"151":4,"201":4,"146":4,"269":4,"148":4,"270":4,"297":4,"203":4,"261":4,"208":4,"108":4,"227":4,"238":4,"109":4,"111":4,"112":4,"113":4,"287":4,"302":4,"325":4,"165":4,"242":4,"244":4,"243":4,"334":4,"265":4,"135":4,"352":4,"355":4,"356":4,"357":4,"358":4,"369":4,"370":4,"371":4,"372":4,"373":4,"374":4,"377":4,"381":4,"382":4,"383":4,"384":4,"386":4,"387":4,"396":4,"397":4,"398":4,"408":4,"409":4,"410":4,"411":4,"412":4,"419":4,"423":4,"418":4,"426":4,"421":4,"395":4,"429":4,"303":4,"431":4,"428":4,"416":4,"430":4,"427":4,"407":4,"129":6,E5:6,"349":6,"308":6,"339":6,"340":6,"341":6,"338":6,"393":6,"415":7,TH1:7,"98":7,"245":7,"354":7};tC.privacy.allCategories=tC.privacy.allCategories||[{id:1,label:"Cookies Carrefour ",categoryParent:-1,description:"J'accepte le d\u00e9p\u00f4t de ces cookies sur mon navigateur",isUsedInTarget:"",subCategories:null,tagsId:[]},{id:2,label:"Cookies Tiers",categoryParent:-1,description:"J'accepte le d\u00e9p\u00f4t de ces cookies sur mon navigateur",isUsedInTarget:"",subCategories:null,tagsId:[420]},{id:3,label:"Mesure d'audience",categoryParent:-1,description:"Ces cookies nous permettent d'obtenir des statistiques de fr\u00e9quentation de notre site (ex : nombre de visites, pages les plus consult\u00e9es, etc.). Carrefour utilise ces donn\u00e9es pour identifier les dysfonctionnements \u00e9ventuels du site et les am\u00e9liorations \u00e0 apporter. Toutes les informations recueillies par ces cookies sont anonymes.\nLes cookies mesures d'audience non soumis \u00e0 consentement sont depos\u00e9s directement, vous pouvez les modifier ici \u00e0 tout moment.\nGoogle Analytics | Content Square",isUsedInTarget:"",subCategories:null,tagsId:[174,"E6","E18","E2","E7","E9","E15","E16","E17","E19","E35","E45","E47","E37","E38","E40","E41","E42","E8","E39",137,171,139,262,140,320,310,252,172,258,253,254,255,249,367,289,120,248,175,250,170,348,362,134,229,231,232,216,217,219,322,376,218,414,133]},{id:4,label:"Marketing",categoryParent:-1,description:"Les cookies marketing permettent d'am\u00e9liorer la pertinence des publicit\u00e9s que vous voyez et \u00e9viter la diffusion d'annonces que vous avez d\u00e9j\u00e0 vues.\nGoogle Ads | Facebook | Google Ad Manager | Criteo | Effinity | 1000 Mercis | Adikteev | Armis | Aufeminin | Bing | Google Campaign Manager | Leboncoin | Lengow | Havas | Outbrain | Pinterest | Reelevant | Powerspace | Snapchat | Twitter | Clic2Buy | Cobrowse ",isUsedInTarget:"",subCategories:null,tagsId:[114,115,222,224,234,286,321,326,350,364,365,389,391,102,368,392,399,403,400,401,402,260,103,214,212,271,272,280,282,279,278,277,283,284,274,273,276,150,267,210,147,281,151,201,146,269,148,270,297,203,261,208,108,227,238,109,111,112,113,287,302,325,165,242,244,243,334,265,135,352,355,356,357,358,369,370,371,372,373,374,377,381,382,383,384,386,387,396,397,398,408,409,410,411,412,419,423,418,426,421,395,429,303,431,428,416,430,427,407]},{id:5,label:"S\u00e9curit\u00e9 (non param\u00e9trable)",categoryParent:-1,description:"Ces cookies sont utilis\u00e9s pour am\u00e9liorer la performance et la s\u00e9curit\u00e9 du site.",isUsedInTarget:"",subCategories:null,tagsId:[]},{id:6,label:"Fonctionnels (non param\u00e9trable)",categoryParent:-1,description:"Ces cookies permettent de m\u00e9moriser vos choix et vos pr\u00e9f\u00e9rences sur votre compte et de fournir des fonctionnalit\u00e9s facilitant l'utilisation du site. Certains sont indispensables au bon fonctionnement du site et sont strictement n\u00e9cessaires \u00e0 la fourniture d'un service que vous avez express\u00e9ment demand\u00e9.\nAB Tasty | AppDynamics | Carrefour | CommandersAct",isUsedInTarget:"",subCategories:null,tagsId:[129,"E5",349,308,339,340,341,338,393]},{id:7,label:"Fonctionnalit\u00e9s additionnelles",categoryParent:-1,description:"Ces cookies permettent d'activer des fonctionnalit\u00e9s additionnelles sur le site, afin par exemple de vous proposer des jeux concours, de reccueillir vos avis ou de faciliter vos achats.",isUsedInTarget:"",subCategories:null,tagsId:[415,"TH1",98,245,354]},{id:8,label:"Accepter tous les cookies",categoryParent:-1,description:"accepter tous les cookies",isUsedInTarget:"",subCategories:null,tagsId:[]}];tC.privacy.setOptinAll=tC.privacy.setOptinAll||function(a){tC.privacy.In(tC.privacyID,tC.privacyVersion,"ALL",tC.privacy.allSelectableCategoriesId,a)};tC.privacy.setOptoutAll=tC.privacy.setOptoutAll||function(a){tC.privacy.Out(tC.privacyID,tC.privacyVersion,"ALL","ALL",a)};tC.privacy.updateCategoriesForRendering=tC.privacy.updateCategoriesForRendering||function(a,f){var d=[];a.forEach(function(g){f.forEach(function(h){if(g.id==h.id){if(g.categoryParent==-1&&h.is_hidden==1){d.push(g.id)}g.label=h.label||g.label;g.description=h.description||g.description;g.position=h.position||g.position;return}});if(g.subCategories){g.subCategories=tC.privacy.updateCategoriesForRendering(g.subCategories,f)}});for(var b=0;b<d.length;b++){var c=a.map(function(g){return g.id}).indexOf(d[b]);a.splice(c,1)}return a.sort(function(h,g){return h.position-g.position})};tC.privacy.allSelectableCategoriesId=tC.privacy.allSelectableCategoriesId||["3","4","5","6","7"];if(tC.getCookie("TCPID")==""){tC.setCookie("TCPID",tC.privacy.rand(),393,"/",tC.domain())}tC.onDomReady(function(){(function(c,a){var b=function(g,h){var f=this;this.processWaitingPrivacyScript=function(){var l=h.querySelectorAll('script[type="text/tc_privacy"]');for(var d=0;d<l.length;++d){var k=l[d];if(k.dataset.processing!=="true"){var m=k.dataset.vendor||null;var j=k.dataset.category||null;if(f.getCategoryIdConsent(j)||(j===null&&m===null)){f.executeScript(k)}}}};this.getCategoryIdConsent=function(d){return(tC.privacy.getOptinCategories().indexOf(String(d))>-1)};this.executeScript=function(d){var j=h.createElement("script");d.dataset.processing="true";if(d.getAttribute("src")){j.src=d.getAttribute("src")}else{j.innerHTML=d.innerHTML}for(var k=0;k<d.attributes.length;++k){var l=d.attributes[k];if(l.name!="data-processing"){j.setAttribute(l.name,l.value)}}j.type="text/javascript";d.parentNode.insertBefore(j,d);d.parentNode.removeChild(d)};tC.privacy.sendDataOtherTMS();this.processWaitingPrivacyScript();setInterval(this.processWaitingPrivacyScript,1000)};c.tC.privacyHtmlProcessor=new b(c,a)}(window,document))});try{tC.privacy.document=top.document}catch(e){tC.privacy.document=document}tC.privacy.overrideCatParams=[{id:1,label:null,description:null,position:2,is_hidden:1},{id:2,label:null,description:null,position:3,is_hidden:1},{id:3,label:null,description:null,position:6,is_hidden:0},{id:4,label:null,description:null,position:4,is_hidden:0},{id:5,label:null,description:null,position:8,is_hidden:0},{id:6,label:null,description:null,position:7,is_hidden:0},{id:7,label:null,description:null,position:5,is_hidden:0},{id:8,label:null,description:null,position:1,is_hidden:1}];tC.privacy.allCategories=tC.privacy.updateCategoriesForRendering(tC.privacy.allCategories,tC.privacy.overrideCatParams);tC.privacy.getCS=tC.privacy.getCS||function(){return typeof tC.privacyCookieSeparator!=="undefined"?tC.privacyCookieSeparator:"@"};tC.privacy.bootload=function(){tC.privacy.showPrivacy()};tC.privacy.showPrivacy=function(){if(!tC.isCookieEnabled()){return}var b=tC.privacy.document,x=tC.getCookie(tC.privacy.getCN()),t=x.indexOf("@")>=0?x.split("@"):x.split(tC.privacy.getCS()),m="",C=2,y="024",q=b.getElementById("tc_div_preview"),H=q?q:b.body,u=tC.privacy.allCategories;if(b.getElementById("footer_tc_privacy")){b.getElementById("footer_tc_privacy").style.display="block";return}if(t.length<=2||(m!=""&&t[1]!=m)){}else{return}tC.privacy.hitCounter(2,"banner");var w='<p style="text-align: justify; padding: 0; margin: 0;"><span color="#fff" face="Calibri, sans-serif" style="color: #fff; font-family: Calibri, sans-serif; padding: 0; margin: 0; font-size: 12px;"> En poursuivant votre navigation, vous acceptez que Carrefour et ses partenaires utilisent des cookies ou autres traceurs pour r&eacute;aliser des statistiques de fr&eacute;quentation du site, optimiser les services, am&eacute;liorer votre exp&eacute;rience, personnaliser les contenus propos&eacute;s, visualiser et partager des contenus multim&eacute;dia, interagir sur les r&eacute;seaux sociaux, compter les visiteurs provenant de nos partenaires, proposer des publicit&eacute;s cibl&eacute;es selon vos centres d&rsquo;int&eacute;r&ecirc;ts et comportements, r&eacute;concilier des informations vous concernant collect&eacute;es par Carrefour ou avec celles de nos partenaires pour personnaliser nos publicit&eacute;s. Les cookies fonctionnels ne sont pas param&eacute;trables, les autres le sont et peuvent n&eacute;cessiter votre accord pour &ecirc;tre d&eacute;pos&eacute;s. Pour en savoir plus, <a href="https://www.carrefour.fr/cookies" style="color: #fff;">cliquez sur ce lien</a>. Pour <a style="color: #fff; font-weight: bold;" href="#" onclick="tC.privacyCenter.showPrivacyCenter();return false">param&eacute;trer les cookies</a></span></p>',k="Accepter",B="optin",O="Refuse",c="optout",D="";var a=b.createElement("div");var K=b.createElement("div");var M=b.createElement("div");var g=b.createElement("button");var I=b.createElement("button");var A=b.createElement("div");var h=b.createElement("div");var s=b.createElement("style");a.id="tc-privacy-wrapper";K.id="footer_tc_privacy";A.id="footer_tc_privacy_container_button";h.id="footer_tc_privacy_container_text";g.id="footer_tc_privacy_button";I.id="footer_tc_privacy_button_2";M.id="footer_tc_privacy_text";a.className="tc-privacy-wrapper tc-privacy-override";K.className="tc-reset-css tc-privacy-banner tc-privacy-footer";A.className="tc-reset-css tc-privacy-block-button";h.className="tc-reset-css tc-privacy-block-text";g.className="tc-reset-css tc-privacy-button";I.className="tc-reset-css tc-privacy-button";M.className="tc-reset-css tc-privacy-text";function d(){var i=b.getElementById("tc-privacy-wrapper");i.parentNode.removeChild(i)}function l(){if(B=="optout"){tC.privacy.Out(C,y,"ALL","ALL","banner_button")}else{tC.privacy.In(C,y,"ALL",tC.privacy.allSelectableCategoriesId,"banner_button")}d();if(typeof window.tc_closePrivacyButton==="function"){window.tc_closePrivacyButton()}}function v(){if(c=="optout"){tC.privacy.Out(C,y,"ALL","ALL","banner_button")}else{tC.privacy.In(C,y,"ALL",tC.privacy.allSelectableCategoriesId,"banner_button")}d();if(typeof window.tc_closePrivacyButton==="function"){window.tc_closePrivacyButton()}}M.innerHTML=w;g.innerHTML=k;I.innerHTML=O;g.title=k;g.type="button";if(g.addEventListener){g.addEventListener("click",function(i){l()},true)}else{if(g.attachEvent){g.attachEvent("onclick",function(i){l()})}}if(I.addEventListener){I.addEventListener("click",function(i){v()},true)}else{if(I.attachEvent){I.attachEvent("onclick",function(i){v()})}}if(D=="1"){A.appendChild(I)}A.appendChild(g);h.appendChild(M);K.appendChild(h);K.appendChild(A);a.appendChild(K);H.appendChild(a);if(typeof window.tc_showPrivacy==="function"){window.tc_showPrivacy()}s.type="text/css";var G=".tc-reset-css {border: none;background: none;}.tc-privacy-wrapper .tc-privacy-banner {width: 100%;left: 0px;text-align: left;opacity: 0.9;font-size: 16px;}.tc-privacy-wrapper .tc-privacy-footer {bottom: 0px;}.tc-privacy-wrapper .tc-privacy-header {top: 0px;}.tc-privacy-wrapper .tc-privacy-block-text {width: 79%;display: inline-block;}.tc-privacy-wrapper .tc-privacy-text {padding: 10px;font-size: 0.75em;text-align: left;}.tc-privacy-wrapper .tc-privacy-block-button, .tc-privacy-wrapper .tc-privacy-block-text {vertical-align: middle;}.tc-privacy-wrapper .tc-privacy-block-button {width: 19%;display: inline-block;right: 10px;}.tc-privacy-wrapper .tc-privacy-button {float: right;margin: 10px 0px 10px 10px;display: block;cursor: pointer;font-size: 0.75em;padding: 5px 10px;}.tc-privacy-wrapper .tc-privacy-button:last-child {margin: 10px 0px;}@media (max-width: 767px) {.tc-privacy-wrapper .tc-privacy-button {    margin: 10px 0;}}.tc-privacy-wrapper .tc-privacy-block-button > button:focus {outline: black 1px dotted;box-shadow: 0 0 0 1px white;-webkit-box-shadow: 0 0 0 1px white;-moz-box-shadow: 0 0 0 1px white;}@media (min-width: 768px) and (max-width: 979px) {.tc-privacy-wrapper .tc-privacy-block-text {    width: 69%;}.tc-privacy-wrapper .tc-privacy-block-button {    width: 29%;}}@media (max-width: 767px) {.tc-privacy-wrapper .tc-privacy-block-text {    width: 100%;}.tc-privacy-wrapper .tc-privacy-block-button {    width: 100%;}.tc-privacy-wrapper .tc-privacy-button {    margin: 0 0 0 0;    float: none;    width: 100%;}}";var p="#ffffff",o="#003F8A",E="#ffffff",f="#003F8A",r="#6faae5",z="#FFFFFF";G+=".tc-privacy-wrapper .tc-privacy-banner {background: "+o+";position: "+(q?"absolute":"fixed")+";z-index: "+(q?"1":"999998")+";}.tc-privacy-wrapper .tc-privacy-text {color: "+p+";}#footer_tc_privacy_button {background: "+E+";color: "+f+";}#footer_tc_privacy_button_2 {background: "+r+";color: "+z+";}";G+="";if(s.styleSheet){s.styleSheet.cssText=G}else{s.appendChild(b.createTextNode(G))}var n=b.getElementsByTagName("head")[0];n.appendChild(s);var F=b.querySelectorAll("#footer_tc_privacy a:not(.tc-open-privacy-center)");for(var L=0;L<F.length;L++){F[L].addEventListener("click",function(){tC.privacy.hit("C",y,C,"banner_link_not_pc")},false)}var N=b.querySelectorAll("#footer_tc_privacy a.tc-open-privacy-center");for(var J=0;J<N.length;J++){N[J].addEventListener("click",function(){tC.privacy.hit("C",y,C,"banner_link_pc")},false)}};tC.privacyCenter={};tC.privacyCenter.showPrivacyCenter=function(){tC.privacy.hitCounter(2,"pc");if(tC.privacy.cookieData===null){tC.privacy.init()}var a=tC.privacy.document,b=tC.privacy.getContainer(a),d=a.getElementById("tc_div_preview"),c={id:2,version:"024",reactived:"",headerContent:"Gestion des cookies",headerBgColor:"#003F8A",headerColor:"#FFFFFF",bodyContent:"<p>Pour vous permettre de b&eacute;n&eacute;ficier des services propos&eacute;s par le site tels que la consultation de produits, l'inscription &agrave; certains services (newsletters, mes magasins pr&eacute;f&eacute;r&eacute;s, etc.), d&rsquo;optimiser son utilisation et sa personnalisation (notamment personnalisation des offres et des publicit&eacute;s) en fonction de votre profil, le site utilise des cookies. <br /><br />Vous pouvez &agrave; tout moment activer/d&eacute;sactiver les cookies</p><style>.category:nth-child(4) .btn-group {pointer-events: none!important;}.category:nth-child(5) .btn-group {pointer-events: none!important;}.category:nth-child(4) .btn-xs {background-color: #003F8A!important;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAAAXNSR0IArs4c6QAAAJJJREFUGBmNjksOgkAQBceI/A7nmgUH8GREA+pCDYjxbE09Q4eYIPiSSvdMVw+E8EfMLIZCarTmI+5watjTbxZ9yXAF5QbxzwWGki+g3GGSORwg9236CM6gPCDxWeBQ6pa8IQPJDSgtTLK2uNhCBcoL6k9n1lG/Zf8MAy0dR1HlCanPZyuClk7Qr8r+AqL+f/HlARMRrMCysohIAAAAAElFTkSuQmCC') no-repeat center;padding-left: 2px!important;padding-right: 2px!important;}.category:nth-child(4) .btn-xs>span {opacity: 0!important;}.category:nth-child(4) .btn-toggle>span {display: none!important;}.category:nth-child(5) .btn-xs {background-color: #003F8A!important;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAAAXNSR0IArs4c6QAAAJJJREFUGBmNjksOgkAQBceI/A7nmgUH8GREA+pCDYjxbE09Q4eYIPiSSvdMVw+E8EfMLIZCarTmI+5watjTbxZ9yXAF5QbxzwWGki+g3GGSORwg9236CM6gPCDxWeBQ6pa8IQPJDSgtTLK2uNhCBcoL6k9n1lG/Zf8MAy0dR1HlCanPZyuClk7Qr8r+AqL+f/HlARMRrMCysohIAAAAAElFTkSuQmCC') no-repeat center;padding-left: 2px!important;padding-right: 2px!important;}.category:nth-child(5) .btn-xs>span {opacity: 0!important;}.category:nth-child(5) .btn-toggle>span {display: none!important;}.modal-content,.modal-header{border-radius:0!important}.modal-body,.modal-content,.modal-footer{border-bottom:none!important;border-top:none!important}.modal-content{border-radius:5px!important;border-right:none!important;border-left:none!important;box-shadow:0 0 0 #000!important}.modal-body{font-size:1.2em!important}.btn-toggle{border-radius:15px!important;overflow:hidden!important;padding:1px;height:24px!important;border:1px solid #BBB!important}.btn-toggle button{background-color:#FFF!important;box-shadow:0 0 9px -2px rgba(0,0,0,0.9);border-radius:15px!important;border:none!important;width:20px!important;height:20px!important}.btn-toggle button span{display:none!important}.btn-toggle .btn-primary{background-color:#003F8A!important;height:30px!important;width:70px!important;border-radius:0!important;position:absolute!important;left:-5px!important;top:-5px!important;z-index:0!important}.btn-toggle .btn-default{z-index:2!important}.btn-toggle .btn-no.btn-default{float:right!important}.btn-no.btn-primary{background:#f0f0f0!important}.modal-footer{padding:5px!important;text-align:center!important;background-color:#f3f4f4!important}.category-description.tc-description{width:90%;padding-bottom:1.5em;font-size:14px!important}.category-simple.col-sm-12:last-of-type .category-description.tc-description:last-of-type{padding-bottom:0!important;margin-bottom:0!important}.modal-footer button{height:50px}p.text-intro p{font-size:14px}h4.modal-title{font-size:32px}#privacy-cat-modal .text-intro{margin-bottom:none!important}.category-simple.col-sm-12:first-of-type .tc-title:first-of-type{float:right;margin-right:10px}.modal-footer .btn-primary{margin-right:auto!important;margin-left:auto!important;background-color:#003F8A!important}.btn-default.btn-yes{background-color:#FFF!important}.category{width:100%}.tc-title{max-width:90%!important}.category:nth-child(4) .btn-toggle {background-color: #003F8A!important;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAAAXNSR0IArs4c6QAAAJJJREFUGBmNjksOgkAQBceI/A7nmgUH8GREA+pCDYjxbE09Q4eYIPiSSvdMVw+E8EfMLIZCarTmI+5watjTbxZ9yXAF5QbxzwWGki+g3GGSORwg9236CM6gPCDxWeBQ6pa8IQPJDSgtTLK2uNhCBcoL6k9n1lG/Zf8MAy0dR1HlCanPZyuClk7Qr8r+AqL+f/HlARMRrMCysohIAAAAAElFTkSuQmCC') no-repeat center;padding-left: 2px!important;padding-right: 2px!important;min-width: 24px!important;}.category:nth-child(5) .btn-toggle {background-color: #003F8A!important;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAAAXNSR0IArs4c6QAAAJJJREFUGBmNjksOgkAQBceI/A7nmgUH8GREA+pCDYjxbE09Q4eYIPiSSvdMVw+E8EfMLIZCarTmI+5watjTbxZ9yXAF5QbxzwWGki+g3GGSORwg9236CM6gPCDxWeBQ6pa8IQPJDSgtTLK2uNhCBcoL6k9n1lG/Zf8MAy0dR1HlCanPZyuClk7Qr8r+AqL+f/HlARMRrMCysohIAAAAAElFTkSuQmCC') no-repeat center;padding-left: 2px!important;padding-right: 2px!important;min-width: 24px!important;}.category:nth-child(4) .btn-xs>span {opacity: 0!important;}.category:nth-child(4) .btn-toggle>span {display: none!important;}.category:nth-child(5) .btn-xs>span {opacity: 0!important;}.category:nth-child(5) .btn-toggle>span {display: none!important;}.category:nth-child(4) .btn-yes {display: none!important;}.category:nth-child(4) .btn-primary {display: none!important;}.category:nth-child(5) .btn-yes {display: none!important;}.category:nth-child(5) .btn-primary {display: none!important;}</style>",bodyBgColor:"#FFFFFF",bodyColor:"#003F8A",btContent:"Sauvegarder",btTitle:"Sauvegarder",btType:"button",btBgColor:"#003F8A",btColor:"#ffffff",actionType:"optout",ntrlErrorMsg:"You must give your consent or refuse cookies for each category before saving your preferences.",categories:tC.privacy.allCategories,categoriesEnabled:tC.privacy.categories,sizes:{width:2000,height:860},labelBtOn:"On",labelBtOff:"Off",labelYesForAll:"On for all",labelNoForAll:"Off for all",defaultConfig:tC.privacy.cookieData?false:true};tC.privacy.set(c);tC.unique=function(g){var k={},h,f=g.length,j=[];for(h=0;h<f;h++){k[g[h]]=g[h]}for(h in k){j.push(k[h])}return j};tC.privacy.resize=function(j,f){var h=a.getElementById("privacy-overlay"),g=a.getElementById("privacy-container"),i=a.getElementById("privacy-iframe"),k=tC.privacy.getContainerSizes(),j=j||k.width,f=f||k.height;tC.privacy.settings.sizes=k;h.style.width=parseInt(j)+"px";h.style.height=parseInt(f)+"px";g.style.width=parseInt(j)+"px";g.style.height=(parseInt(f)-10)+"px";i.setAttribute("title",tC.privacy.settings.headerContent);i.setAttribute("lang",navigator.language||navigator.userLanguage);i.contentWindow.postMessage(tC.JSON.stringify({type:"resize",width:k.width,height:k.height}),"*")};tC.privacy.close=function(f){a.getElementById("privacy-overlay").style.display="";a.getElementById("privacy-container").style.display="";if(typeof window.tc_closePrivacyCenter==="function"){window.tc_closePrivacyCenter(f)}if(f=="cross"){tC.privacy.hit("C",tC.privacy.settings.version,tC.privacy.settings.id,"pc_cross")}};tC.privacy.setCat=function(h){var n=typeof tc_privacy_force_domain!=="undefined"?tc_privacy_force_domain:null,m=[];h.categories.sort(function(o,f){return o-f});for(var p in h.categories){for(var l in this.settings.categories){var j=this.settings.categories[l];if(j){if(j.id===parseInt(h.categories[p])){if(j.tagsId){m=m.concat(j.tagsId)}}if(j.subCategories){for(var g in j.subCategories){var i=j.subCategories[g];if(parseInt(i.id)===parseInt(h.categories[p])){if(i.tagsId){m=m.concat(i.tagsId)}}}}}}}var k=h.categories.join(",");if(k==-1){tC.setCookie(tC.privacy.getPCCN(),"ALL","/",n);tC.privacy.Out(h.idPrivacy,h.version,m.join("|"),"ALL","pc_save")}else{tC.setCookie(tC.privacy.getPCCN(),k,"/",n);tC.privacy.In(h.idPrivacy,h.version,m.join("|"),k,"pc_save")}tC.privacy.close("save");a.getElementById("footer_tc_privacy").style.display="none"};tC.privacy.getContainerSizes=function(){var l=a.getElementById("tc_div_preview");if(l){var i=l.offsetWidth;f=l.offsetHeight}else{var h=window,m=a,k=m.documentElement,j=m.getElementsByTagName("body")[0],i=h.innerWidth||k.clientWidth||j.clientWidth,f=h.innerHeight||k.clientHeight||j.clientHeight}return{width:i,height:f}};tC.privacy.winResize=function(){if(!tC.privacy.onResize){tC.privacy.onResize=true;setTimeout(function(){tC.privacy.onResize=false;var h=tC.privacy.getContainerSizes(),g=h.width,f=h.height;tC.privacy.resize(g,f)},200)}};tC.privacy.loadedIframe=function(){if(window.addEventListener){window.addEventListener("resize",tC.privacy.winResize,false)}else{window.attachEvent("resize",tC.privacy.winResize)}tC.privacyCenter.showPrivacyCenter()};tC.privacyCenter.showPrivacyCenter=function(){iframe=a.getElementById("privacy-iframe");iframe.contentWindow.postMessage(tC.JSON.stringify({type:"reInit",data:[tC.privacy.categories,tC.privacy.cookieData]}),"*");var g=a.getElementById("privacy-overlay"),f=a.getElementById("privacy-container");g.style.display="block";f.style.display="block";tC.privacy.winResize();if(typeof window.tc_showPrivacyCenter==="function"){window.tc_showPrivacyCenter()}};tC.privacy.initPrivacyCenter=function(){if(tC.privacy.privacyCenterIsInitialized){tC.privacyCenter.showPrivacyCenter()}else{tC.privacy.privacyCenterIsInitialized=true;var i=a.createElement("div"),j=a.createElement("div"),h=a.createElement("iframe"),k=a.getElementById("tc_div_preview"),l=a.createElement("style");i.id="privacy-overlay";j.id="privacy-container";h.id="privacy-iframe";i.className="tc-reset-css tc-privacy-center-overlay";j.className="tc-reset-css tc-privacy-center-container";h.className="tc-reset-css tc-privacy-center-iframe";l.type="text/css";var o=".tc-reset-css {border: none;background: none;}.tc-privacy-center-overlay {background: rgba(0, 0, 0, 0.5); position: fixed;width: 100%;height: 100%;top: 0px;left: 0px;display: none;}.tc-privacy-center-container {position: fixed;width: 100%;height: 100%;top: 0px;left: 0px;display: none;}.tc-privacy-center-iframe {width: 100%;height: 100%;}.tc-privacy-center-overlay, .tc-privacy-center-container {z-index: "+(k?"1":"999999")+";}";if(l.styleSheet){l.styleSheet.cssText=o}else{l.appendChild(a.createTextNode(o))}var q=a.getElementsByTagName("head")[0];q.appendChild(l);var r=window.addEventListener?"addEventListener":"attachEvent",p=window[r],g=r=="attachEvent"?"onmessage":"message";p(g,function(v){try{var u=typeof v.data!=="object"?tC.JSON.parse(v.data):v.data;var n=u.type||null;if(n==="ready"){tC.privacy.settings.sizes=tC.privacy.getContainerSizes();var x="";var t=true;var w="https://cdn.tagcommander.com/privacy-center/3969/privacy_v2_hook_2.js";h.contentWindow.postMessage(tC.JSON.stringify({type:"init",data:tC.privacy.settings,customCss:x,hasBeforeHook:t,jsHooksUrl:w}),"*")}else{if(typeof tC.privacy[u.functionName]=="function"){if(u.params==""){tC.privacy[u.functionName]()}else{try{tC.privacy[u.functionName](JSON.parse(u.params))}catch(s){}}}}}catch(v){}},false);b.appendChild(i);j.appendChild(h);b.appendChild(j);var m=new Date();var f=m.getTime();h.src="https://cdn.tagcommander.com/privacy-center/template/index.htm"}};if(typeof JSON!=="object"){tC.script.add("https://cdn.tagcommander.com/privacy-center/template/tC.json.js",function(){tC.privacy.initPrivacyCenter()})}else{tC.JSON=JSON;tC.privacy.initPrivacyCenter()}};tC.privacy.showPrivacyCenter=tC.privacyCenter.showPrivacyCenter;tc_privacy_used=1;tC.onDomReady(tC.privacy.bootload);}