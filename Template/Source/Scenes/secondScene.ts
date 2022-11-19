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
        await ƒS.Location.show(locations.theathre);
        await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
        await ƒS.Character.show(characters.Helene, characters.Helene.pose.happy, ƒS.positionPercent(20, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Helene, text.Helene.T0000);
        await ƒS.Speech.tell(characters.Helene, text.Helene.T0001);
        await ƒS.Speech.tell(characters.Helene, text.Helene.T0002);
    }
}
