"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.dataForSave = {
        nameProtagonist: "",
        pronounsProtagonist: "",
        crush: "",
        dress: ""
    };
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
    Template.sequences = {
        black: {
            name: "Black",
            background: "Images/Backgrounds/black.png"
        }
    };
    Template.characters = {
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                good: "Images/Characters/Emma1.png",
            },
        },
        // START CRUSH LIST
        Crush: {
            name: "",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
                happy: "",
                upset: "",
            }
        },
        Amelie: {
            name: "Faye",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/FayeNew.png",
                upset: "pfad",
            },
        },
        Enzo: {
            name: "Enzo",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/EnzoNew.png",
                upset: "pfad",
            }
        },
        Cal: {
            name: "Cal",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/Clara.png",
                upset: "pfad",
            }
        },
        // MISC
        Doorman: {
            name: "Doorman",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/Doorman.png",
                upset: "pfad",
            }
        },
    };
    Template.items = {
        pencil: {
            name: "Pencil",
            description: "Easy to erase",
            image: "Images/Items/Pencil.png",
            static: true //if true: not consumable
        },
        earpods: {
            name: "Earpods",
            description: "Listen to music without the cables",
            image: "Images/Items/Earpods.png",
            static: true //if true: not consumable
        }
    };
    // HELPER FUNCTIONS
    function getCrush(_name) {
        if (_name == "Amelie")
            Template.characters.Crush = Template.characters.Amelie;
        else if (_name == "Enzo")
            Template.characters.Crush = Template.characters.Enzo;
        else if (_name == "Cal")
            Template.characters.Crush = Template.characters.Cal;
    }
    Template.getCrush = getCrush;
    // ANIMATIONS ----------------------------------------------
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
                translation: Template.ƒS.positionPercent(50, 100),
                color: Template.ƒS.Color.CSS("white", 1),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.slideInAnimation = slideInAnimation;
    function slideToSide(_startPos, _endPos) {
        return {
            start: {
                translation: Template.ƒS.positionPercent(_startPos, 100),
                color: Template.ƒS.Color.CSS("white", 1),
            },
            end: {
                translation: Template.ƒS.positionPercent(_endPos, 100),
                color: Template.ƒS.Color.CSS("white", 1),
            },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.slideToSide = slideToSide;
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
            { scene: Template.one_university, name: "intro scene" },
            { scene: Template.two_partyEntrance, name: "party entrance" },
            { scene: Template.two_livingroom, name: "living room" }
            //{ scene: thirdScene, name: "third scene", id: "thirdScene" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function one_university() {
        console.log("intro scene: starting");
        // SPEECH
        let text = {
            Narrator: {
                N0000: "Welcome to <strong>Nox Ford University</strong>.",
                N0001: "Before we begin, please enter your name. <br>",
                N0002: ". Which pronouns do you use?",
                N0003: "Perfect, thank you.",
                N0004: "I hope you will enjoy this visual novel as a <strong>Nox Ford</strong> student. See you on the other side!",
                N0005: "You end up trying to sneak a peek behind you. But you don't remain unseen. Shortly after, your crush walks over to you.",
                N0006: "Who out of the group is your crush?",
                N0007: "You get home by 5 o'clock. You have about an hour to get ready.",
                N0008: "As you proceed getting ready, your doorbell rings. Is it 6 o'clock already?",
                N0009: "The two of you get to your crush's car. It's quite an expensive car.",
                N0010: "The ride takes about 45 minutes."
            },
            Protagonist: {
                T0000: "This week's finally over...",
                T0001: "Professor Z. sure put us through a lot with this last paper.",
                T0002: "I should go home and get freshened up quite soon..",
                T0003: "Oh, Emma! What's up, no need to hurry.",
                T0004: "Good luck?",
                T0005: "Shut up, alright. It's just some.. fancy.. gala thing.",
                T0006: "With, like, a dozen other people, though!",
                T0007: "! Yeah. What.. is it exactly we're doing there again?",
                T0008: "This high-class idea of a date sure makes me curious, yeah.",
                T0009: "Alright. See you then, ",
                T0010: "Oh boy. A silent auction? I've never been to one. Well, I'm not exactly their clientele..",
                T0011: "But maybe that's going to make it even more interesting!",
                T0012: "Now all I gotta do is get home and freshen up.",
                T0013: "Ok... let me go shower real quick.",
                T0014: "We're going to some fancy place. Which means I should <strong>look</strong> fancy.",
                T0015: "Hmm, what should I wear?",
                T0016: "Yeah, that looks great!",
                T0017: "No way he's here already. Very punctual, I am impressed.",
                T0018: "Well, thank you. You look just as great!",
                T0019: "Yes, just let me grab my stuff.",
                T0020: "<i>..What did I want to grab just a minute ago?</i>",
                T0021: "Alright, got everything. Let's go.",
                T0022: "<i>Wow, I didn't know he was this well of... now this auction date makes a lot more sense.</i>"
            },
            Friend: {
                F0000: ", wait up!",
                F0001: "Nothing, nothing. I thought you were leaving right away. I wanted to wish you good luck for tonight.",
                F0002: "Well, yeah? How often has your crush asked you out so far? Hmmmm.. right. Just this once.",
                F0003: "You're hearing yourself, right?",
                F0004: "Doesn't matter. I hope you two manage to get a bit closer.",
                F0005: "Oh my, don't turn around. The whole group's here.",
                F0006: "I'll leave you guys alone. Have fun toniiight!"
            },
            Crush: {
                C0000: ". Still on for later?",
                C0001: "Oh, it's a silent auction. You can bid for things and help people with whatever you're donating.",
                C0002: "But that's not really why I want to take you there. The place is just beautiful and the food's good. I thought it might be right up your alley.",
                C0003: "Great. I'll be at your place at around 6, ok?",
                C0004: "See you soon.",
                C0005: ". You look amazing!",
                C0006: "Are you ready to go?"
            }
        };
        // CHOICES
        let choicesProtagonistPronouns = {
            O1: "she/her",
            O2: "he/him",
            O3: "they/them"
        };
        let choicesCrush = {
            O1: " ",
            O2: "  ",
            O3: "   " // Jill's image
        };
        let choicesDress = {
            O1: "Something classic black",
            O2: "Go bright and colourful",
        };
        let choicesTakeItemsWithMe = {
            O1: "Pencil",
            O2: "Earpods",
            O3: "???"
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.intro);
        await Template.ƒS.update(2);
        // INTRO: GET FIRST USER INFO
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0000);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0001);
        let name = await Template.ƒS.Speech.getInput();
        Template.dataForSave.nameProtagonist = name;
        Template.characters.protagonist.name = name;
        await Template.ƒS.Speech.tell(undefined, "Hello " + Template.characters.protagonist.name + text.Narrator.N0002);
        let choiceProtagonistPronouns = await Template.ƒS.Menu.getInput(choicesProtagonistPronouns, "userOptions");
        switch (choiceProtagonistPronouns) {
            case choicesProtagonistPronouns.O1:
                console.log("Option 1");
                Template.dataForSave.pronounsProtagonist = "she";
                break;
            case choicesProtagonistPronouns.O2:
                console.log("Option 2");
                Template.dataForSave.pronounsProtagonist = "he";
                break;
            case choicesProtagonistPronouns.O3:
                console.log("Option 3");
                Template.dataForSave.pronounsProtagonist = "they";
                break;
        }
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0003);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0004);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
        // END OF INTRO
        // FIRST SCENE
        await Template.ƒS.Location.show(Template.sequences.black);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell("", "");
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.university);
        await Template.ƒS.update(3);
        //await ƒS.update(transitions.cloud.duration, transitions.cloud.alpha, transitions.cloud.edge);
        //await ƒS.Character.show(characters.Nora, characters.Nora.pose.good, ƒS.positionPercent(70, 100));
        //await ƒS.update(1);
        //await ƒS.Character.animate(characters.Helene, characters.Helene.pose.happy, ghostAnimation());
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0000);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0001);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0002);
        let speechBox = document.getElementById("speech");
        speechBox.classList.add("shake");
        await Template.ƒS.Speech.tell("???", Template.characters.protagonist.name + text.Friend.F0000);
        speechBox.classList.remove("shake");
        //await ƒS.Character.show(characters.Nora, characters.Nora.pose.good, ƒS.positionPercent(50, 100));
        //await ƒS.update(1);
        await Template.ƒS.Character.animate(Template.characters.Emma, Template.characters.Emma.pose.good, Template.slideInAnimation());
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0003);
        await Template.ƒS.Speech.tell(Template.characters.Emma, text.Friend.F0001);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0004);
        await Template.ƒS.Speech.tell(Template.characters.Emma, text.Friend.F0002);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0005);
        await Template.ƒS.Speech.tell(Template.characters.Emma, text.Friend.F0003);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0006);
        await Template.ƒS.Speech.tell(Template.characters.Emma, text.Friend.F0004);
        Template.ƒS.Speech.clear();
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.Emma, text.Friend.F0005);
        Template.ƒS.Speech.clear();
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0005);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0006);
        console.log("Crush: " + Template.characters.Crush.name);
        // CRUSH CHOICE
        let choiceCrush = await Template.ƒS.Menu.getInput(choicesCrush, "userOptionsFace");
        switch (choiceCrush) {
            case choicesCrush.O1:
                console.log("Option 1");
                Template.dataForSave.crush = "Amelie";
                Template.characters.Crush = Template.characters.Amelie;
                break;
            case choicesCrush.O2:
                console.log("Option 2");
                Template.dataForSave.crush = "Enzo";
                Template.characters.Crush = Template.characters.Enzo;
                console.log("Crush: " + Template.characters.Crush.name);
                break;
            case choicesCrush.O3:
                console.log("Option 3");
                Template.dataForSave.crush = "Cal";
                Template.characters.Crush = Template.characters.Cal;
                console.log("Crush: " + Template.characters.Crush.name);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Emma, text.Friend.F0006);
        Template.ƒS.Speech.clear();
        await Template.ƒS.Character.hide(Template.characters.Emma);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Crush, Template.characters.Crush.pose.happy, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Crush, "Hello " + Template.characters.protagonist.name + text.Crush.C0000);
        await Template.ƒS.Speech.tell("You", Template.characters.Crush.name + text.Protagonist.T0007);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0001);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0002);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0008);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0003);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0009 + Template.characters.Crush.name + "!");
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0004);
        Template.ƒS.Speech.clear();
        await Template.ƒS.Character.hide(Template.characters.Crush);
        await Template.ƒS.update(1);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0010);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0011);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0012);
        Template.ƒS.Speech.hide();
        // SCENE AT HOME 
        await Template.ƒS.Location.show(Template.locations.home);
        await Template.ƒS.update(2);
        //ƒS.Sound.fade(sound.dystopia, 0.5, 2, true);
        //await ƒS.update(transitions.cloud.duration, transitions.cloud.alpha, transitions.cloud.edge);
        //await ƒS.Character.animate(characters.Helene, characters.Helene.pose.happy, ghostAnimation());
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0007);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0013);
        await Template.ƒS.Speech.tell(undefined, "...");
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0014);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0015);
        let choiceDress = await Template.ƒS.Menu.getInput(choicesDress, "userOptions");
        switch (choiceDress) {
            case choicesDress.O1:
                console.log("black");
                Template.dataForSave.dress = "black";
                break;
            case choicesDress.O2:
                console.log("bright colours");
                Template.dataForSave.dress = "bright";
                break;
        }
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0016);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0008);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0017);
        await Template.ƒS.Character.show(Template.characters.Crush, Template.characters.Crush.pose.happy, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Crush, "Hey " + Template.characters.protagonist.name + text.Crush.C0005);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0018);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0006);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0019);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0020);
        let choiceTakeItemWithMe = await Template.ƒS.Menu.getInput(choicesTakeItemsWithMe, "userOptions");
        switch (choiceTakeItemWithMe) {
            case choicesTakeItemsWithMe.O1:
                console.log("Pencil");
                Template.ƒS.Inventory.add(Template.items.pencil);
                Template.ƒS.Inventory.add(Template.items.earpods);
                break;
            case choicesTakeItemsWithMe.O2:
                console.log("Earpods");
                Template.ƒS.Inventory.add(Template.items.earpods);
                break;
            case choicesTakeItemsWithMe.O3:
                console.log("");
                Template.ƒS.Inventory.add(Template.items.earpods);
                break;
        }
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0021);
        await Template.ƒS.Character.hide(Template.characters.Crush);
        Template.ƒS.Speech.clear();
        await Template.ƒS.Location.show(Template.sequences.black);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0009);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0022);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0010);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
    }
    Template.one_university = one_university;
    //return "thirdScene";
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function home() {
        console.log("home scene: starting");
        // SPEECH
        let text = {
            Narrator: {
                N0000: "You get home by 5 o'clock. You have about an hour to get ready.",
                N0001: "As you proceed getting ready, your doorbell rings. Is it 6 o'clock already?",
                N0002: "The two of you get to your crush's car. It's quite an expensive car.",
                N0003: "The ride takes about 45 minutes."
            },
            Protagonist: {
                T0000: "Ok... let me go shower real quick.",
                T0001: "We're going to some fancy place. Which means I should <strong>look</strong> fancy.",
                T0002: "Hmm, what should I wear?",
                T0003: "Yeah, that looks great!",
                T0004: "No way he's here already. Very punctual, I am impressed.",
                T0005: "Well, thank you. You look just as great!",
                T0006: "Yes, just let me grab my stuff.",
                T0007: "<i>..What did I want to grab just a minute ago?</i>",
                T0008: "Alright, got everything. Let's go.",
                T0009: "<i>Wow, I didn't know he was this well of... now this auction date makes a lot more sense.</i>"
            },
            Crush: {
                C0000: ". You look amazing!",
                C0001: "Are you ready to go?"
            }
        };
        // CHOICES
        let choicesDress = {
            O1: "Something classic black",
            O2: "Go bright and colourful",
        };
        let choicesTakeItemsWithMe = {
            O1: "?",
            O2: "Earpods",
            O3: "???"
        };
        Template.ƒS.Speech.hide();
        Template.characters.protagonist.name = Template.dataForSave.nameProtagonist;
        Template.getCrush(Template.dataForSave.crush);
        await Template.ƒS.Location.show(Template.locations.home);
        await Template.ƒS.update(2);
        //ƒS.Sound.fade(sound.dystopia, 0.5, 2, true);
        //await ƒS.update(transitions.cloud.duration, transitions.cloud.alpha, transitions.cloud.edge);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0000);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0000);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0001);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0002);
        let choiceDress = await Template.ƒS.Menu.getInput(choicesDress, "userOptions");
        switch (choiceDress) {
            case choicesDress.O1:
                console.log("black");
                Template.dataForSave.dress = "black";
                break;
            case choicesDress.O2:
                console.log("bright colours");
                Template.dataForSave.dress = "bright";
                break;
        }
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0003);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0001);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0004);
        await Template.ƒS.Character.show(Template.characters.Crush, Template.characters.Crush.pose.happy, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Crush, "Hey " + Template.characters.protagonist.name + text.Crush.C0000);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0005);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0001);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0006);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0007);
        let choiceTakeItemWithMe = await Template.ƒS.Menu.getInput(choicesTakeItemsWithMe, "userOptions");
        switch (choiceTakeItemWithMe) {
            case choicesTakeItemsWithMe.O1:
                console.log("Lipstick");
                Template.ƒS.Inventory.add(Template.items.pencil);
                break;
            case choicesTakeItemsWithMe.O2:
                console.log("Earpods");
                Template.ƒS.Inventory.add(Template.items.pencil);
                break;
            case choicesTakeItemsWithMe.O3:
                console.log("");
                Template.ƒS.Inventory.add(Template.items.pencil);
                break;
        }
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0008);
        await Template.ƒS.Character.hide(Template.characters.Crush);
        Template.ƒS.Speech.clear();
        await Template.ƒS.Location.show(Template.sequences.black);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0002);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0009);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0003);
        Template.ƒS.Speech.clear();
        Template.ƒS.Speech.hide();
    }
    Template.home = home;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function two_partyEntrance() {
        console.log("intro scene: starting");
        // SPEECH
        let text = {
            Narrator: {
                N0000: "You arrive at this beautiful mansion. There are no other buildings near it.",
                N0001: "While you're leaving the car, you see other people entering the mansion.",
                N0002: "You shrug, following a slight nod.",
                N0003: "You take your phone out and try to get a good angle of the mansion.",
                N0004: "Cal takes out their phone and takes a picture themselves.",
                N0005: "The two of you step inside. The lobby that greets you is very spacious, although it is already filled with quite a few people. The marble floor and huge columns seem very majestic. You've never been to a place like this.",
                N0006: "As your eyes glisten while you take a look around, a voice right beside the door wakes you up.",
                N0007: "You watch your crush leave and go through a door on the very right. You can now use this time to explore whatever is open for you. Where do you want to go?"
            },
            Protagonist: {
                T0000: "Wow.. this is where the auction's at?",
                T0001: "It really is. I'd love to live here.",
                T0002: "Absolutely. I hope you don't mind...",
                T0003: "Thank you, I will let you know",
                T0004: "Oh, what is this feeling... Where's the bathroom again?",
                T0005: "Well, I moved around a lot as a child...",
                T0006: "Alright. I've basically lived here all my life. Went to elementary school here. I'm going to uni here now, studying journalism. This city makes me feel good, though I cannot wait to find out what's beyond it, if you know what I mean. It's almost like Stockholm's syndrome? I'm sort of trapped here for now but at the same time I feel home? Oh, and I don't have any siblings but I do have a cat.",
                T0007: "Oh, what do you want to know? My favorite TV show is Supernatural. I love anything that tastes like peach and if I was born an animal, I'd probably be either a sloth or a cat.",
                T0008: "Your turn.",
                T0009: "That was great, thank you.",
                T0010: "Alright, see you in a bit!"
            },
            Crush: {
                C0000: "Yeah, it's quite... prestigious, isn't it?",
                C0001: "No, no. Go ahead. I would do the same thing if I hadn't been here before.",
                C0002: "No, go ahead. Send me those pictures later, will you?",
                C0003: "You know what... that's a great idea.",
                C0004: "Let's get inside. I really hope this evening will turn out well.",
                C0005: "Of course. There you go.",
                C0006: "I'll take one, too, please.",
                C0007: "I'll try the white wine, please",
                C0008: "The rosé one for me, please",
                C0009: "I'm good, thank you.",
                C0010: "So... tell me about yourself.",
                C0011: "Very interesting.",
                C0012: "Oh wow, that was intense.",
                C0013: "Ok. Let me think… So I study Psychology, I'm in my 6th semester. I have a dog named Gilbert that I got from my parents when I was 16. And I'm a Libra. ",
                C0014: "Anytime. Now you know the real me, or something like that.",
                C0015: "Oh, by the way. I would like to go over to say hi to some of my dad's acquaintances. Do you want me to introduce them to you?",
                C0016: "Ok, follow me then. I think I saw them go up to the living room over there.",
                C0017: "Of course, don't worry about it. You can take a look around, I'll find you later."
            },
            Misc: {
                M0000: "Good evening. Welcome to <strong>Iris Hill Manor</strong>. Can I see your invitations, please?",
                M0001: "Thank you. Oh, greetings to your father.",
                M0002: "The auction will start in about 45 minutes. Can I interest you in one of our wines? We harvest the grapes ourselves.",
                M0003: "There's our newest creation, a peppery Syrah red wine, our most popular Moscato white wine and our melony Sangiovese rosé.",
                M0004: "Of course, coming right up.",
                M0005: "Sure. I'll be here if you change your mind."
            }
        };
        // CHOICES
        let choicesMansionInteraction = {
            O1: "stay quiet",
            O2: "compliment the mansion",
            O3: "take a picture of the mansion"
        };
        let choicesDrinkWine = {
            O1: "the red one",
            O2: "the white one",
            O3: "the rosé one",
            O4: "none for me, thank you"
        };
        let choicesTalkAboutYourself = {
            O1: "Lie",
            O2: "Get into detail",
            O3: "Hold back a little"
        };
        let choicesAskAboutCrush = {
            O1: "Ask about Major",
            O2: "Ask about dog",
            O3: "Ask about parents"
        };
        let choicesComeAlong = {
            O1: "I'll come with you",
            O2: "I'm feeling a bit shy. I'll wait for you, ok?"
        };
        let choicesWhereToGo = {
            O1: "Go check out the kitchen",
            O2: "Get freshened up in the bathroom"
        };
        Template.characters.protagonist.name = Template.dataForSave.nameProtagonist;
        Template.getCrush(Template.dataForSave.crush);
        Template.characters.protagonist.pronouns = Template.dataForSave.pronounsProtagonist;
        //ƒS.Speech.hide();
        //await ƒS.update();
        await Template.ƒS.Location.show(Template.locations.mansion_driveway);
        await Template.ƒS.update(2);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0000);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0001);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0000);
        await Template.ƒS.Character.show(Template.characters.Crush, Template.characters.Crush.pose.happy, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0000);
        let choiceMansionInteraction = await Template.ƒS.Menu.getInput(choicesMansionInteraction, "userOptions");
        switch (choiceMansionInteraction) {
            case choicesMansionInteraction.O1:
                console.log("Option 1");
                await Template.ƒS.Speech.tell(undefined, text.Narrator.N0002);
                break;
            case choicesMansionInteraction.O2:
                console.log("Option 2");
                await Template.ƒS.Speech.tell("You", text.Protagonist.T0001);
                break;
            case choicesMansionInteraction.O3:
                console.log("Option 3");
                await Template.ƒS.Speech.tell("You", text.Protagonist.T0002);
                await Template.ƒS.Speech.tell(undefined, text.Narrator.N0003);
                if (Template.characters.Crush.name == "Faye")
                    await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0001);
                else if (Template.characters.Crush.name == "Enzo")
                    await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0002);
                else {
                    await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0003);
                    await Template.ƒS.Speech.tell(undefined, text.Narrator.N0004);
                }
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0004);
        await Template.ƒS.Character.hide(Template.characters.Crush);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.lobby_entrance);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0005);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0006);
        await Template.ƒS.Character.show(Template.characters.Doorman, Template.characters.Doorman.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0000);
        await Template.ƒS.Character.show(Template.characters.Crush, Template.characters.Crush.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0005);
        await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0001);
        await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0002);
        await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0003);
        let choiceDrinkWine = await Template.ƒS.Menu.getInput(choicesDrinkWine, "userOptions");
        switch (choiceDrinkWine) {
            case choicesDrinkWine.O1:
                console.log("entering new scene - bad ending: bathroom");
                await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0004);
                break;
            case choicesDrinkWine.O2:
                console.log("cal liked this wine");
                await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0006);
                await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0004);
                break;
            case choicesDrinkWine.O3:
                console.log("enzo likes this wine");
                await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0006);
                await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0004);
                break;
            case choicesDrinkWine.O4:
                console.log("faye likes your decision");
                await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0005);
                break;
        }
        await Template.ƒS.Character.hide(Template.characters.Doorman);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.animate(Template.characters.Crush, Template.characters.Crush.pose.happy, Template.slideToSide(30, 50));
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0010);
        let choiceTalkAboutYourself = await Template.ƒS.Menu.getInput(choicesTalkAboutYourself, "userOptions");
        switch (choiceTalkAboutYourself) {
            case choicesTalkAboutYourself.O1:
                console.log("");
                await Template.ƒS.Speech.tell("You", text.Protagonist.T0005);
                await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0012);
                break;
            case choicesTalkAboutYourself.O2:
                console.log("");
                await Template.ƒS.Speech.tell("You", text.Protagonist.T0006);
                await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0012);
                break;
            case choicesTalkAboutYourself.O3:
                console.log("");
                await Template.ƒS.Speech.tell("You", text.Protagonist.T0007);
                await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0011);
                break;
        }
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0008);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0013);
        let choiceAskAboutCrush = await Template.ƒS.Menu.getInput(choicesAskAboutCrush, "userOptions");
        switch (choiceAskAboutCrush) {
            case choicesAskAboutCrush.O1:
                console.log("");
                break;
            case choicesAskAboutCrush.O2:
                console.log("");
                break;
            case choicesAskAboutCrush.O3:
                console.log("");
                break;
        }
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0009);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0014);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0015);
        let choiceComeAlong = await Template.ƒS.Menu.getInput(choicesComeAlong, "userOptions");
        switch (choiceComeAlong) {
            case choicesComeAlong.O1:
                console.log("Option 1");
                await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0016);
            //return "living room scene";
            case choicesComeAlong.O2:
                console.log("Option 2");
                await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0017);
                await Template.ƒS.Speech.tell("You", text.Protagonist.T0010);
                await Template.ƒS.Speech.tell(undefined, text.Narrator.N0007);
                let choiceWhereToGo = await Template.ƒS.Menu.getInput(choicesWhereToGo, "userOptions");
                Template.ƒS.Speech.clear();
                Template.ƒS.Speech.hide();
                switch (choiceWhereToGo) {
                    case choicesWhereToGo.O1:
                        console.log("go to kitchen");
                    //return "kitchen scene";
                    case choicesWhereToGo.O2:
                        console.log("go to bathroom");
                    //return "bathroom scene";    
                }
        }
    }
    Template.two_partyEntrance = two_partyEntrance;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function two_livingroom() {
        console.log("intro scene: starting");
        // SPEECH
        let text = {
            Narrator: {
                N0000: "The two of you walk through the lobby and enter a doorway on the right to a very luxurious and clean living room. You're getting closer to someone sitting on a comfortable looking sofa in the middle of the room. There are three other people in the room besides them. ",
                N0001: "Mr. Moore looks you up and down a bit and forces a smile. You get the impression he's not very fond of your presence. ",
                N0002: "Your crush walks you over to a bar where a black haired young woman was just talking to a middle-aged man. As you two approach her, she starts smiling.",
                N0003: "",
                N0004: "",
                N0005: "",
                N0006: "",
                N0007: ""
            },
            Protagonist: {
                T0000: "<i>Do actual people still live in this mansion? I mean, it all looks great but I don't think I could actually relax here... there's so much stuff that could just... break.</i>",
                T0001: "Oh.. Excuse me?",
                T0002: "Serving their food- Who do you think you-",
                T0003: "Yeah, be careful or you're not going to like tomorrow's newspaper.",
                T0004: "Nice to meet you, Clara. I feel like I've seen you before…",
                T0005: "Oh, yeah! That's exactly where I've seen you. Wow. I did not expect to see Nox Ford Royalty here. ",
                T0006: "<i>And I'm really curious if I would be able to afford anything they're going to auction off..</i>",
                T0007: "",
                T0008: "",
                T0009: "",
                T0010: ""
            },
            Crush: {
                C0000: "Hello Mr. Moore. Long time no see. How have you been? This is Y/N, I invited them to come here with me. Y/N, this is Mr. Reginald Moore, an old business partner of my father.",
                C0001: "No. We're both students at Nox Ford University. Y/N studies journalism and is actually very dedicated on campus. ",
                C0002: "We actually wanted to speak to my friend over there, as well. It was nice seeing you. I hope you'll find something at the auction!",
                C0003: "Well, hello Clara, this is Y/N. We're going to the same university. ",
                C0004: "And Y/N, that's Clara. We've known each other since elementary school. If you're looking for brains at this event, it's right here",
                C0005: "Oh, don't be modest. She would've finished her studies about a year early but she took a bunch of extra classes just for fun.",
                C0006: "Actually, no. But that sounds interesting. I'm really curious what they're going to auction off in general.",
                C0007: "Alright. I think we'll go back to the lobby. The event should start any minute now, I believe.",
                C0008: "",
                C0009: "",
                C0010: "",
                C0011: "",
                C0012: "",
            },
            Moore: {
                M0000: "Crush's name! It's really been quite a while, you've grown a lot. Hello Y/N. Judging by your face, I'm guessing this is not your usual ensemble?",
                M0001: "No offense, little one. You just seem to be looking around and staring around a lot, that's all.",
                M0002: "Anyway, how did you two meet? Were they serving your food at a restaurant or something? ",
                M0003: "I see. So we have someone from the press here, great. ",
                M0004: "You too. Greetings to your father!",
                M0005: "Oh, you be careful yourself, you little flea."
            },
            Clara: {
                N0000: "Crush's name! How long has it been? I hope you're well. And who's your date?",
                N0001: "Yeah, maybe. I don't like to brag but I was an honorary student at your university. Unfortunately, they had to hang my picture on some wall there.",
                N0002: "Stop! I just happen to be good at what I'm doing. As long as you enjoy your major, you're good.",
                N0003: "On another note, have you had a chance to glimpse into the auction room? I heard they were going to show off something extra luxurious.",
                N0004: "Yes. I'll be there in a second, as well. Have fun!"
            }
        };
        // CHOICES
        let choicesTalkBack = {
            O1: "Stay quiet",
            O2: "Make a snarky remark",
        };
        let choicesDrinkWine = {
            O1: "",
            O2: "",
            O3: "",
            O4: ""
        };
        Template.characters.protagonist.name = Template.dataForSave.nameProtagonist;
        Template.getCrush(Template.dataForSave.crush);
        Template.characters.protagonist.pronouns = Template.dataForSave.pronounsProtagonist;
        //ƒS.Speech.hide();
        //await ƒS.update();
        await Template.ƒS.Location.show(Template.locations.livingroom);
        await Template.ƒS.update(2);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0000);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0000);
        await Template.ƒS.Character.show(Template.characters.Crush, Template.characters.Crush.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0000);
        await Template.ƒS.Character.show(Template.characters.Emma, Template.characters.Emma.pose.good, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Emma, text.Moore.M0000);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Emma, text.Moore.M0001);
        await Template.ƒS.Speech.tell(Template.characters.Emma, text.Moore.M0002);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0001);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0001);
        await Template.ƒS.Speech.tell(Template.characters.Emma, text.Moore.M0003);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0002);
        let choiceTalkBack = await Template.ƒS.Menu.getInput(choicesTalkBack, "userOptions");
        switch (choiceTalkBack) {
            case choicesTalkBack.O1:
                console.log("Option 1");
                await Template.ƒS.Speech.tell(Template.characters.Emma, text.Moore.M0004);
                break;
            case choicesTalkBack.O2:
                console.log("Option 2");
                await Template.ƒS.Speech.tell("You", text.Protagonist.T0003);
                await Template.ƒS.Speech.tell(Template.characters.Emma, text.Moore.M0005);
                break;
        }
        await Template.ƒS.Character.hide(Template.characters.Emma);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0002);
        await Template.ƒS.Character.show(Template.characters.Clara, Template.characters.Clara.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell("Black haired woman", text.Clara.N0000);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0003);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0004);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0004);
        await Template.ƒS.Speech.tell(Template.characters.Clara, text.Clara.N0001);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0005);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0005);
        await Template.ƒS.Speech.tell(Template.characters.Clara, text.Clara.N0002);
        await Template.ƒS.Speech.tell(Template.characters.Clara, text.Clara.N0003);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0006);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0006);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0007);
        await Template.ƒS.Speech.tell(Template.characters.Clara, text.Clara.N0004);
        await Template.ƒS.Character.hide(Template.characters.Clara);
        await Template.ƒS.update(1);
    }
    Template.two_livingroom = two_livingroom;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("intro scene: starting");
        // SPEECH
        let text = {
            Narrator: {
                N0000: "",
                N0001: "",
                N0002: "",
                N0003: "",
                N0004: "",
                N0005: "",
                N0006: "",
                N0007: ""
            },
            Protagonist: {
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: "",
                T0006: "",
                T0007: "",
                T0008: "",
                T0009: "",
                T0010: ""
            },
            Crush: {
                C0000: "",
                C0001: "",
                C0002: "",
                C0003: "",
                C0004: "",
                C0005: "",
                C0006: "",
                C0007: "",
                C0008: "",
                C0009: "",
                C0010: "",
                C0011: "",
                C0012: "",
                C0013: "",
                C0014: "",
                C0015: "",
                C0016: "",
                C0017: ""
            },
            Misc: {
                M0000: "",
                M0001: "",
                M0002: "",
                M0003: "",
                M0004: "",
                M0005: ""
            }
        };
        // CHOICES
        let choicesMansionInteraction = {
            O1: "",
            O2: "",
            O3: ""
        };
        let choicesDrinkWine = {
            O1: "",
            O2: "",
            O3: "",
            O4: ""
        };
        let choicesTalkAboutYourself = {
            O1: "",
            O2: "",
            O3: ""
        };
        Template.characters.protagonist.name = Template.dataForSave.nameProtagonist;
        Template.getCrush(Template.dataForSave.crush);
        Template.characters.protagonist.pronouns = Template.dataForSave.pronounsProtagonist;
        //ƒS.Speech.hide();
        //await ƒS.update();
        await Template.ƒS.Location.show(Template.locations.mansion_driveway);
        await Template.ƒS.update(2);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0000);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0001);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0000);
        await Template.ƒS.Character.show(Template.characters.Crush, Template.characters.Crush.pose.happy, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0000);
        let choiceMansionInteraction = await Template.ƒS.Menu.getInput(choicesMansionInteraction, "userOptions");
        switch (choiceMansionInteraction) {
            case choicesMansionInteraction.O1:
                console.log("Option 1");
                await Template.ƒS.Speech.tell(undefined, text.Narrator.N0002);
                break;
            case choicesMansionInteraction.O2:
                console.log("Option 2");
                await Template.ƒS.Speech.tell("You", text.Protagonist.T0001);
                break;
            case choicesMansionInteraction.O3:
                console.log("Option 3");
                await Template.ƒS.Speech.tell("You", text.Protagonist.T0002);
                await Template.ƒS.Speech.tell(undefined, text.Narrator.N0003);
                if (Template.characters.Crush.name == "Faye")
                    await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0001);
                else if (Template.characters.Crush.name == "Enzo")
                    await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0002);
                else {
                    await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0003);
                    await Template.ƒS.Speech.tell(undefined, text.Narrator.N0004);
                }
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0004);
        await Template.ƒS.Character.hide(Template.characters.Crush);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.lobby_entrance);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0005);
        await Template.ƒS.Speech.tell(undefined, text.Narrator.N0006);
        await Template.ƒS.Character.show(Template.characters.Doorman, Template.characters.Doorman.pose.happy, Template.ƒS.positionPercent(70, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0000);
        await Template.ƒS.Character.show(Template.characters.Crush, Template.characters.Crush.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0005);
        await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0001);
        await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0002);
        await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0003);
        let choiceDrinkWine = await Template.ƒS.Menu.getInput(choicesDrinkWine, "userOptions");
        switch (choiceDrinkWine) {
            case choicesDrinkWine.O1:
                console.log("entering new scene - bad ending: bathroom");
                await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0004);
                break;
            case choicesDrinkWine.O2:
                console.log("cal liked this wine");
                await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0006);
                await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0004);
                break;
            case choicesDrinkWine.O3:
                console.log("enzo likes this wine");
                await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0006);
                await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0004);
                break;
            case choicesDrinkWine.O4:
                console.log("faye likes your decision");
                await Template.ƒS.Speech.tell("Entrance Man", text.Misc.M0005);
                break;
        }
        await Template.ƒS.Character.hide(Template.characters.Doorman);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.animate(Template.characters.Crush, Template.characters.Crush.pose.happy, Template.slideToSide(30, 50));
        await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0010);
        let choiceTalkAboutYourself = await Template.ƒS.Menu.getInput(choicesTalkAboutYourself, "userOptions");
        switch (choiceTalkAboutYourself) {
            case choicesTalkAboutYourself.O1:
                console.log("");
                await Template.ƒS.Speech.tell("You", text.Protagonist.T0005);
                await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0012);
                break;
            case choicesTalkAboutYourself.O2:
                console.log("");
                await Template.ƒS.Speech.tell("You", text.Protagonist.T0006);
                await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0012);
                break;
            case choicesTalkAboutYourself.O3:
                console.log("");
                await Template.ƒS.Speech.tell("You", text.Protagonist.T0007);
                await Template.ƒS.Speech.tell(Template.characters.Crush, text.Crush.C0011);
                break;
        }
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
        await Template.ƒS.Speech.tell(Template.characters.Emma, text.Kassiererin.T0001);
        await Template.ƒS.Character.animate(Template.characters.Emma, Template.characters.Emma.pose.good, Template.slideInAnimation());
        //await ƒS.Character.show(characters.Lily, characters.Lily.pose.good, ƒS.positionPercent(30, 100));
        //await ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Helene.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Emma, text.Kassiererin.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Helene.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Emma, text.Kassiererin.T0003);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Helene.T0003);
        await Template.ƒS.Speech.tell(Template.characters.Emma, text.Kassiererin.T0004);
        await Template.ƒS.Speech.tell(Template.characters.Amelie, text.Helene.T0004);
        Template.ƒS.Inventory.add(Template.items.pencil);
        Template.ƒS.Inventory.add(Template.items.pencil);
    }
    Template.thirdScene = thirdScene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map