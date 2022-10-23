namespace Template {
    export async function secondScene(): ƒS.SceneReturn {
        console.log("second scene: starting");

        // SPEECH
        let text = {
            Helene: {
                T0000: "Das ist die zweite Szene",
                T0001: "Lets goooo",
                T0002: "Hallo Hallo",
            },
        };

        ƒS.Speech.hide();
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.Helene, text.Helene.T0000);
        await ƒS.Speech.tell(characters.Helene, text.Helene.T0001);
        await ƒS.Speech.tell(characters.Helene, text.Helene.T0002);
    }
}
