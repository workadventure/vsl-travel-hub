/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let popup: any = undefined;
let website: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {


    WA.room.onEnterLayer('zoneComptoir1').subscribe(() => {
        popup = WA.ui.openPopup("comptoir1Popup","Hello, you are rather tropical climate or Caribbean climate ?",
            [{
                label: "Tropical",
                className: "primary",
                callback: async () => {
                    website = await WA.nav.openCoWebSite('https://player.vimeo.com/video/680787827');
                }
            },
            {
                label: "Caribbean",
                className: "success",
                callback: async () => {
                    website = await WA.nav.openCoWebSite('https://player.vimeo.com/video/684568939?h=71107d1cc5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479');
                }
            }]
        );
    })
    WA.room.onEnterLayer('zoneComptoir2').subscribe(() => {
        popup = WA.ui.openPopup("comptoir2Popup","Good morning, you are a beach or culture person?",[
            {
                label: "Beach",
                className: "primary",
                callback: async () => {
                    website = await WA.nav.openCoWebSite('https://player.vimeo.com/video/554125018');
                }
            },
            {
                label: "Culture",
                className: "success",
                callback: async () => {
                    website = await WA.nav.openCoWebSite('https://player.vimeo.com/video/435014076');
                }
            }
            ]);    
    })
    WA.room.onEnterLayer('zoneBar').subscribe(() => {
        popup = WA.ui.openPopup("barPopup","Hello, I’m Tom, want to travel back to the 80’s ?",[
            {
                label: "NO",
                className: "primary",
                callback: async () => {
                    closePopup();
                }
            },
            {
                label: "YES",
                className: "success",
                callback: async () => {
                    website = await WA.nav.openCoWebSite('https://www.youtube.com/embed/5YbjzztYbUo');
                }
            }
        ]);
    })
    WA.room.onEnterLayer('zoneGate').subscribe(() => {
        popup = WA.ui.openPopup("gatePopup","You want to know the secret life of your suitcase? We explain it all here!",[
            {
                label: "Watch",
                className: "primary",
                callback: async () => {
                    website = await WA.nav.openCoWebSite('https://player.vimeo.com/video/452151588');
                }
            }
        ]);
    })
    WA.room.onEnterLayer('zoneSecurity').subscribe(() => {
        popup = WA.ui.openPopup("securityPopup","At the BBI, we made great airports! Want to see the proof in the pudding?",[
            {
                label: "YES",
                className: "primary",
                callback: async () => {
                    website = await WA.nav.openCoWebSite('https://player.vimeo.com/video/531707800');
                }
            }
        ]);
    })
    WA.room.onEnterLayer('zoneNFT').subscribe(() => {
        popup = WA.ui.openPopup("nftPopup","NFT supply in progress...stay tuned!",[]);
    })

    WA.room.onLeaveLayer('zoneComptoir1').subscribe(closePopup)
    WA.room.onLeaveLayer('zoneComptoir2').subscribe(closePopup)
    WA.room.onLeaveLayer('zoneBar').subscribe(closePopup)
    WA.room.onLeaveLayer('zoneNFT').subscribe(closePopup)
    WA.room.onLeaveLayer('zoneSecurity').subscribe(closePopup)
    WA.room.onLeaveLayer('zoneGate').subscribe(closePopup)

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
