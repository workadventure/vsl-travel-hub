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

    WA.room.area.onEnter('game1').subscribe(() => {
        popup = WA.ui.openPopup("game1Popup","Needs wording update...",[
            {
                label: "Game",
                className: "normal",
                callback: async () => {
                    const url = WA.state.game1URL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            },
            {
                label: "Video",
                className: "primary",
                callback: async () => {
                    const url = WA.state.game1VideoURL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('game1').subscribe(closePopup)

    WA.room.area.onEnter('game2').subscribe(() => {
        popup = WA.ui.openPopup("game2Popup","Needs wording update...",[
            {
                label: "Game",
                className: "normal",
                callback: async () => {
                    const url = WA.state.game2URL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            },
            {
                label: "Video",
                className: "primary",
                callback: async () => {
                    const url = WA.state.game2VideoURL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('game2').subscribe(closePopup)

    WA.room.area.onEnter('game3').subscribe(() => {
        popup = WA.ui.openPopup("game3Popup","Needs wording update...",[
            {
                label: "Game",
                className: "normal",
                callback: async () => {
                    const url = WA.state.game3URL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            },
            {
                label: "Video",
                className: "primary",
                callback: async () => {
                    const url = WA.state.game3VideoURL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('game3').subscribe(closePopup)

    WA.room.area.onEnter('game4').subscribe(() => {
        popup = WA.ui.openPopup("game4Popup","Needs wording update...",[
            {
                label: "Game",
                className: "normal",
                callback: async () => {
                    const url = WA.state.game4URL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            },
            {
                label: "Video",
                className: "primary",
                callback: async () => {
                    const url = WA.state.game4VideoURL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('game4').subscribe(closePopup)


    WA.room.area.onEnter('departureBoard1').subscribe(() => {
        popup = WA.ui.openPopup("departureBoard1Popup","Check out the presentations schedule.",[
            {
                label: "Open schedule",
                className: "primary",
                callback: async () => {
                    const url = WA.state.departureBoardURL as string
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
                    const url = WA.state.departureBoardURL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('departureBoard2').subscribe(closePopup)

    WA.room.area.onEnter('presentationScreen1').subscribe(() => {
        popup = WA.ui.openPopup("presentationScreen1Popup","Check out our event presentation.",[
            {
                label: "See the presentation",
                className: "primary",
                callback: async () => {
                    const url = WA.state.presentationScreen1URL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('presentationScreen1').subscribe(closePopup)

    WA.room.area.onEnter('presentationScreen2').subscribe(() => {
        popup = WA.ui.openPopup("presentationScreen2Popup","Check out our event presentation.",[
            {
                label: "See the presentation",
                className: "primary",
                callback: async () => {
                    const url = WA.state.presentationScreen2URL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('presentationScreen2').subscribe(closePopup)

    WA.room.area.onEnter('presentationScreen3').subscribe(() => {
        popup = WA.ui.openPopup("presentationScreen3Popup","Check out our event presentation.",[
            {
                label: "See the presentation",
                className: "primary",
                callback: async () => {
                    const url = WA.state.presentationScreen3URL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('presentationScreen3').subscribe(closePopup)

    WA.room.area.onEnter('presentationScreen4').subscribe(() => {
        popup = WA.ui.openPopup("presentationScreen4Popup","Check out our event presentation.",[
            {
                label: "See the presentation",
                className: "primary",
                callback: async () => {
                    const url = WA.state.presentationScreen4URL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('presentationScreen4').subscribe(closePopup)

    WA.room.area.onEnter('presentationScreen5').subscribe(() => {
        popup = WA.ui.openPopup("presentationScreen5Popup","Check out our event presentation.",[
            {
                label: "See the presentation",
                className: "primary",
                callback: async () => {
                    const url = WA.state.presentationScreen5URL as string
                    website = await WA.nav.openCoWebSite(url);
                }
            }
        ]);
    })
    WA.room.area.onLeave('presentationScreen5').subscribe(closePopup)

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
