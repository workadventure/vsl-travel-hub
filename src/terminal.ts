/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let popup: any = undefined;
let website: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {


    WA.room.onEnterLayer('zoneComptoir1').subscribe(() => {
        popup = WA.ui.openPopup("comptoir1Popup","Hello, become a lean all-star, start your journey here!",
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
        popup = WA.ui.openPopup("comptoir2Popup","Hello, lean thinking videos, choose and enjoy!",[
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

    WA.room.area.onEnter('departureBoard1').subscribe(() => {
        popup = WA.ui.openPopup("departureBoard1Popup","Check out the presentations schedule.",[
            {
                label: "Open schedule",
                className: "primary",
                callback: async () => {
                    let url = WA.state.departureBoardURL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('departureBoard1').subscribe(closePopup)

    WA.room.area.onEnter('departureBoard2').subscribe(() => {
        popup = WA.ui.openPopup("departureBoard2Popup","Check out the presentations schedule.",[
            {
                label: "Open schedule",
                className: "primary",
                callback: async () => {
                    let url = WA.state.departureBoardURL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('departureBoard2').subscribe(closePopup)

    WA.room.onEnterLayer('zoneSecurity').subscribe(() => {
        popup = WA.ui.openPopup("securityPopup","At VSL, we have participated in the construction of great airports! Check it out!",[
            {
                label: "Watch video",
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