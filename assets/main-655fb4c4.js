import{b as r}from"./init-22028896.js";console.log("Script started successfully");let e;WA.onInit().then(()=>{WA.room.onEnterLayer("zoneWelcome").subscribe(()=>{e=WA.ui.openPopup("popupWelcome","Hi guys, welcome on the BBI travel Hub ! To find your way, consult the map here.",[{className:"primary",label:"Open the map",callback:()=>{WA.nav.openCoWebSite("/map.pdf")}}])}),WA.room.onLeaveLayer("zoneWelcome").subscribe(a),WA.room.onEnterLayer("zoneBuilding").subscribe(()=>{e=WA.ui.openPopup("popupBuilding","Hi, here you can enter the VSL private space.",[{className:"primary",label:"Open a new tab",callback:()=>{WA.nav.openTab("https://vsl.com/private-space/vsl-job/")}}])}),WA.room.onLeaveLayer("zoneBuilding").subscribe(a),r().then(()=>{console.log("Scripting API Extra ready")}).catch(o=>console.error(o))}).catch(o=>console.error(o));function a(){e!==void 0&&(e.close(),e=void 0),WA.nav.closeCoWebSite()}