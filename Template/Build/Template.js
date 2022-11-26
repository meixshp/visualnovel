"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.dataForSave = { nameProtagonist: "" };
    Template.transitions = {
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
    Template.sound = {
        //themes:
        dystopia: "Audio/Dystopian.ogg",
        //sfx:
        //voices:
        supermarket_packing: "Audio/supermarket_packing.mp3",
        conversation: "Audio/conversation.mp3",
    };
    Template.locations = {
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
    Template.characters = {
        narrator: {
            name: "",
        },
        protagonist: {
            name: "",
        },
        Helene: {
            name: "Helene",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/aisaka.png",
                upset: "pfad",
            },
        },
        Lily: {
            name: "Kassiererin",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                good: "Images/Characters/kohana.png",
            },
        },
    };
    // ANIMATION ----------------------------------------------
    function ghostAnimation() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(70, 100),
                color: Template.ƒS.Color.CSS("yellow", 1),
            },
            end: {
                translation: Template.ƒS.positionPercent(40, 100),
                color: Template.ƒS.Color.CSS("blue", 0.5),
            },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP,
        };
    }
    Template.ghostAnimation = ghostAnimation;
    function getAnimation() {
        return {
            start: {
                translation: Template.ƒS.positions.bottomleft,
                rotation: -20,
                scaling: new Template.ƒS.Position(0.5, 1.5),
                color: Template.ƒS.Color.CSS("white", 0.3),
            },
            end: {
                translation: Template.ƒS.positions.bottomright,
                rotation: 20,
                scaling: new Template.ƒS.Position(1.5, 0.5),
                color: Template.ƒS.Color.CSS("red"),
            },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.getAnimation = getAnimation;
    function slideInAnimation() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(0, 100),
                color: Template.ƒS.Color.CSS("white", 0),
            },
            end: {
                translation: Template.ƒS.positionPercent(30, 100),
                color: Template.ƒS.Color.CSS("white", 1),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.slideInAnimation = slideInAnimation;
    // MENU SHORTCUTS ----------------------------------------
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
    };
    let gameMenu;
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
        }
    }
    // MENU SHORTCUTS -------------------------------------
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("saving...");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("loading...");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    // SCENES ------------------------------------------
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        // scene hierarchy
        let scenes = [
            //{ scene: firstScene, name: "first scene" },
            { scene: Template.thirdScene, name: "third scene" },
            //{ scene: secondScene, name: "second scene" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function university() {
        console.log("first scene: starting");
        // SPEECH
        let text = {
            Helene: {
                T0000: "Das ist Text Nummer 1.",
                T0001: "Das hier ist der zweite Text.",
                T0002: "Hier kommt die Nummer drei.",
                T0003: "Beruhig dich mal.",
                T0004: "LOL OK",
            },
        };
        let dialog = {
            O1: "Was ist mit Nummer 4? Was ist mit Nummer 4?",
            O2: "War's das?",
            O3: "OK??"
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.university);
        //ƒS.Sound.fade(sound.dystopia, 0.5, 2, true);
        await Template.ƒS.update(Template.transitions.cloud.duration, Template.transitions.cloud.alpha, Template.transitions.cloud.edge);
        await Template.ƒS.Character.show(Template.characters.Helene, Template.characters.Helene.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        //await ƒS.Character.animate(characters.Helene, characters.Helene.pose.happy, ghostAnimation());
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0002);
        await Template.ƒS.Character.hide(Template.characters.Helene);
        let dialogueElement = await Template.ƒS.Menu.getInput(dialog, "userOptions");
        switch (dialogueElement) {
            case dialog.O1:
                console.log("Option 1");
                await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0004);
                break;
            case dialog.O2:
                console.log("Option 2");
                await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0003);
                break;
            case dialog.O3:
                console.log("Option 3");
                await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0004);
                break;
        }
    }
    Template.university = university;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting!!");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstScene() {
        console.log("first scene: starting");
        // SPEECH
        let text = {
            Helene: {
                T0000: "Das ist Text Nummer 1.",
                T0001: "Das hier ist der zweite Text.",
                T0002: "Hier kommt die Nummer drei.",
                T0003: "Beruhig dich mal.",
                T0004: "LOL OK",
            },
        };
        let dialog = {
            O1: "Was ist mit Nummer 4? Was ist mit Nummer 4?",
            O2: "War's das?",
            O3: "OK??"
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.nightcity);
        //ƒS.Sound.fade(sound.dystopia, 0.5, 2, true);
        await Template.ƒS.update(Template.transitions.cloud.duration, Template.transitions.cloud.alpha, Template.transitions.cloud.edge);
        await Template.ƒS.Character.show(Template.characters.Helene, Template.characters.Helene.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        //await ƒS.Character.animate(characters.Helene, characters.Helene.pose.happy, ghostAnimation());
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0002);
        await Template.ƒS.Character.hide(Template.characters.Helene);
        let dialogueElement = await Template.ƒS.Menu.getInput(dialog, "userOptions");
        switch (dialogueElement) {
            case dialog.O1:
                console.log("Option 1");
                await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0004);
                break;
            case dialog.O2:
                console.log("Option 2");
                await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0003);
                break;
            case dialog.O3:
                console.log("Option 3");
                await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0004);
                break;
        }
    }
    Template.firstScene = firstScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondScene() {
        console.log("second scene: starting");
        // SPEECH
        let text = {
            Helene: {
                T0000: "Das ist die zweite Szene",
                T0001: "Lets goooo",
                T0002: "Hallo Hallo",
            },
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.theathre);
        await Template.ƒS.update(Template.transitions.wet.duration, Template.transitions.wet.alpha, Template.transitions.wet.edge);
        await Template.ƒS.Character.show(Template.characters.Helene, Template.characters.Helene.pose.happy, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0002);
    }
    Template.secondScene = secondScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function thirdScene() {
        console.log("Audio  Scene starting");
        let text = {
            Helene: {
                T0001: "Guten Tag!",
                T0002: "Mit Karte bitte.",
                T0003: "Den Kassenzettel brauche ich nicht, danke.",
                T0004: "Tschüüüüss!"
            },
            Kassiererin: {
                T0001: "Hallo!",
                T0002: "Das macht einmal 783,29 Yen bitte.",
                T0003: "Kassenzettel?",
                T0004: "Schönen Tag noch!"
            }
        };
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.play(Template.sound.supermarket_packing, 1, true);
        await Template.ƒS.Location.show(Template.locations.university);
        Template.ƒS.Sound.fade(Template.sound.conversation, 0.5, 1, true);
        await Template.ƒS.Character.show(Template.characters.Helene, Template.characters.Helene.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Lily, text.Kassiererin.T0001);
        await Template.ƒS.Character.animate(Template.characters.Lily, Template.characters.Lily.pose.good, Template.slideInAnimation());
        //await ƒS.Character.show(characters.Lily, characters.Lily.pose.good, ƒS.positionPercent(30, 100));
        //await ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Lily, text.Kassiererin.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Lily, text.Kassiererin.T0003);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0003);
        await Template.ƒS.Speech.tell(Template.characters.Lily, text.Kassiererin.T0004);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0004);
    }
    Template.thirdScene = thirdScene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map