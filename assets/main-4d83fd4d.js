import{b as i}from"./init-22028896.js";console.log("Script started successfully");let o,r;WA.onInit().then(()=>{WA.room.onEnterLayer("zoneWelcome").subscribe(()=>{o=WA.ui.openPopup("popupWelcome","Hi guys, welcome on the VSL Travel Hub! To find your way consult the map here.",[{className:"primary",label:"Open the map",callback:async()=>{let e=WA.state.welcomeGuyURL;r=await WA.nav.openCoWebSite(e)}}])}),WA.room.onLeaveLayer("zoneWelcome").subscribe(a),WA.room.onEnterLayer("zoneBuilding").subscribe(()=>{o=WA.ui.openPopup("popupBuilding","A dive into VSL.",[{className:"primary",label:"Open",callback:async()=>{r=await WA.nav.openCoWebSite("https://drive.google.com/uc?id=1sPr2ZLe6pF0rB3jtnzWWw0MGhhAkhNGi")}}])}),WA.room.onLeaveLayer("zoneBuilding").subscribe(a),i().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e))}).catch(e=>console.error(e));function a(){o!==void 0&&(o.close(),o=void 0),r!==void 0&&r.close()}