namespace Template {
    export async function home(): ƒS.SceneReturn {
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
        }

        ƒS.Speech.hide();
        characters.protagonist.name = dataForSave.nameProtagonist;
        getCrush(dataForSave.crush);
        
        await ƒS.Location.show(locations.home);
        await ƒS.update(2);
        //ƒS.Sound.fade(sound.dystopia, 0.5, 2, true);
        //await ƒS.update(transitions.cloud.duration, transitions.cloud.alpha, transitions.cloud.edge);
        await ƒS.Speech.tell(undefined, text.Narrator.N0000);
        await ƒS.Speech.tell("You", text.Protagonist.T0000);
        await ƒS.update(2);
        await ƒS.Speech.tell("You", text.Protagonist.T0001);
        await ƒS.Speech.tell("You", text.Protagonist.T0002);
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

        await ƒS.Speech.tell("You", text.Protagonist.T0003);
        await ƒS.Speech.tell(undefined, text.Narrator.N0001);
        await ƒS.Speech.tell("You", text.Protagonist.T0004);
        await ƒS.Character.show(characters.Crush, characters.Crush.pose.happy, ƒS.positionPercent(50, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Crush, "Hey " + characters.protagonist.name + text.Crush.C0000);
        await ƒS.Speech.tell("You", text.Protagonist.T0005);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0001);
        await ƒS.Speech.tell("You", text.Protagonist.T0006);
        await ƒS.Speech.tell("You", text.Protagonist.T0007);
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
        await ƒS.Speech.tell("You", text.Protagonist.T0008);
        await ƒS.Character.hide(characters.Crush);
        ƒS.Speech.clear();
        await ƒS.Location.show(sequences.black);
        await ƒS.update(2);
        await ƒS.Speech.tell(undefined, text.Narrator.N0002);
        await ƒS.Speech.tell("You", text.Protagonist.T0009);
        await ƒS.Speech.tell(undefined, text.Narrator.N0003);
        ƒS.Speech.clear();
        ƒS.Speech.hide();    
    }
}
