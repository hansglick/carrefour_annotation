!function(e){function t(){}function r(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],s(e,this)}function i(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void r._immediateFn(function(){var r=1===e._state?t.onFulfilled:t.onRejected;if(null!==r){var i;try{i=r(e._value)}catch(e){return void a(t.promise,e)}n(t.promise,i)}else(1===e._state?n:a)(t.promise,e._value)}))}function n(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var i=t.then;if(t instanceof r)return e._state=3,e._value=t,void o(e);if("function"==typeof i)return void s((n=i,c=t,function(){n.apply(c,arguments)}),e)}e._state=1,e._value=t,o(e)}catch(t){a(e,t)}var n,c}function a(e,t){e._state=2,e._value=t,o(e)}function o(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t]);e._deferreds=null}function s(e,t){var r=!1;try{e(function(e){r||(r=!0,n(t,e))},function(e){r||(r=!0,a(t,e))})}catch(e){if(r)return;r=!0,a(t,e)}}var c=setTimeout;r.prototype.catch=function(e){return this.then(null,e)},r.prototype.then=function(e,r){var n=new this.constructor(t);return i(this,new function(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}(e,r,n)),n},r.all=function(e){var t=Array.prototype.slice.call(e);return new r(function(e,r){function i(a,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var s=o.then;if("function"==typeof s)return void s.call(o,function(e){i(a,e)},r)}t[a]=o,0==--n&&e(t)}catch(e){r(e)}}if(0===t.length)return e([]);for(var n=t.length,a=0;a<t.length;a++)i(a,t[a])})},r.resolve=function(e){return e&&"object"==typeof e&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,r){r(e)})},r.race=function(e){return new r(function(t,r){for(var i=0,n=e.length;i<n;i++)e[i].then(t,r)})},r._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){c(e,0)},r._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},r._setImmediateFn=function(e){r._immediateFn=e},r._setUnhandledRejectionFn=function(e){r._unhandledRejectionFn=e},"undefined"!=typeof module&&module.exports?module.exports=r:e.Promise||(e.Promise=r)}(this),function(e,t){function r(e,t){return(65535&e)*t+(((e>>>16)*t&65535)<<16)}function i(e,t){return e<<t|e>>>32-t}function n(e){return e=r(e^e>>>16,2246822507),(e=r(e^=e>>>13,3266489909))^e>>>16}function a(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var r=[0,0,0,0];return r[3]+=e[3]+t[3],r[2]+=r[3]>>>16,r[3]&=65535,r[2]+=e[2]+t[2],r[1]+=r[2]>>>16,r[2]&=65535,r[1]+=e[1]+t[1],r[0]+=r[1]>>>16,r[1]&=65535,r[0]+=e[0]+t[0],r[0]&=65535,[r[0]<<16|r[1],r[2]<<16|r[3]]}function o(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var r=[0,0,0,0];return r[3]+=e[3]*t[3],r[2]+=r[3]>>>16,r[3]&=65535,r[2]+=e[2]*t[3],r[1]+=r[2]>>>16,r[2]&=65535,r[2]+=e[3]*t[2],r[1]+=r[2]>>>16,r[2]&=65535,r[1]+=e[1]*t[3],r[0]+=r[1]>>>16,r[1]&=65535,r[1]+=e[2]*t[2],r[0]+=r[1]>>>16,r[1]&=65535,r[1]+=e[3]*t[1],r[0]+=r[1]>>>16,r[1]&=65535,r[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],r[0]&=65535,[r[0]<<16|r[1],r[2]<<16|r[3]]}function s(e,t){return 32===(t%=64)?[e[1],e[0]]:32>t?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function c(e,t){return 0===(t%=64)?e:32>t?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function u(e,t){return[e[0]^t[0],e[1]^t[1]]}function h(e){return u(e=o(e=u(e=o(e=u(e,[0,e[0]>>>1]),[4283543511,3981806797]),[0,e[0]>>>1]),[3301882366,444984403]),[0,e[0]>>>1])}var d={version:"2.1.2",x86:{},x64:{}};d.x86.hash32=function(e,t){for(var a=(e=e||"").length%4,o=e.length-a,s=t||0,c=0,u=0;u<o;u+=4)s=r(s=i(s^=c=r(c=i(c=r(c=255&e.charCodeAt(u)|(255&e.charCodeAt(u+1))<<8|(255&e.charCodeAt(u+2))<<16|(255&e.charCodeAt(u+3))<<24,3432918353),15),461845907),13),5)+3864292196;switch(c=0,a){case 3:c^=(255&e.charCodeAt(u+2))<<16;case 2:c^=(255&e.charCodeAt(u+1))<<8;case 1:s^=c=r(c=i(c=r(c^=255&e.charCodeAt(u),3432918353),15),461845907)}return(s=n(s^=e.length))>>>0},d.x86.hash128=function(e,t){t=t||0;for(var a=(e=e||"").length%16,o=e.length-a,s=t,c=t,u=t,h=t,d=0,l=0,g=0,m=0,f=0;f<o;f+=16)d=255&e.charCodeAt(f)|(255&e.charCodeAt(f+1))<<8|(255&e.charCodeAt(f+2))<<16|(255&e.charCodeAt(f+3))<<24,l=255&e.charCodeAt(f+4)|(255&e.charCodeAt(f+5))<<8|(255&e.charCodeAt(f+6))<<16|(255&e.charCodeAt(f+7))<<24,g=255&e.charCodeAt(f+8)|(255&e.charCodeAt(f+9))<<8|(255&e.charCodeAt(f+10))<<16|(255&e.charCodeAt(f+11))<<24,m=255&e.charCodeAt(f+12)|(255&e.charCodeAt(f+13))<<8|(255&e.charCodeAt(f+14))<<16|(255&e.charCodeAt(f+15))<<24,s=i(s^=d=r(d=i(d=r(d,597399067),15),2869860233),19),s=r(s+=c,5)+1444728091,c=i(c^=l=r(l=i(l=r(l,2869860233),16),951274213),17),c=r(c+=u,5)+197830471,u=i(u^=g=r(g=i(g=r(g,951274213),17),2716044179),15),u=r(u+=h,5)+2530024501,h=i(h^=m=r(m=i(m=r(m,2716044179),18),597399067),13),h=r(h+=s,5)+850148119;switch(m=g=l=d=0,a){case 15:m^=e.charCodeAt(f+14)<<16;case 14:m^=e.charCodeAt(f+13)<<8;case 13:h^=m=r(m=i(m=r(m^=e.charCodeAt(f+12),2716044179),18),597399067);case 12:g^=e.charCodeAt(f+11)<<24;case 11:g^=e.charCodeAt(f+10)<<16;case 10:g^=e.charCodeAt(f+9)<<8;case 9:u^=g=r(g=i(g=r(g^=e.charCodeAt(f+8),951274213),17),2716044179);case 8:l^=e.charCodeAt(f+7)<<24;case 7:l^=e.charCodeAt(f+6)<<16;case 6:l^=e.charCodeAt(f+5)<<8;case 5:c^=l=r(l=i(l=r(l^=e.charCodeAt(f+4),2869860233),16),951274213);case 4:d^=e.charCodeAt(f+3)<<24;case 3:d^=e.charCodeAt(f+2)<<16;case 2:d^=e.charCodeAt(f+1)<<8;case 1:s^=d=r(d=i(d=r(d^=e.charCodeAt(f),597399067),15),2869860233)}return s=(s^=e.length)+(c^=e.length)+(u^=e.length),c+=s+=h^=e.length,u+=s,h+=s,s=n(s),s+=c=n(c),s+=u=n(u),c+=s+=h=n(h),u+=s,h+=s,("00000000"+(s>>>0).toString(16)).slice(-8)+("00000000"+(c>>>0).toString(16)).slice(-8)+("00000000"+(u>>>0).toString(16)).slice(-8)+("00000000"+(h>>>0).toString(16)).slice(-8)},d.x64.hash128=function(e,t){t=t||0;for(var r=(e=e||"").length%16,i=e.length-r,n=[0,t],d=[0,t],l=[0,0],g=[0,0],m=[2277735313,289559509],f=[1291169091,658871167],p=0;p<i;p+=16)l=[255&e.charCodeAt(p+4)|(255&e.charCodeAt(p+5))<<8|(255&e.charCodeAt(p+6))<<16|(255&e.charCodeAt(p+7))<<24,255&e.charCodeAt(p)|(255&e.charCodeAt(p+1))<<8|(255&e.charCodeAt(p+2))<<16|(255&e.charCodeAt(p+3))<<24],g=[255&e.charCodeAt(p+12)|(255&e.charCodeAt(p+13))<<8|(255&e.charCodeAt(p+14))<<16|(255&e.charCodeAt(p+15))<<24,255&e.charCodeAt(p+8)|(255&e.charCodeAt(p+9))<<8|(255&e.charCodeAt(p+10))<<16|(255&e.charCodeAt(p+11))<<24],n=a(o(n=a(n=s(n=u(n,l=o(l=s(l=o(l,m),31),f)),27),d),[0,5]),[0,1390208809]),d=a(o(d=a(d=s(d=u(d,g=o(g=s(g=o(g,f),33),m)),31),n),[0,5]),[0,944331445]);switch(l=[0,0],g=[0,0],r){case 15:g=u(g,c([0,e.charCodeAt(p+14)],48));case 14:g=u(g,c([0,e.charCodeAt(p+13)],40));case 13:g=u(g,c([0,e.charCodeAt(p+12)],32));case 12:g=u(g,c([0,e.charCodeAt(p+11)],24));case 11:g=u(g,c([0,e.charCodeAt(p+10)],16));case 10:g=u(g,c([0,e.charCodeAt(p+9)],8));case 9:d=u(d,g=o(g=s(g=o(g=u(g,[0,e.charCodeAt(p+8)]),f),33),m));case 8:l=u(l,c([0,e.charCodeAt(p+7)],56));case 7:l=u(l,c([0,e.charCodeAt(p+6)],48));case 6:l=u(l,c([0,e.charCodeAt(p+5)],40));case 5:l=u(l,c([0,e.charCodeAt(p+4)],32));case 4:l=u(l,c([0,e.charCodeAt(p+3)],24));case 3:l=u(l,c([0,e.charCodeAt(p+2)],16));case 2:l=u(l,c([0,e.charCodeAt(p+1)],8));case 1:n=u(n,l=o(l=s(l=o(l=u(l,[0,e.charCodeAt(p)]),m),31),f))}return n=u(n,[0,e.length]),d=a(d=u(d,[0,e.length]),n=a(n,d)),n=h(n),d=a(d=h(d),n=a(n,d)),("00000000"+(n[0]>>>0).toString(16)).slice(-8)+("00000000"+(n[1]>>>0).toString(16)).slice(-8)+("00000000"+(d[0]>>>0).toString(16)).slice(-8)+("00000000"+(d[1]>>>0).toString(16)).slice(-8)},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=d),e.murmurHash3=d):"function"==typeof define&&define.amd?define([],function(){return d}):(d._murmurHash3=e.murmurHash3,d.noConflict=function(){return e.murmurHash3=d._murmurHash3,d._murmurHash3=void 0,d.noConflict=void 0,d},e.murmurHash3=d)}(this),function(e){"use strict";var t={},r=e.fpglobal||{test:function(e){return Promise.all(e.map(function(e){if(!t.hasOwnProperty(e))throw"No test registered with the alias "+e;return t[e]()})).then(function(e){return murmurHash3.x86.hash128(e.join("~"))})},registerTest:function(e,r){t[e]=r}};"object"==typeof module&&"undefined"!=typeof exports&&(module.exports=r),e.fpglobal=r}(window),function(e){"use strict";fpglobal.registerTest("adBlocker",function(){return new Promise(function(e){var t=document.createElement("div");t.innerHTML="&nbsp;",t.className="adsbox",t.style.display="block",t.style.position="absolute",t.style.top="0px",t.style.left="-9999px";try{document.body.appendChild(t),window.setTimeout(function(){var r=0===t.offsetHeight;return document.body.removeChild(t),e(r)},10)}catch(t){return e(!1)}})})}(window),function(e){"use strict";fpglobal.registerTest("audio",function(){return new Promise(function(e){try{var t=new(window.AudioContext||window.webkitAudioContext),r=(t.createOscillator(),t.createAnalyser(),t.createGain(),t.createScriptProcessor(4096,1,1),t.destination),i=t.sampleRate.toString()+"_"+r.maxChannelCount+"_"+r.numberOfInputs+"_"+r.numberOfOutputs+"_"+r.channelCount+"_"+r.channelCountMode+"_"+r.channelInterpretation;return e(i)}catch(t){return e("")}})})}(window),function(e){"use strict";fpglobal.registerTest("availableScreenResolution",function(){return new Promise(function(e){return e((screen.availHeight>screen.availWidth?[screen.availHeight,screen.availWidth]:[screen.availWidth,screen.availHeight]).join("x"))})})}(window),function(e){"use strict";fpglobal.registerTest("canvas",function(){return new Promise(function(e){var t=[],r=document.createElement("canvas");r.width=2e3,r.height=200,r.style.display="inline";var i=r.getContext("2d");return i.rect(0,0,10,10),i.rect(2,2,6,6),t.push("canvas winding:"+(!1===i.isPointInPath(5,5,"evenodd")?"yes":"no")),i.textBaseline="alphabetic",i.fillStyle="#f60",i.fillRect(125,1,62,20),i.fillStyle="#069",i.font="11pt no-real-font-123",i.fillText("Cwm fjordbank glyphs vext quiz, 😃",2,15),i.fillStyle="rgba(102, 204, 0, 0.2)",i.font="18pt Arial",i.fillText("Cwm fjordbank glyphs vext quiz, 😃",4,45),i.globalCompositeOperation="multiply",i.fillStyle="rgb(255,0,255)",i.beginPath(),i.arc(50,50,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(0,255,255)",i.beginPath(),i.arc(100,50,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(255,255,0)",i.beginPath(),i.arc(75,100,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(255,0,255)",i.arc(75,75,75,0,2*Math.PI,!0),i.arc(75,75,25,0,2*Math.PI,!0),i.fill("evenodd"),t.push("canvas fp:"+r.toDataURL()),e(t.join("~"))})})}(window),function(e){"use strict";fpglobal.registerTest("colorDepth",function(){return new Promise(function(e){var t=screen.colorDepth;return 32===t&&(t=24),e(t||"")})})}(window),function(e){"use strict";fpglobal.registerTest("cookies",function(){return new Promise(function(e){return e(navigator.cookieEnabled)})})}(window),function(e){"use strict";fpglobal.registerTest("cpuClass",function(){return new Promise(function(e){return e(navigator.cpuClass||"")})})}(window),function(e){"use strict";fpglobal.registerTest("deviceDpi",function(){return new Promise(function(e){return e((screen.deviceXDPI||0)+"x"+(screen.deviceYDPI||0))})})}(window),function(e){"use strict";fpglobal.registerTest("doNotTrack",function(){return new Promise(function(e){return e(navigator.doNotTrack||navigator.msDoNotTrack||window.doNotTrack||"")})})}(window),function(e){"use strict";fpglobal.registerTest("indexedDb",function(){return new Promise(function(e){try{return e(!!window.indexedDB)}catch(t){return e(!0)}})})}(window);var FontDetector=function(){var e=["monospace","sans-serif","serif"],t=document.getElementsByTagName("body")[0],r=document.createElement("span");r.style.fontSize="201px",r.style.visibility="hidden",r.innerHTML="mmmmmmmmmmlli";var i={},n={};for(var a in e)r.style.fontFamily=e[a],t.appendChild(r),i[e[a]]=r.offsetWidth,n[e[a]]=r.offsetHeight;this.detect=function(t){var a=!0;for(var o in e){r.style.fontFamily=t+","+e[o];var s=r.offsetWidth!=i[e[o]]||r.offsetHeight!=n[e[o]];a=a&&s;if(a===false)break}return a},this.endDetect=function(){t.removeChild(r)}};!function(e){"use strict";fpglobal.registerTest("installedFonts",function(){return new Promise(function(e){for(var t=new FontDetector,r=["ADOBE CASLON PRO","ADOBE GARAMOND PRO","AVENIR","Adobe Fangsong Std","Adobe Ming Std","Agency FB","Aharoni","Amazone BT","AngsanaUPC","Antique Olive","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arab","Arial Baltic","Arial CE","Arial CYR","Arial Greek","Arial MT","Arial Unicode MS","Arrus BT","AvantGarde Bk BT","AvantGarde Md BT","Ayuthaya","Baskerville Old Face","Bell MT","Benguiat Bk BT","Berlin Sans FB","BernhardFashion BT","BernhardMod BT","Big Caslon","Bitstream Vera Sans Mono","Bitstream Vera Serif","BlairMdITC TT","Bodoni 72 Smallcaps","Bodoni MT Poster Compressed","Boulder","Bradley Hand","Broadway","Browallia New","BrowalliaUPC","Calisto MT","Cambria Math","Centaur","Chalkboard","Chalkboard SE","Chalkduster","Charter BT","ChelthmITC Bk BT","Chiller","Comic Sans MS","Constantia","Copperplate","Corbel","Cordia New","CordiaUPC","Coronet","Courier New Baltic","Courier New CE","Courier New CYR","Courier New TUR","Cuckoo","DFKai-SB","DaunPenh","Dauphin","David","DejaVu LGC Sans Mono","Denmark","Desdemona","DokChampa","Dotum","Ebrima","Edwardian Script ITC","Eras Bold ITC","EucrosiaUPC","Euphemia","Eurostile","FRUTIGER","FangSong","Felix Titling","Forte","Fransiscan","FreesiaUPC","French Script MT","FrnkGothITC Bk BT","Fruitger","Futura Bk BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Galliard BT","Garamond","Gautami","Geeza Pro","Geneva","GeoSlab 703 Lt BT","Geometr231 BT","Geometr231 Hv BT","Gigi","Gill Sans","GoudyOLSt BT","GulimChe","GungSeo","Gurmukhi MN","Harlow Solid Italic","Heather","HeiT","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hiragino Sans GB","Hoefler Text","Humanst521 BT","Humanst521 Lt BT","Impact","Imprint MT Shadow","Incised901 BT","Incised901 Lt BT","Informal Roman","Informal011 BT","IrisUPC","Kabel Bk BT","KacstOne","KaiTi","Khmer UI","Kokila","LUCIDA GRANDE","Latha","Leelawadee","Lohit Gujarati","Long Island","Lucida Calligraphy","Lucida Console","Lucida Sans","Lucida Sans Typewriter","Lydian BT","MS Gothic","MS Mincho","MS PGothic","MS Reference Sans Serif","MS Reference Specialty","MS Serif","MUSEO","MYRIAD","Malgun Gothic","Mangal","Marigold","Market","Marlett","Meiryo","Meiryo UI","Menlo","Microsoft PhagsPa","Microsoft Uighur","MingLiU","MingLiU_HKSCS","Minion","Miriam Fixed","Mona Lisa Solid ITC TT","Monaco","Monotype Corsiva","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Nyala","Old Century","Old English Text MT","Onyx","Oriya Sangam MN","PMingLiU","Palatino","Parchment","Pegasus","Perpetua","Perpetua Titling MT","Pickwick","Poster","Pristina","Raavi","Rage Italic","Rockwell","Roman","Sakkal Majalla","Savoye LET","Sawasdee","Segoe UI Symbol","Serifa BT","Serifa Th BT","Showcard Gothic","Shruti","Signboard","SimHei","SimSun","SimSun-ExtB","Simplified Arabic","Simplified Arabic Fixed","Sinhala Sangam MN","Sketch Rockwell","Socket","Stencil","Styllo","Swis721 BlkEx BT","Swiss911 XCm BT","Symbol","Synchro LET","System","TRAJAN PRO","Technical","Teletype","Tempus Sans ITC","Thonburi","Times","Times New Roman Baltic","Times New Roman CYR","Times New Roman PS","Trebuchet MS","Tubular","Tunga","Tw Cen MT","TypoUpright BT","Ubuntu","Unicorn","Utopia","Viner Hand ITC","Vivaldi","Vrinda","Westminster","Wide Latin","Zurich BlkEx BT"],i=[],n=0;n<r.length;n++)t.detect(r[n])&&i.push(r[n]);return t.endDetect(),e(i.join("~"))})})}(window),function(e){"use strict";var t,r;r=function(e){try{return JSON.parse(e)}catch(e){return!1}},t=function(){function e(){this.names=r('[ "Latin", "Chinese", "Arabic", "Devanagari", "Cyrillic", "Bengali/Assamese", "Kana", "Gurmukhi", "Javanese", "Hangul", "Telugu", "Tamil", "Malayalam", "Burmese", "Thai", "Sundanese", "Kannada", "Gujarati", "Lao", "Odia", "Ge-ez", "Sinhala", "Armenian", "Khmer", "Greek", "Lontara", "Hebrew", "Tibetan", "Georgian", "Modern Yi", "Mongolian", "Tifinagh", "Syriac", "Thaana", "Inuktitut", "Cherokee" ]'),this.codes=r("[[76,97,116,105,110], [27721,23383], [1575,1604,1593,1585,1576,1610,1577], [2342,2375,2357,2344,2366,2327,2352,2368], [1050,1080,1088,1080,1083,1080,1094,1072], [2476,2494,2434,2482,2494,32,47,32,2437,2488,2478,2496,2479,2492,2494], [20206,21517], [2583,2625,2608,2606,2625,2582,2624], [43415,43438], [54620,44544], [3108,3142,3122,3137,3095,3137], [2980,2990,3007,2996,3021], [3374,3378,3375,3390,3379,3330], [4121,4156,4116,4154,4121,4140], [3652,3607,3618], [7070,7077,7060,7082,7059], [3221,3240,3277,3240,3233], [2711,2753,2716,2736,2750,2724,2752], [3749,3762,3751], [2825,2852,2893,2837,2867], [4877,4821,4829], [3523,3538,3458,3524,3517], [1344,1377,1397,1400,1409], [6017,6098,6040,6082,6042], [917,955,955,951,957,953,954,972], [6674,6682,6664,6673], [1488,1500,1508,1489,1497,1514], [3926,3964,3921,3851], [4325,4304,4320,4311,4323,4314,4312], [41352,41760], [6190,6179,6185,6189,6179,6191], [11612,11593,11580,11593,11599,11568,11606], [1808,1834,1825,1821,1808], [1931,1960,1928,1964,1920,1960], [5123,5316,5251,5198,5200,5222], [5091,5043,5033], [55295, 7077]]"),this.fontSize=401,this.fontFace="Verdana",this.extraHeigth=15,this.res=[]}return e.prototype.begin=function(){var e,t,r,i,n,a,o,s,c,u,h,d,l,g,m,f,p,w,T,A,S,E,v,_,M,C,P;for(_=0,this.widths=[],this.heights=[],this.support=[],this.test_div=document.createElement("div"),document.body.appendChild(this.test_div),this.test_div.id="WritingTest",i=0,s=(A=this.codes).length;i<s;i++){for(t=A[i],this.height=[],this.width=[],this.div=document.createElement("div"),this.test_div.appendChild(this.div),_+=1,this.div.id=_,this.div.style.display="inline-block",n=0,c=t.length;n<c;n++)e=t[n],this.div.innerHTML="<span style = 'font-family:"+this.fontFace+"; font-size:"+this.fontSize+"px;'>&#"+e+"</span>",this.height.push(document.getElementById(_).clientHeight),this.width.push(document.getElementById(_).clientWidth);for(this.div.innerHTML="",a=0,u=t.length;a<u;a++)e=t[a],this.div.innerHTML+="<span style = 'font-family:"+this.fontFace+"; font-size:"+this.fontSize+"px;'>&#"+e+"</span>";this.test_div.innerHTML+=this.height+";"+this.width+"<br>",this.heights.push(this.height),this.widths.push(this.width)}for(this.tw=this.widths.pop(),this.sw1=this.tw[0],this.sw2=this.tw[1],this.sh=this.heights.pop()[0],o=0,h=(S=this.heights).length;o<h;o++){for(r=S[o],this.passed=0,f=0,d=r.length;f<d;f++)if(r[f]!==this.sh){this.support.push(!0),this.passed=1;break}0===this.passed&&this.support.push(!1)}for(this.writing_scripts_index=0,p=0,l=(E=this.widths).length;p<l;p++){for(w=0,g=(P=E[p]).length;w<g;w++)C=P[w],!1===this.support[this.writing_scripts_index]&&C!==this.sw1&&C!==this.sw2&&(this.support[this.writing_scripts_index]=!0);this.writing_scripts_index+=1}for(this.res=[],this.writing_scripts_index=0,T=0,m=(v=this.support).length;T<m;T++)M=v[T],this.test_div.innerHTML+=this.names[this.writing_scripts_index]+": "+M+" <br>",!0===M&&this.res.push(this.names[this.writing_scripts_index]),this.writing_scripts_index+=1;return this.test_div.remove(),this.res},e}(),fpglobal.registerTest("installedLanguages",function(){return new Promise(function(e){try{var r=new t;return e(r.begin().join("~"))}catch(t){return e("")}})})}(window),function(e){"use strict";fpglobal.registerTest("language",function(){return new Promise(function(e){return e(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||"")})})}(window),function(e){"use strict";fpglobal.registerTest("localIp",function(){return new Promise(function(e){try{var t=new(window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection)({iceServers:[]}),r=function(){};t.createDataChannel(""),t.createOffer(t.setLocalDescription.bind(t),r),t.onicecandidate=function(i){if(t.onicecandidate=r,!i||!i.candidate||!i.candidate.candidate)return e("");var n=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(i.candidate.candidate);if(n!=null)n=n[1];else n='';return e(n)}}catch(t){return e("")}})})}(window),function(e){"use strict";fpglobal.registerTest("localStorage",function(){return new Promise(function(e){try{return e(!!window.localStorage)}catch(t){return e(!0)}})})}(window),function(e){"use strict";fpglobal.registerTest("mediaDevices",function(){return new Promise(function(e){if(!navigator.mediaDevices||!navigator.mediaDevices.enumerateDevices)return e(cd||"");navigator.mediaDevices.enumerateDevices().then(function(t){var r=t.map(function(e){return e.kind+":"+e.label+" id = "+e.deviceId});return e(r.join(","))}).catch(function(t){return e("")})})})}(window),function(e){"use strict";fpglobal.registerTest("pixelRatio",function(){return new Promise(function(e){return e(window.devicePixelRatio||"")})})}(window),function(e){"use strict";fpglobal.registerTest("platform",function(){return new Promise(function(e){return e(navigator.platform||"")})})}(window),function(e){"use strict";fpglobal.registerTest("plugins",function(){return new Promise(function(e){var t=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){t=["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"].map(function(e){try{return new ActiveXObject(e),e}catch(e){return null}})}if(navigator.plugins){for(var r=[],i=0,n=navigator.plugins.length;i<n;i++)r.push(navigator.plugins[i]);navigator.userAgent.match(/palemoon/i)&&(r=r.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));r.map(function(e){for(var r=[],i=0;i<e.length;i++){var n=e[i];r.push([n.type,n.suffixes].join("~"))}t.push([e.name,e.description,r.join(",")].join("::"))})}return e(t.join("~"))})})}(window),function(e){"use strict";fpglobal.registerTest("processorCores",function(){return new Promise(function(e){return e(navigator.hardwareConcurrency)})})}(window),function(e){"use strict";fpglobal.registerTest("publicIp",function(){return new Promise(function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4==t.readyState&&200==t.status&&e(t.responseText)},t.open("GET","https://api.ipify.org",!0),t.send(null)})})}(window),function(e){"use strict";fpglobal.registerTest("screenResolution",function(){return new Promise(function(e){return e((screen.height>screen.width?[screen.height,screen.width]:[screen.width,screen.height]).join("x"))})})}(window),function(e){"use strict";fpglobal.registerTest("sessionStorage",function(){return new Promise(function(e){try{return e(!!window.sessionStorage)}catch(t){return e(!0)}})})}(window),function(e){"use strict";fpglobal.registerTest("timezoneOffset",function(){return new Promise(function(e){return e((new Date).getTimezoneOffset())})})}(window),function(e){"use strict";fpglobal.registerTest("touchSupport",function(){return new Promise(function(e){var t=0,r=!1;void 0!==navigator.maxTouchPoints?t=navigator.maxTouchPoints:void 0!==navigator.msMaxTouchPoints&&(t=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),r=!0}catch(e){}return e([t,r,"ontouchstart"in window].join("~"))})})}(window),function(e){"use strict";fpglobal.registerTest("userAgent",function(){return new Promise(function(e){return e(navigator.userAgent)})})}(window),function(e){"use strict";fpglobal.registerTest("webGl",function(){return new Promise(function(e){try{var t=function(e){return i.clearColor(0,0,0,1),i.enable(i.DEPTH_TEST),i.depthFunc(i.LEQUAL),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),"["+e[0]+", "+e[1]+"]"},r=document.createElement("canvas"),i=null;try{i=r.getContext("webgl")||r.getContext("experimental-webgl")}catch(e){}if(!i)return e("");var n=[],a=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,a);var o=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);i.bufferData(i.ARRAY_BUFFER,o,i.STATIC_DRAW),a.itemSize=3,a.numItems=3;var s=i.createProgram(),c=i.createShader(i.VERTEX_SHADER);i.shaderSource(c,"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),i.compileShader(c);var u=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(u,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),i.compileShader(u),i.attachShader(s,c),i.attachShader(s,u),i.linkProgram(s),i.useProgram(s),s.vertexPosAttrib=i.getAttribLocation(s,"attrVertex"),s.offsetUniform=i.getUniformLocation(s,"uniformOffset"),i.enableVertexAttribArray(s.vertexPosArray),i.vertexAttribPointer(s.vertexPosAttrib,a.itemSize,i.FLOAT,!1,0,0),i.uniform2f(s.offsetUniform,1,1),i.drawArrays(i.TRIANGLE_STRIP,0,a.numItems),null!=i.canvas&&n.push(i.canvas.toDataURL()),n.push("extensions:"+i.getSupportedExtensions().join(";")),n.push("webgl aliased line width range:"+t(i.getParameter(i.ALIASED_LINE_WIDTH_RANGE))),n.push("webgl aliased point size range:"+t(i.getParameter(i.ALIASED_POINT_SIZE_RANGE))),n.push("webgl alpha bits:"+i.getParameter(i.ALPHA_BITS)),n.push("webgl antialiasing:"+(i.getContextAttributes().antialias?"yes":"no")),n.push("webgl blue bits:"+i.getParameter(i.BLUE_BITS)),n.push("webgl depth bits:"+i.getParameter(i.DEPTH_BITS)),n.push("webgl green bits:"+i.getParameter(i.GREEN_BITS)),n.push("webgl max anisotropy:"+((g=(d=i).getExtension("EXT_texture_filter_anisotropic")||d.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||d.getExtension("MOZ_EXT_texture_filter_anisotropic"))?(0===(l=d.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT))&&(l=2),l):null)),n.push("webgl max combined texture image units:"+i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),n.push("webgl max cube map texture size:"+i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE)),n.push("webgl max fragment uniform vectors:"+i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS)),n.push("webgl max render buffer size:"+i.getParameter(i.MAX_RENDERBUFFER_SIZE)),n.push("webgl max texture image units:"+i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS)),n.push("webgl max texture size:"+i.getParameter(i.MAX_TEXTURE_SIZE)),n.push("webgl max varying vectors:"+i.getParameter(i.MAX_VARYING_VECTORS)),n.push("webgl max vertex attribs:"+i.getParameter(i.MAX_VERTEX_ATTRIBS)),n.push("webgl max vertex texture image units:"+i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),n.push("webgl max vertex uniform vectors:"+i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS)),n.push("webgl max viewport dims:"+t(i.getParameter(i.MAX_VIEWPORT_DIMS))),n.push("webgl red bits:"+i.getParameter(i.RED_BITS)),n.push("webgl renderer:"+i.getParameter(i.RENDERER)),n.push("webgl shading language version:"+i.getParameter(i.SHADING_LANGUAGE_VERSION)),n.push("webgl stencil bits:"+i.getParameter(i.STENCIL_BITS)),n.push("webgl vendor:"+i.getParameter(i.VENDOR)),n.push("webgl version:"+i.getParameter(i.VERSION));try{var h=i.getExtension("WEBGL_debug_renderer_info");h&&(n.push("webgl unmasked vendor:"+i.getParameter(h.UNMASKED_VENDOR_WEBGL)),n.push("webgl unmasked renderer:"+i.getParameter(h.UNMASKED_RENDERER_WEBGL)))}catch(e){}return i.getShaderPrecisionFormat?(n.push("webgl vertex shader high float precision:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision),n.push("webgl vertex shader high float precision rangeMin:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).rangeMin),n.push("webgl vertex shader high float precision rangeMax:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).rangeMax),n.push("webgl vertex shader medium float precision:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision),n.push("webgl vertex shader medium float precision rangeMin:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).rangeMin),n.push("webgl vertex shader medium float precision rangeMax:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).rangeMax),n.push("webgl vertex shader low float precision:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.LOW_FLOAT).precision),n.push("webgl vertex shader low float precision rangeMin:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.LOW_FLOAT).rangeMin),n.push("webgl vertex shader low float precision rangeMax:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.LOW_FLOAT).rangeMax),n.push("webgl fragment shader high float precision:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision),n.push("webgl fragment shader high float precision rangeMin:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).rangeMin),n.push("webgl fragment shader high float precision rangeMax:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).rangeMax),n.push("webgl fragment shader medium float precision:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision),n.push("webgl fragment shader medium float precision rangeMin:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).rangeMin),n.push("webgl fragment shader medium float precision rangeMax:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).rangeMax),n.push("webgl fragment shader low float precision:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.LOW_FLOAT).precision),n.push("webgl fragment shader low float precision rangeMin:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.LOW_FLOAT).rangeMin),n.push("webgl fragment shader low float precision rangeMax:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.LOW_FLOAT).rangeMax),n.push("webgl vertex shader high int precision:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_INT).precision),n.push("webgl vertex shader high int precision rangeMin:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_INT).rangeMin),n.push("webgl vertex shader high int precision rangeMax:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_INT).rangeMax),n.push("webgl vertex shader medium int precision:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_INT).precision),n.push("webgl vertex shader medium int precision rangeMin:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_INT).rangeMin),n.push("webgl vertex shader medium int precision rangeMax:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_INT).rangeMax),n.push("webgl vertex shader low int precision:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.LOW_INT).precision),n.push("webgl vertex shader low int precision rangeMin:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.LOW_INT).rangeMin),n.push("webgl vertex shader low int precision rangeMax:"+i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.LOW_INT).rangeMax),n.push("webgl fragment shader high int precision:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_INT).precision),n.push("webgl fragment shader high int precision rangeMin:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_INT).rangeMin),n.push("webgl fragment shader high int precision rangeMax:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_INT).rangeMax),n.push("webgl fragment shader medium int precision:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_INT).precision),n.push("webgl fragment shader medium int precision rangeMin:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_INT).rangeMin),n.push("webgl fragment shader medium int precision rangeMax:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_INT).rangeMax),n.push("webgl fragment shader low int precision:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.LOW_INT).precision),n.push("webgl fragment shader low int precision rangeMin:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.LOW_INT).rangeMin),n.push("webgl fragment shader low int precision rangeMax:"+i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.LOW_INT).rangeMax),e(n.join("~"))):e(n.join("~"))}catch(t){return e("")}var d,l,g})})}(window);function setC(cname,cvalue){var expires="expires=";document.cookie=cname+"="+cvalue+";"+expires+";"}function getC(cname){var value="; "+document.cookie;var parts=value.split("; "+cname+"=");if(parts.length==2)return parts.pop().split(";").shift();return"";}function base64_encode(str){if(window.btoa)return window.btoa(unescape(encodeURIComponent(str)));else{var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};return Base64.encode(unescape(encodeURIComponent(str)))}}var saveData=function(data){var spm=document.createElement('script');spm.type='text/javascript';spm.async=true;spm.src='https://app.shopimind.com/procedural_api/pages_views.php?data='+base64_encode(data).toString();var s_spm=document.getElementsByTagName('script')[0];s_spm.parentNode.insertBefore(spm,s_spm);};var browserTests=["audio","availableScreenResolution","canvas","colorDepth","cookies","cpuClass","deviceDpi","doNotTrack","indexedDb","installedFonts","language","localIp","localStorage","pixelRatio","platform","plugins","processorCores","screenResolution","sessionStorage","timezoneOffset","touchSupport","userAgent","webGl"];function addLoadEvent(func){var oldonload=window.onload;if(typeof window.onload!='function'){window.onload=func;}else{window.onload=function(){func();if(oldonload){oldonload();}}}}addLoadEvent(function(){fpglobal.test(browserTests).then(function(fp){saveData("url=%2F%2Fwww.webecologie.com%2Fsauce-bio%2F7419-creme-de-kokkoh-farine-precuite-3273120015132.html&id_product=7419&id_category=&id_manufacturer=&spm_ident=MkuoCwsh&visitor_id=474b6c3eed5fceb525900154084c4385&session_id=e16ce4856ec9827c5dce1a8bdcc63774&id_combination=&fp="+fp+"&visitor_id=C73181D48FD9225E942B153702CCEB03");});});