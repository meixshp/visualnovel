namespace Template {
    export async function home(): ƒS.SceneReturn {
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
        await ƒS.Character.hide(characters.Nora);

        let dialogueElement = await ƒS.Menu.getInput(dialog, "userOptions");

        switch(dialogueElement) {
            case dialog.O1:
                console.log("Option 1");
                await ƒS.Speech.tell(characters.Nora, text.Nora.T0003);
                break;
            case dialog.O2:
                console.log("Option 2");
                await ƒS.Speech.tell(characters.Nora, text.Nora.T0003);
                break;
            case dialog.O3:
                console.log("Option 3"); 
                await ƒS.Speech.tell(characters.Nora, text.Nora.T0003);
                break;
        }
    }
}
