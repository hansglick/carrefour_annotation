var syncEndUrl='https://app.shopimind.com/procedural_api/sync_user_data.php?data=dmlzaXRvcl9pZD0xNzM2NTkwNDgmc2Vzc2lvbl9pZD0yNzAwOTA5NzImcGFnZV9pZD0xMDc4NTc0MDg2JmRhdGVfcmVmZXJlbmNlX3BhZ2U9MjAyMC0wMS0xOCAxMTowNjowMSZkYXRlX3JlZmVyZW5jZV92aXNpdG9yPTIwMjAtMDEtMTggMTE6MDY6MDEmZGF0ZV9yZWZlcmVuY2Vfc2Vzc2lvbj0yMDIwLTAxLTE4IDExOjA2OjAx';var syncTimeOnPageInterval=false;var maxSyncTimeOnPageInterval=1;var syncTimeOnPage=function(clearTimeOnPageInterval){if(clearTimeOnPageInterval&&syncTimeOnPageInterval)clearInterval(syncTimeOnPageInterval);var xdr=new XMLHttpRequest();xdr.onload=function(){};xdr.open('GET',syncEndUrl);xdr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');xdr.send()};function addUnloadEvent(func){var oldunload=window.onunload;if(typeof window.onunload!='function'){window.onunload=func}else{window.onunload=function(){func();if(oldunload){oldunload()}}}}addUnloadEvent(function(){syncTimeOnPage(true)});function addBeforeUnloadEvent(func){var oldbeforeunload=window.onbeforeunload;if(typeof window.onbeforeunload!='function'){window.onbeforeunload=func}else{window.onbeforeunload=function(){func();if(oldbeforeunload){oldbeforeunload()}}}}addBeforeUnloadEvent(function(){syncTimeOnPage(true)});if(maxSyncTimeOnPageInterval)syncTimeOnPageInterval=setInterval(function(){maxSyncTimeOnPageInterval--;syncTimeOnPage((maxSyncTimeOnPageInterval==0))},5000);