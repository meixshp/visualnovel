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
        Nora: {
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
        Jill: {
            name: "Jill",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/Jill.png",
                upset: "pfad",
            }
        },
        // END CRUSH LIST       
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
    // HELPER FUNCTION
    function getCrush(_name) {
        if (_name == "Amelie")
            Template.characters.Crush = Template.characters.Amelie;
        else if (_name == "Enzo")
            Template.characters.Crush = Template.characters.Enzo;
        else if (_name == "Jill")
            Template.characters.Crush = Template.characters.Jill;
    }
    Template.getCrush = getCrush;
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
                translation: Template.ƒS.positionPercent(50, 100),
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
            { scene: Template.home, name: "home scene" },
            { scene: Template.thirdScene, name: "third scene", id: "thirdScene" },
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
            Narrator: {
                N0000: "Welcome to <strong>Nox Ford University</strong>.",
                N0001: "Before we begin, please enter your name. <br>",
                N0002: ". Which pronouns do you use?",
                N0003: "Perfect, thank you.",
                N0004: "I hope you will enjoy this visual novel as a <strong>Nox Ford</strong> student. See you on the other side!",
                N0005: "You end up trying to sneak a peak behind you. But you don't remain unseen. Shortly after, your crush walks over to you.",
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
                T0010: "Oh boy. A silent auction? I've never been to one. Well, I'm not exactly their clientel..",
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
            O1: "?",
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
        await Template.ƒS.Character.animate(Template.characters.Nora, Template.characters.Nora.pose.good, Template.slideInAnimation());
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0003);
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Friend.F0001);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0004);
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Friend.F0002);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0005);
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Friend.F0003);
        await Template.ƒS.Speech.tell("You", text.Protagonist.T0006);
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Friend.F0004);
        Template.ƒS.Speech.clear();
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Friend.F0005);
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
                Template.dataForSave.crush = "Jill";
                Template.characters.Crush = Template.characters.Jill;
                console.log("Crush: " + Template.characters.Crush.name);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.Nora, text.Friend.F0006);
        Template.ƒS.Speech.clear();
        await Template.ƒS.Character.hide(Template.characters.Nora);
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
                console.log("Lipstick");
                break;
            case choicesTakeItemsWithMe.O2:
                console.log("Earpods");
                break;
            case choicesTakeItemsWithMe.O3:
                console.log("");
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
    Template.university = university;
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
                break;
            case choicesTakeItemsWithMe.O2:
                console.log("Earpods");
                break;
            case choicesTakeItemsWithMe.O3:
                console.log("");
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
        Template.ƒS.Inventory.add(Template.items.lipstick);
        Template.ƒS.Inventory.add(Template.items.lolly);
    }
    Template.thirdScene = thirdScene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map