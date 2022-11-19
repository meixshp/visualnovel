namespace Template {
    export async function firstScene(): ƒS.SceneReturn {
        console.log("first scene: starting");

        // SPEECH
        let text = {
            Helene: {
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
        await ƒS.Location.show(locations.nightcity);
        //ƒS.Sound.fade(sound.dystopia, 0.5, 2, true);
        await ƒS.update(transitions.cloud.duration, transitions.cloud.alpha, transitions.cloud.edge);
        await ƒS.Character.show(characters.Helene, characters.Helene.pose.happy, ƒS.positionPercent(70, 100));
        await ƒS.update(1);
        //await ƒS.Character.animate(characters.Helene, characters.Helene.pose.happy, ghostAnimation());
        await ƒS.Speech.tell(characters.Helene, text.Helene.T0000);
        await ƒS.Speech.tell(characters.Helene, text.Helene.T0001);
        await ƒS.Speech.tell(characters.Helene, text.Helene.T0002);
        await ƒS.Character.hide(characters.Helene);

        let dialogueElement = await ƒS.Menu.getInput(dialog, "userOptions");

        switch(dialogueElement) {
            case dialog.O1:
                console.log("Option 1");
                await ƒS.Speech.tell(characters.Helene, text.Helene.T0004);
                break;
            case dialog.O2:
                console.log("Option 2");
                await ƒS.Speech.tell(characters.Helene, text.Helene.T0003);
                break;
            case dialog.O3:
                console.log("Option 3"); 
                await ƒS.Speech.tell(characters.Helene, text.Helene.T0004);
                break;
        }

        
    }
}
