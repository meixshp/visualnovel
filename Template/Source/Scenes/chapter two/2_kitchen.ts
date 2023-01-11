namespace Template {
    export async function two_kitchen(): ƒS.SceneReturn {
        console.log("chapter two: kitchen");

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

    }
}
