import{b as d}from"./init-22028896.js";console.log("Script started successfully");let o,a,i,t,r,s,l,p,n,b,m,u,v;WA.onInit().then(()=>{WA.room.onEnterLayer("zoneComptoir1").subscribe(()=>{o=WA.ui.openPopup("comptoir1Popup","Hello, you are rather tropical climate or Caribbean climate ?",[{label:"Tropical",className:"primary",callback:async()=>{l=await WA.nav.openCoWebSite("https://player.vimeo.com/video/680787827")}},{label:"Caribbean",className:"success",callback:async()=>{p=await WA.nav.openCoWebSite("https://player.vimeo.com/video/684568939?h=71107d1cc5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479")}}])}),WA.room.onEnterLayer("zoneComptoir2").subscribe(()=>{a=WA.ui.openPopup("comptoir2Popup","Good morning, you are a beach or culture person?",[{label:"Beach",className:"primary",callback:async()=>{n=await WA.nav.openCoWebSite("https://player.vimeo.com/video/554125018")}},{label:"Culture",className:"success",callback:async()=>{b=await WA.nav.openCoWebSite("https://player.vimeo.com/video/435014076")}}])}),WA.room.onEnterLayer("zoneBar").subscribe(()=>{i=WA.ui.openPopup("barPopup","Hello, I’m Tom, want to travel back to the 80’s ?",[{label:"NO",className:"primary",callback:async()=>{e()}},{label:"YES",className:"success",callback:async()=>{m=await WA.nav.openCoWebSite("https://www.youtube.com/embed/5YbjzztYbUo")}}])}),WA.room.onEnterLayer("zoneGate").subscribe(()=>{r=WA.ui.openPopup("gatePopup","You want to know the secret life of your suitcase? We explain it all here!",[{label:"Watch",className:"primary",callback:async()=>{u=await WA.nav.openCoWebSite("https://player.vimeo.com/video/452151588")}}])}),WA.room.onEnterLayer("zoneSecurity").subscribe(()=>{s=WA.ui.openPopup("securityPopup","At the BBI, we made great airports! Want to see the proof in the pudding?",[{label:"YES",className:"primary",callback:async()=>{v=await WA.nav.openCoWebSite("https://player.vimeo.com/video/531707800")}}])}),WA.room.onEnterLayer("zoneNFT").subscribe(()=>{t=WA.ui.openPopup("nftPopup","NFT supply in progress...stay tuned!",[])}),WA.room.onLeaveLayer("zoneComptoir1").subscribe(e),WA.room.onLeaveLayer("zoneComptoir2").subscribe(e),WA.room.onLeaveLayer("zoneBar").subscribe(e),WA.room.onLeaveLayer("zoneNFT").subscribe(e),WA.room.onLeaveLayer("zoneSecurity").subscribe(e),WA.room.onLeaveLayer("zoneGate").subscribe(e),d().then(()=>{console.log("Scripting API Extra ready")}).catch(c=>console.error(c))}).catch(c=>console.error(c));function e(){v!==void 0&&v.close(),l!==void 0&&l.close(),p!==void 0&&p.close(),n!==void 0&&n.close(),b!==void 0&&b.close(),m!==void 0&&m.close(),u!==void 0&&u.close(),o!==void 0&&(o.close(),o=void 0),a!==void 0&&(a.close(),a=void 0),i!==void 0&&(i.close(),i=void 0),t!==void 0&&(t.close(),t=void 0),r!==void 0&&(r.close(),r=void 0),s!==void 0&&(s.close(),s=void 0)}