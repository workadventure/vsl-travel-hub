/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let popup: any = undefined;
let website: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {

    WA.room.onEnterLayer('zoneWelcome').subscribe(() => {
        popup = WA.ui.openPopup("popupWelcome", "Hi guys, welcome on the VSL Travel Hub! To find your way consult the map here.", [
            {
                className: "primary",
                label: "Open the map",
                callback: async () => {
                    let url = WA.state.welcomeGuyURL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })

    WA.room.onLeaveLayer('zoneWelcome').subscribe(closePopup)

    WA.room.onEnterLayer('zoneBuilding').subscribe(() => {
        popup = WA.ui.openPopup("popupBuilding","A dive into VSL.", [
            {
                className: "primary",
                label: "Open",
                callback: async () => {
                    website = await WA.nav.openCoWebSite("https://drive.google.com/uc?id=1sPr2ZLe6pF0rB3jtnzWWw0MGhhAkhNGi")
                }
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
    if (popup !== undefined) {
        popup.close();
        popup = undefined;
    }
    if (website !== undefined) {
        website.close();
    }
}

export {};
