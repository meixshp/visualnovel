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
        home: {
            name: "Home",
            background: "Images/Backgrounds/"
        },
    };
    Template.characters = {
        narrator: {
            name: "",
        },
        protagonist: {
            name: "",
        },
        Amelie: {
            name: "Amelie",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/Amelie.png",
                upset: "pfad",
            },
        },
        Nora: {
            name: "Nora",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                good: "Images/Characters/Nora.png",
            },
        },
    };
    Template.items = {
        lipstick: {
            name: "Lipstick",
            description: "To paint your lips",
            image: "Images/Items/blobOG.png",
            static: true //if true: not consumable
        },
        lolly: {
            name: "super duper klasse lolly",
            description: "To paint your lips",
            image: "Images/Items/blobOG.png",
            static: true //if true: not consumable
        }
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
            case Template.ƒ.KEYBOARD_CODE.I:
                await Template.ƒS.Inventory.open();
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
            { scene: Template.university, name: "intro scene" },
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
        console.log("intro scene: starting");
        // SPEECH
        let text = {
            Nora: {
                T0000: "Das ist Text Nummer 1.",
                T0001: "Das hier ist der zweite Text.",
                T0002: "Wie ist dein Name? <br>",
                T0003: "Beruhig dich mal.",
                T0004: "LOL OK",
            },
            Friend: {
                F0000: "Hey!"
            },
            Crush: {
                C0000: "Sehen wir uns dann später?",
                C0001: "Ich hole dich um 7 ab."
            }
        };
        let dialog = {
            O1: "Was ist mit Nummer 4? Was ist mit Nummer 4?",
            O2: "War's das?",
            O3: "OK??"
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.university);
        //ƒS.Sound.fade(sound.dystopia, 0.5, 2, true);
        //await ƒS.update(transitions.cloud.duration, transitions.cloud.alpha, transitions.cloud.edge);
        await Template.ƒS.Character.show(Template.characters.Nora, Template.characters.Nora.pose.good, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        //await ƒS.Character.animate(characters.Helene, characters.Helene.pose.happy, ghostAnimation());
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Nora.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Nora.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Nora.T0002);
        // Name Input
        let name = await Template.ƒS.Speech.getInput();
        Template.dataForSave.nameProtagonist = name;
        Template.characters.protagonist.name = name;
        await Template.ƒS.Speech.tell(Template.characters.Nora, "Hey " + Template.characters.protagonist.name + ". Das ist ein toller Name.");
        await Template.ƒS.Character.show(Template.characters.Amelie, Template.characters.Amelie.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, "Hallo!");
        await Template.ƒS.Speech.tell(Template.characters.Amelie, "Wie gehts?");
        Template.ƒS.Inventory.add(Template.items.lipstick);
        Template.ƒS.Inventory.add(Template.items.lolly);
        Template.ƒS.Inventory.open();
        await Template.ƒS.Character.hide(Template.characters.Nora);
        let dialogueElement = await Template.ƒS.Menu.getInput(dialog, "userOptions");
        switch (dialogueElement) {
            case dialog.O1:
                console.log("Option 1");
                await Template.ƒS.Speech.tell(Template.characters.Nora, text.Nora.T0004);
                break;
            case dialog.O2:
                console.log("Option 2");
                await Template.ƒS.Speech.tell(Template.characters.Nora, text.Nora.T0003);
                break;
            case dialog.O3:
                console.log("Option 3");
                await Template.ƒS.Speech.tell(Template.characters.Nora, text.Nora.T0004);
                break;
        }
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
    }
    Template.university = university;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function home() {
        console.log("home scene: starting");
        // SPEECH
        let text = {
            Nora: {
                T0000: "Schnell, so viel Zeit habe ich nicht mehr",
                T0001: "Was soll ich anziehen?",
                T0002: "Das sieht gut aus!",
                T0003: "Lass uns gehen",
                T0004: "Oh, es klingelt!"
            },
            Crush: {
                C0000: "Hey, bist du bereit?",
                C0001: "Dann lass uns los!"
            }
        };
        let dialog = {
            O1: "Kleid",
            O2: "Hose",
            O3: "Etwas ganz anderes."
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.university);
        //ƒS.Sound.fade(sound.dystopia, 0.5, 2, true);
        //await ƒS.update(transitions.cloud.duration, transitions.cloud.alpha, transitions.cloud.edge);
        await Template.ƒS.Character.show(Template.characters.Nora, Template.characters.Nora.pose.good, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        //await ƒS.Character.animate(characters.Helene, characters.Helene.pose.happy, ghostAnimation());
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Nora.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Nora.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Nora.T0002);
        // Name Input
        let name = await Template.ƒS.Speech.getInput();
        Template.dataForSave.nameProtagonist = name;
        Template.characters.protagonist.name = name;
        await Template.ƒS.Speech.tell(Template.characters.Nora, "Hey " + Template.characters.protagonist.name + ". Das ist ein toller Name.");
        await Template.ƒS.Character.show(Template.characters.Amelie, Template.characters.Amelie.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, "Hallo!");
        await Template.ƒS.Speech.tell(Template.characters.Amelie, "Wie gehts?");
        await Template.ƒS.Character.hide(Template.characters.Nora);
        let dialogueElement = await Template.ƒS.Menu.getInput(dialog, "userOptions");
        switch (dialogueElement) {
            case dialog.O1:
                console.log("Option 1");
                await Template.ƒS.Speech.tell(Template.characters.Nora, text.Nora.T0003);
                break;
            case dialog.O2:
                console.log("Option 2");
                await Template.ƒS.Speech.tell(Template.characters.Nora, text.Nora.T0003);
                break;
            case dialog.O3:
                console.log("Option 3");
                await Template.ƒS.Speech.tell(Template.characters.Nora, text.Nora.T0003);
                break;
        }
    }
    Template.home = home;
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
            Amelie: {
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
        await Template.ƒS.Character.show(Template.characters.Amelie, Template.characters.Amelie.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        //await ƒS.Character.animate(characters.Helene, characters.Helene.pose.happy, ghostAnimation());
        await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Amelie.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Amelie.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Amelie.T0002);
        await Template.ƒS.Character.hide(Template.characters.Amelie);
        let dialogueElement = await Template.ƒS.Menu.getInput(dialog, "userOptions");
        switch (dialogueElement) {
            case dialog.O1:
                console.log("Option 1");
                await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Amelie.T0004);
                break;
            case dialog.O2:
                console.log("Option 2");
                await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Amelie.T0003);
                break;
            case dialog.O3:
                console.log("Option 3");
                await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Amelie.T0004);
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
        await Template.ƒS.Character.show(Template.characters.Amelie, Template.characters.Amelie.pose.happy, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Helene.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Helene.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Helene.T0002);
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
        await Template.ƒS.Location.show(Template.locations.supermarket);
        Template.ƒS.Sound.fade(Template.sound.conversation, 0.5, 1, true);
        await Template.ƒS.Character.show(Template.characters.Amelie, Template.characters.Amelie.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Kassiererin.T0001);
        await Template.ƒS.Character.animate(Template.characters.Nora, Template.characters.Nora.pose.good, Template.slideInAnimation());
        //await ƒS.Character.show(characters.Lily, characters.Lily.pose.good, ƒS.positionPercent(30, 100));
        //await ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Helene.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Kassiererin.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Helene.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Kassiererin.T0003);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Helene.T0003);
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Kassiererin.T0004);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Helene.T0004);
    }
    Template.thirdScene = thirdScene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map