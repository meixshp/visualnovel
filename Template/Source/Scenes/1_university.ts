namespace Template {
    export async function university(): ƒS.SceneReturn {
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
            O1: " ",    // Faye's image
            O2: "  ",   // Enzo's image
            O3: "   "   // Jill's image
        };

        let choicesDress = {
            O1: "Something classic black",
            O2: "Go bright and colourful",
        };

        let choicesTakeItemsWithMe = {
            O1: "?",
            O2: "Earpods",
            O3: "???"
        }

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.intro);
        await ƒS.update(2);        
        
        // INTRO: GET FIRST USER INFO
        await ƒS.Speech.tell(undefined, text.Narrator.N0000);
        await ƒS.Speech.tell(undefined, text.Narrator.N0001);
        let name: string = await ƒS.Speech.getInput();
        dataForSave.nameProtagonist = name;
        characters.protagonist.name = name;

        await ƒS.Speech.tell(undefined, "Hello " + characters.protagonist.name + text.Narrator.N0002);
        let choiceProtagonistPronouns = await ƒS.Menu.getInput(choicesProtagonistPronouns, "userOptions");

        switch(choiceProtagonistPronouns) {
            case choicesProtagonistPronouns.O1:
                console.log("Option 1");
                dataForSave.pronounsProtagonist = "she";
                break;
            case choicesProtagonistPronouns.O2:
                console.log("Option 2");
                dataForSave.pronounsProtagonist = "he";
                break;
            case choicesProtagonistPronouns.O3:
                console.log("Option 3"); 
                dataForSave.pronounsProtagonist = "they";
                break;
        }

        await ƒS.Speech.tell(undefined, text.Narrator.N0003);
        await ƒS.Speech.tell(undefined, text.Narrator.N0004);
       
        ƒS.Speech.clear();
        ƒS.Speech.hide();

        // END OF INTRO
        // FIRST SCENE

        await ƒS.Location.show(sequences.black);
        await ƒS.update(1);
        await ƒS.Speech.tell("", "");
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.university);
        await ƒS.update(3);

        //await ƒS.update(transitions.cloud.duration, transitions.cloud.alpha, transitions.cloud.edge);
        //await ƒS.Character.show(characters.Nora, characters.Nora.pose.good, ƒS.positionPercent(70, 100));
        //await ƒS.update(1);
        //await ƒS.Character.animate(characters.Helene, characters.Helene.pose.happy, ghostAnimation());
        await ƒS.Speech.tell("You", text.Protagonist.T0000);
        await ƒS.Speech.tell("You", text.Protagonist.T0001);
        await ƒS.Speech.tell("You", text.Protagonist.T0002);
        let speechBox: HTMLElement = document.getElementById("speech");
        speechBox.classList.add("shake");
        await ƒS.Speech.tell("???", characters.protagonist.name + text.Friend.F0000);
        speechBox.classList.remove("shake");
        //await ƒS.Character.show(characters.Nora, characters.Nora.pose.good, ƒS.positionPercent(50, 100));
        //await ƒS.update(1);
        await ƒS.Character.animate(characters.Nora, characters.Nora.pose.good, slideInAnimation());
        await ƒS.Speech.tell("You", text.Protagonist.T0003);
        await ƒS.Speech.tell(characters.Nora, text.Friend.F0001);
        await ƒS.Speech.tell("You", text.Protagonist.T0004);
        await ƒS.Speech.tell(characters.Nora, text.Friend.F0002);
        await ƒS.Speech.tell("You", text.Protagonist.T0005);
        await ƒS.Speech.tell(characters.Nora, text.Friend.F0003);
        await ƒS.Speech.tell("You", text.Protagonist.T0006);
        await ƒS.Speech.tell(characters.Nora, text.Friend.F0004);
        ƒS.Speech.clear();
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.Nora, text.Friend.F0005);
        ƒS.Speech.clear();
        await ƒS.update(1);
        await ƒS.Speech.tell(undefined, text.Narrator.N0005);
        await ƒS.Speech.tell(undefined, text.Narrator.N0006);
        console.log("Crush: " + characters.Crush.name);
        // CRUSH CHOICE
        let choiceCrush = await ƒS.Menu.getInput(choicesCrush, "userOptionsFace");

        switch(choiceCrush) {
            case choicesCrush.O1:
                console.log("Option 1");
                dataForSave.crush = "Amelie";
                characters.Crush = characters.Amelie;
                break;
            case choicesCrush.O2:
                console.log("Option 2");
                dataForSave.crush = "Enzo";
                characters.Crush = characters.Enzo;
                console.log("Crush: " + characters.Crush.name);
                break;
            case choicesCrush.O3:
                console.log("Option 3"); 
                dataForSave.crush = "Jill";
                characters.Crush = characters.Jill;
                console.log("Crush: " + characters.Crush.name);
                break;
        }

        await ƒS.Speech.tell(characters.Nora, text.Friend.F0006);
        ƒS.Speech.clear();
        await ƒS.Character.hide(characters.Nora);
        await ƒS.update(1);
        await ƒS.Character.show(characters.Crush, characters.Crush.pose.happy, ƒS.positionPercent(50, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Crush, "Hello " + characters.protagonist.name + text.Crush.C0000)
        await ƒS.Speech.tell("You", characters.Crush.name + text.Protagonist.T0007);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0001);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0002);
        await ƒS.Speech.tell("You", text.Protagonist.T0008);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0003);
        await ƒS.Speech.tell("You", text.Protagonist.T0009 + characters.Crush.name + "!");
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0004);
        ƒS.Speech.clear();
        await ƒS.Character.hide(characters.Crush);
        await ƒS.update(1);
        await ƒS.update(1);

        await ƒS.Speech.tell("You", text.Protagonist.T0010);
        await ƒS.Speech.tell("You", text.Protagonist.T0011);
        await ƒS.Speech.tell("You", text.Protagonist.T0012);

        ƒS.Speech.hide();
        
        // SCENE AT HOME 
        await ƒS.Location.show(locations.home);
        await ƒS.update(2);
        //ƒS.Sound.fade(sound.dystopia, 0.5, 2, true);
        //await ƒS.update(transitions.cloud.duration, transitions.cloud.alpha, transitions.cloud.edge);
        //await ƒS.Character.animate(characters.Helene, characters.Helene.pose.happy, ghostAnimation());
        await ƒS.Speech.tell(undefined, text.Narrator.N0007);
        await ƒS.Speech.tell("You", text.Protagonist.T0013);
        await ƒS.Speech.tell(undefined, "...");
        await ƒS.Speech.tell("You", text.Protagonist.T0014);
        await ƒS.Speech.tell("You", text.Protagonist.T0015);
        let choiceDress = await ƒS.Menu.getInput(choicesDress, "userOptions");

        switch(choiceDress) {
            case choicesDress.O1:
                console.log("black");
                dataForSave.dress = "black";

                break;
            case choicesDress.O2:
                console.log("bright colours");
                dataForSave.dress = "bright";
                break;
        }

        await ƒS.Speech.tell("You", text.Protagonist.T0016);
        await ƒS.Speech.tell(undefined, text.Narrator.N0008);
        await ƒS.Speech.tell("You", text.Protagonist.T0017);
        await ƒS.Character.show(characters.Crush, characters.Crush.pose.happy, ƒS.positionPercent(50, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Crush, "Hey " + characters.protagonist.name + text.Crush.C0005);
        await ƒS.Speech.tell("You", text.Protagonist.T0018);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0006);
        await ƒS.Speech.tell("You", text.Protagonist.T0019);
        await ƒS.Speech.tell("You", text.Protagonist.T0020);
        let choiceTakeItemWithMe = await ƒS.Menu.getInput(choicesTakeItemsWithMe, "userOptions");

        switch(choiceTakeItemWithMe) {
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
        await ƒS.Speech.tell("You", text.Protagonist.T0021);
        await ƒS.Character.hide(characters.Crush);
        ƒS.Speech.clear();
        await ƒS.Location.show(sequences.black);
        await ƒS.update(2);
        await ƒS.Speech.tell(undefined, text.Narrator.N0009);
        await ƒS.Speech.tell("You", text.Protagonist.T0022);
        await ƒS.Speech.tell(undefined, text.Narrator.N0010);
        ƒS.Speech.clear();
        ƒS.Speech.hide();    
    }

        //return "thirdScene";
    
}
