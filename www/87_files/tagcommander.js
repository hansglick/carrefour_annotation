function loadScript(file, position) {
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.async = false;
  document.getElementsByTagName(position).item(0).appendChild(script);
}

loadScript('https://cdn.tagcommander.com/3969/tc_CarrefourONE_20.js?rn=202001181054', 'head');

/*
## Creating a Custom Event
var event = new CustomEvent('myCustomEvent');
document.dispatchEvent(event);

## Listening for a Custom Event
document.addEventListener('myCustomEvent', function(){});
*/

// Polyfill for CustomEvent
(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  window.CustomEvent = CustomEvent;
})();