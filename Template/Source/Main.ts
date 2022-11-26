namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("FudgeStory template starting");

    export let dataForSave = { nameProtagonist: "" };
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
        university: {
            name: "University",
            background: "Images/Backgrounds/university.png"
        },
    };

    export let characters = {
        narrator: {
            name: "",
        },
        protagonist: {
            name: "",
        },
        Helene: {
            name: "Helene",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/aisaka.png",
                upset: "pfad",
            },
        },
        Lily: {
            name: "Kassiererin",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                good: "Images/Characters/kohana.png",
            },
        },
    };

    // ANIMATION ----------------------------------------------

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
                translation: ƒS.positionPercent(30, 100),
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
        }
    }

    // SCENES ------------------------------------------

    window.addEventListener("load", start);
    function start(_event: Event): void {
        gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        // scene hierarchy
        let scenes: ƒS.Scenes = [
            //{ scene: firstScene, name: "first scene" },
            { scene: thirdScene, name: "third scene" },
            //{ scene: secondScene, name: "second scene" },
        ];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        ƒS.Progress.go(scenes);
    }
}
