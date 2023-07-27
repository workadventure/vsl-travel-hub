/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {

    WA.room.onEnterLayer('zoneWelcome').subscribe(() => {
        currentPopup = WA.ui.openPopup("popupWelcome", "Hi guys, welcome on the BBI travel Hub ! To find your way, consult the map here.", [
            {
                className: "primary",
                label: "Open the map",
                callback: () => { WA.nav.openCoWebSite("/map.pdf") }
            }
        ]);
    })

    WA.room.onLeaveLayer('zoneWelcome').subscribe(closePopup)

    WA.room.onEnterLayer('zoneBuilding').subscribe(() => {
        currentPopup = WA.ui.openPopup("popupBuilding","Hi, here you can enter the VSL private space.", [
            {
                className: "primary",
                label: "Open a new tab",
                callback: () => { WA.nav.openTab("https://vsl.com/private-space/vsl-job/") }
            }
        ]);
    })
    WA.room.onLeaveLayer('zoneBuilding').subscribe(closePopup)


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
    WA.nav.closeCoWebSite()
}

export {};
