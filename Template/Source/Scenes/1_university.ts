namespace Template {
    export async function university(): ƒS.SceneReturn {
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

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.university);
        //ƒS.Sound.fade(sound.dystopia, 0.5, 2, true);
        //await ƒS.update(transitions.cloud.duration, transitions.cloud.alpha, transitions.cloud.edge);
        await ƒS.Character.show(characters.Nora, characters.Nora.pose.good, ƒS.positionPercent(70, 100));
        await ƒS.update(1);
        //await ƒS.Character.animate(characters.Helene, characters.Helene.pose.happy, ghostAnimation());
        await ƒS.Speech.tell(characters.Nora, text.Nora.T0000);
        await ƒS.Speech.tell(characters.Nora, text.Nora.T0001);
        await ƒS.Speech.tell(characters.Nora, text.Nora.T0002);

        // Name Input
        let name: string = await ƒS.Speech.getInput();
        dataForSave.nameProtagonist = name;
        characters.protagonist.name = name;

        await ƒS.Speech.tell(characters.Nora, "Hey " + characters.protagonist.name + ". Das ist ein toller Name.");
        await ƒS.Character.show(characters.Amelie, characters.Amelie.pose.happy, ƒS.positionPercent(30, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Amelie, "Hallo!");
        await ƒS.Speech.tell(characters.Amelie, "Wie gehts?");
        ƒS.Inventory.add(items.lipstick);
        ƒS.Inventory.add(items.lolly);
        ƒS.Inventory.open();
        await ƒS.Character.hide(characters.Nora);

        let dialogueElement = await ƒS.Menu.getInput(dialog, "userOptions");

        switch(dialogueElement) {
            case dialog.O1:
                console.log("Option 1");
                await ƒS.Speech.tell(characters.Nora, text.Nora.T0004);
                break;
            case dialog.O2:
                console.log("Option 2");
                await ƒS.Speech.tell(characters.Nora, text.Nora.T0003);
                break;
            case dialog.O3:
                console.log("Option 3"); 
                await ƒS.Speech.tell(characters.Nora, text.Nora.T0004);
                break;
        }

        ƒS.Speech.clear();
        ƒS.Speech.hide();
    }
}
