import{b as t}from"./init-22028896.js";console.log("Script started successfully");let o,e;WA.onInit().then(()=>{WA.room.onEnterLayer("zoneComptoir1").subscribe(()=>{o=WA.ui.openPopup("comptoir1Popup","Hello, you are rather tropical climate or Caribbean climate ?",[{label:"Tropical",className:"primary",callback:async()=>{e=await WA.nav.openCoWebSite("https://player.vimeo.com/video/680787827")}},{label:"Caribbean",className:"success",callback:async()=>{e=await WA.nav.openCoWebSite("https://player.vimeo.com/video/684568939?h=71107d1cc5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479")}}])}),WA.room.onEnterLayer("zoneComptoir2").subscribe(()=>{o=WA.ui.openPopup("comptoir2Popup","Good morning, you are a beach or culture person?",[{label:"Beach",className:"primary",callback:async()=>{e=await WA.nav.openCoWebSite("https://player.vimeo.com/video/554125018")}},{label:"Culture",className:"success",callback:async()=>{e=await WA.nav.openCoWebSite("https://player.vimeo.com/video/435014076")}}])}),WA.room.onEnterLayer("zoneBar").subscribe(()=>{o=WA.ui.openPopup("barPopup","Hello, I’m Tom, want to travel back to the 80’s ?",[{label:"NO",className:"primary",callback:async()=>{a()}},{label:"YES",className:"success",callback:async()=>{e=await WA.nav.openCoWebSite("https://www.youtube.com/embed/5YbjzztYbUo")}}])}),WA.room.onEnterLayer("zoneGate").subscribe(()=>{o=WA.ui.openPopup("gatePopup","You want to know the secret life of your suitcase? We explain it all here!",[{label:"Watch",className:"primary",callback:async()=>{e=await WA.nav.openCoWebSite("https://player.vimeo.com/video/452151588")}}])}),WA.room.onEnterLayer("zoneSecurity").subscribe(()=>{o=WA.ui.openPopup("securityPopup","At the BBI, we made great airports! Want to see the proof in the pudding?",[{label:"YES",className:"primary",callback:async()=>{e=await WA.nav.openCoWebSite("https://player.vimeo.com/video/531707800")}}])}),WA.room.onEnterLayer("zoneNFT").subscribe(()=>{o=WA.ui.openPopup("nftPopup","NFT supply in progress...stay tuned!",[])}),WA.room.onLeaveLayer("zoneComptoir1").subscribe(a),WA.room.onLeaveLayer("zoneComptoir2").subscribe(a),WA.room.onLeaveLayer("zoneBar").subscribe(a),WA.room.onLeaveLayer("zoneNFT").subscribe(a),WA.room.onLeaveLayer("zoneSecurity").subscribe(a),WA.room.onLeaveLayer("zoneGate").subscribe(a),t().then(()=>{console.log("Scripting API Extra ready")}).catch(r=>console.error(r))}).catch(r=>console.error(r));function a(){o!==void 0&&(o.close(),o=void 0),e!==void 0&&e.close()}
