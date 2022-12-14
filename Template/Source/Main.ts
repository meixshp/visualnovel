namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("FudgeStory template starting");

    export let dataForSave = { 
        nameProtagonist: "", 
        pronounsProtagonist: "", 
        crush: "",
        dress: ""
    };
    export let transitions = {
        cloud: {
            duration: 3,
            alpha: "Images/Transitions/clouds.jpg",
            edge: 1,
        },
        swirl: {
            duration: 2,
            alpha: "Images/Transitions/swirl.png",
            edge: 1,
        },
        wet: {
            duration: 2,
            alpha: "Images/Transitions/wet.jpg",
            edge: 1,
        },
    };

    export let sound = {
        //themes:
        dystopia: "Audio/Dystopian.ogg",
        //sfx:
        //voices:
        supermarket_packing: "Audio/supermarket_packing.mp3",
        conversation: "Audio/conversation.mp3",
    };

    export let locations = {
        theathre: {
            name: "Theatre",
            background: "Images/Backgrounds/theatre.png",
        },
        nightcity: {
            name: "Night City",
            background: "Images/Backgrounds/nightcity.png",
        },
        supermarket: {
            name: "Supermarkt",
            background: "Images/Backgrounds/supermarkt_big.jpg",
        },
        black: {
            name: "Black",
            background: "Images/Backgrounds/black.png"
        },
        intro: {
            name: "Intro",
            background: "Images/Backgrounds/splash.png"
        },
        university: {
            name: "University",
            background: "Images/Backgrounds/university.png"
        },
        home: {
            name: "Home",
            background: "Images/Backgrounds/home.png"
        },
        mansion_driveway: {
            name: "Mansion",
            background: "Images/Backgrounds/mansion_driveway.png"
        },
        mansion_closer: {
            name: "Mansion",
            background: "Images/Backgrounds/mansion_closer.png"
        },
        mansion_front: {
            name: "Mansion",
            background: "Images/Backgrounds/mansion_front.png"
        },
        lobby_entrance: {
            name: "Lobby",
            background: "Images/Backgrounds/lobby_entrance.png"
        },
        livingroom: {
            name: "Living Room",
            background: "Images/Backgrounds/livingroom.png"
        },
        kitchen: {
            name: "Kitchen",
            background: "Images/Backgrounds/kitchen.png"
        },
        bathroom: {
            name: "Bathroom",
            background: "Images/Backgrounds/bathroom.png"
        },
    };

    export let sequences = {
        black: {
            name: "Black", 
            background: "Images/Backgrounds/black.png"
        }
    }

    export let characters = {
        narrator: {
            name: "",
        },
        protagonist: {
            name: "",
            look: {
                one: {
                    one: ""
                },
                two: {
                    one: ""
                },
                three: {
                    one: ""
                }
            },
            pronouns: ""
        },

        Emma: {
            name: "Emma",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                good: "Images/Characters/Emma1.png",
            },
        },
        // START CRUSH LIST
        Crush: {
            name: "",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
                happy: "",
                upset: "",
            }
        },        
        Amelie: {
            name: "Faye",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/FayeNew.png",
                upset: "pfad",
            },
        },
        Enzo: {
            name: "Enzo",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/EnzoNew.png",
                upset: "pfad",
            }
        }, 
        Cal: {
            name: "Cal",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/Jill.png",
                upset: "pfad",
            }
        },  
        // END CRUSH LIST      
        // GUEST LIST
        Clara: {
            name: "Clara",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/Clara.png",
                upset: "pfad",
            }
        },  

        // MISC
        Doorman: {
            name: "Doorman",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/Doorman.png",
                upset: "pfad",
            }
        }, 

    };

    export let items = {
        pencil: {
            name: "Pencil",
            description: "Easy to erase",
            image: "Images/Items/Pencil.png",
            static: true  //if true: not consumable
        },
        earpods: {
            name: "Earpods",
            description: "Listen to music without the cables",
            image: "Images/Items/Earpods.png",
            static: true  //if true: not consumable
        }
    }

    // HELPER FUNCTIONS

    export function getCrush(_name: string): void {
        if (_name == "Amelie")
            characters.Crush = characters.Amelie;
        else if (_name == "Enzo")
            characters.Crush = characters.Enzo;
        else if (_name == "Cal")
            characters.Crush = characters.Cal;
    }

    // ANIMATIONS ----------------------------------------------

    export function ghostAnimation(): ƒS.AnimationDefinition {
        return {
            start: {
                translation: ƒS.positionPercent(70, 100),
                color: ƒS.Color.CSS("yellow", 1),
            },
            end: {
                translation: ƒS.positionPercent(40, 100),
                color: ƒS.Color.CSS("blue", 0.5),
            },
            duration: 3,
            playmode: ƒS.ANIMATION_PLAYMODE.LOOP,
        };
    }

    export function getAnimation(): ƒS.AnimationDefinition {
        return {
            start: {
                translation: ƒS.positions.bottomleft,
                rotation: -20,
                scaling: new ƒS.Position(0.5, 1.5),
                color: ƒS.Color.CSS("white", 0.3),
            },
            end: {
                translation: ƒS.positions.bottomright,
                rotation: 20,
                scaling: new ƒS.Position(1.5, 0.5),
                color: ƒS.Color.CSS("red"),
            },
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }

    export function slideInAnimation(): ƒS.AnimationDefinition {
        return {
            start: {
                translation: ƒS.positionPercent(0, 100),
                color: ƒS.Color.CSS("white", 0),
            },
            end: {
                translation: ƒS.positionPercent(50, 100),
                color: ƒS.Color.CSS("white", 1),
            },
            duration: 2,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }

    export function slideToSide(_startPos: number, _endPos: number): ƒS.AnimationDefinition {
        return {
            start: {
                translation: ƒS.positionPercent(_startPos, 100),
                color: ƒS.Color.CSS("white", 1),
            },
            end: {
                translation: ƒS.positionPercent(_endPos, 100),
                color: ƒS.Color.CSS("white", 1),
            },
            duration: 2,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }


    // MENU SHORTCUTS ----------------------------------------

    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
    };

    let gameMenu: ƒS.Menu;
    let menuIsOpen: boolean = true;

    async function buttonFunctionalities(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
        }
    }

    // MENU SHORTCUTS -------------------------------------

    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.F8:
                console.log("saving...");
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.F9:
                console.log("loading...");
                await ƒS.Progress.load();
                break;
            case ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    gameMenu.close();
                    menuIsOpen = false;
                } else {
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            case ƒ.KEYBOARD_CODE.I:
                await ƒS.Inventory.open();
                break;
        }
    }

    // SCENES ------------------------------------------

    window.addEventListener("load", start);
    function start(_event: Event): void {
        gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");

        // scene hierarchy
        let scenes: ƒS.Scenes = [
            
            // CHAPTER ONE
            { scene: one_university, name: "intro scene: meeting your crush" },
            { scene: one_home, name: "crush picks you up at home" },

             // CHAPTER TWO
            { scene: two_partyEntrance, name: "party entrance" },
            { scene: two_livingroom, name: "living room" }
            //{ scene: thirdScene, name: "third scene", id: "thirdScene" },
        ];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        ƒS.Progress.go(scenes);
    }
}
