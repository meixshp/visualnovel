namespace Template {
    export async function university(): ƒS.SceneReturn {
        console.log("intro scene: starting");

        // SPEECH
        let text = {
            Lily: {
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

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.university);
        //ƒS.Sound.fade(sound.dystopia, 0.5, 2, true);
        await ƒS.update(transitions.cloud.duration, transitions.cloud.alpha, transitions.cloud.edge);
        await ƒS.Character.show(characters.Lily, characters.Lily.pose.good, ƒS.positionPercent(70, 130));
        await ƒS.update(1);
        //await ƒS.Character.animate(characters.Helene, characters.Helene.pose.happy, ghostAnimation());
        await ƒS.Speech.tell(characters.Lily, text.Lily.T0000);
        await ƒS.Speech.tell(characters.Lily, text.Lily.T0001);
        await ƒS.Speech.tell(characters.Lily, text.Lily.T0002);

        // Name Input
        let name: string = await ƒS.Speech.getInput();
        dataForSave.nameProtagonist = name;
        characters.protagonist.name = name;

        await ƒS.Speech.tell(characters.Lily, "Hey " + characters.protagonist.name + ". Das ist ein toller Name.");
        await ƒS.Character.hide(characters.Lily);

        let dialogueElement = await ƒS.Menu.getInput(dialog, "userOptions");

        switch(dialogueElement) {
            case dialog.O1:
                console.log("Option 1");
                await ƒS.Speech.tell(characters.Lily, text.Lily.T0004);
                break;
            case dialog.O2:
                console.log("Option 2");
                await ƒS.Speech.tell(characters.Lily, text.Lily.T0003);
                break;
            case dialog.O3:
                console.log("Option 3"); 
                await ƒS.Speech.tell(characters.Lily, text.Lily.T0004);
                break;
        }
    }
}
