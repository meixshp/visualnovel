namespace Template {
    export async function two_partyEntrance(): ƒS.SceneReturn {
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
                C0001: "No, no. Go ahead. I would do the same thing if I hadn't been here before.",     // FAYE
                C0002: "No, go ahead. Send me those pictures later, will you?",                         // ENZO 
                C0003: "You know what... that's a great idea.",                                         // CAL
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
        }

        let choicesComeAlong = {
            O1: "I'll come with you",
            O2: "I'm feeling a bit shy. I'll wait for you, ok?"
        };

        let choicesWhereToGo = {
            O1: "Go check out the kitchen", 
            O2: "Get freshened up in the bathroom"
        }


        characters.protagonist.name = dataForSave.nameProtagonist;
        getCrush(dataForSave.crush);
        characters.protagonist.pronouns = dataForSave.pronounsProtagonist;

        //ƒS.Speech.hide();
        //await ƒS.update();
        await ƒS.Location.show(locations.mansion_driveway);
        await ƒS.update(2);   
        await ƒS.update(1);     
        
        await ƒS.Speech.tell(undefined, text.Narrator.N0000);
        await ƒS.Speech.tell(undefined, text.Narrator.N0001);
        await ƒS.Speech.tell("You", text.Protagonist.T0000);
        await ƒS.Character.show(characters.Crush, characters.Crush.pose.happy, ƒS.positionPercent(50, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0000);

        let choiceMansionInteraction = await ƒS.Menu.getInput(choicesMansionInteraction, "userOptions");
        switch(choiceMansionInteraction) {
            case choicesMansionInteraction.O1:
                console.log("Option 1");
                await ƒS.Speech.tell(undefined, text.Narrator.N0002);
                break;
            case choicesMansionInteraction.O2:
                console.log("Option 2");
                await ƒS.Speech.tell("You", text.Protagonist.T0001);
                break;
            case choicesMansionInteraction.O3:
                console.log("Option 3"); 
                await ƒS.Speech.tell("You", text.Protagonist.T0002);
                await ƒS.Speech.tell(undefined, text.Narrator.N0003);
                if (characters.Crush.name == "Faye") 
                    await ƒS.Speech.tell(characters.Crush, text.Crush.C0001);
                else if (characters.Crush.name == "Enzo")
                    await ƒS.Speech.tell(characters.Crush, text.Crush.C0002);
                else {
                    await ƒS.Speech.tell(characters.Crush, text.Crush.C0003);
                    await ƒS.Speech.tell(undefined, text.Narrator.N0004);
                }
                break;
        }
        
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0004);
        await ƒS.Character.hide(characters.Crush);
        await ƒS.update(1);
        await ƒS.Location.show(locations.lobby_entrance);
        await ƒS.update(2);
        await ƒS.Speech.tell(undefined, text.Narrator.N0005);
        await ƒS.Speech.tell(undefined, text.Narrator.N0006);
        await ƒS.Character.show(characters.Doorman, characters.Doorman.pose.happy, ƒS.positionPercent(70, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell("Entrance Man", text.Misc.M0000);
        await ƒS.Character.show(characters.Crush, characters.Crush.pose.happy, ƒS.positionPercent(30, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0005);
        await ƒS.Speech.tell("Entrance Man", text.Misc.M0001);
        await ƒS.Speech.tell("Entrance Man", text.Misc.M0002);
        await ƒS.Speech.tell("Entrance Man", text.Misc.M0003);

        let choiceDrinkWine = await ƒS.Menu.getInput(choicesDrinkWine, "userOptions");
        switch(choiceDrinkWine) {
            case choicesDrinkWine.O1:
                console.log("entering new scene - bad ending: bathroom");
                await ƒS.Speech.tell("Entrance Man", text.Misc.M0004);
                break;
            case choicesDrinkWine.O2:
                console.log("cal liked this wine");
                await ƒS.Speech.tell(characters.Crush, text.Crush.C0006);
                await ƒS.Speech.tell("Entrance Man", text.Misc.M0004);
                break;
            case choicesDrinkWine.O3:
                console.log("enzo likes this wine");
                await ƒS.Speech.tell(characters.Crush, text.Crush.C0006);
                await ƒS.Speech.tell("Entrance Man", text.Misc.M0004);
                break;
            case choicesDrinkWine.O4:
                console.log("faye likes your decision"); 
                await ƒS.Speech.tell("Entrance Man", text.Misc.M0005);
                break;
        }

        await ƒS.Character.hide(characters.Doorman);
        await ƒS.update(1);
        await ƒS.Character.animate(characters.Crush, characters.Crush.pose.happy, slideToSide(30, 50));
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0010);
        let choiceTalkAboutYourself = await ƒS.Menu.getInput(choicesTalkAboutYourself, "userOptions");
        switch(choiceTalkAboutYourself) {
            case choicesTalkAboutYourself.O1:
                console.log("");
                await ƒS.Speech.tell("You", text.Protagonist.T0005);
                await ƒS.Speech.tell(characters.Crush, text.Crush.C0012);
                break;
            case choicesTalkAboutYourself.O2:
                console.log("");
                await ƒS.Speech.tell("You", text.Protagonist.T0006);
                await ƒS.Speech.tell(characters.Crush, text.Crush.C0012);
                break;
            case choicesTalkAboutYourself.O3:
                console.log("");
                await ƒS.Speech.tell("You", text.Protagonist.T0007);
                await ƒS.Speech.tell(characters.Crush, text.Crush.C0011);
                break;
        }

        await ƒS.Speech.tell("You", text.Protagonist.T0008);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0013);

        let choiceAskAboutCrush = await ƒS.Menu.getInput(choicesAskAboutCrush, "userOptions");
        switch(choiceAskAboutCrush) {
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

        await ƒS.Speech.tell("You", text.Protagonist.T0009);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0014);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0015);

        let choiceComeAlong = await ƒS.Menu.getInput(choicesComeAlong, "userOptions");
        switch(choiceComeAlong) {
            case choicesComeAlong.O1:
                console.log("Option 1");
                await ƒS.Speech.tell(characters.Crush, text.Crush.C0016);
                //return "living room scene";
            case choicesComeAlong.O2:
                console.log("Option 2");
                await ƒS.Speech.tell(characters.Crush, text.Crush.C0017);
                await ƒS.Speech.tell("You", text.Protagonist.T0010);
                await ƒS.Speech.tell(undefined, text.Narrator.N0007);

                let choiceWhereToGo = await ƒS.Menu.getInput(choicesWhereToGo, "userOptions");
                ƒS.Speech.clear();
                ƒS.Speech.hide();
                switch(choiceWhereToGo) {
                    case choicesWhereToGo.O1:
                        console.log("go to kitchen");
                        //return "kitchen scene";
                        
                    case choicesWhereToGo.O2:
                        console.log("go to bathroom");
                        //return "bathroom scene";    
                }
        }
    }
       
}
