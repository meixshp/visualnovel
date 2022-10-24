namespace Template {
    export async function firstScene(): ƒS.SceneReturn {
        console.log("first scene: starting");

        // SPEECH
        let text = {
            Helene: {
                T0000: "Das ist Text Nummer 1",
                T0001: "Das hier ist der zweite Text",
                T0002: "Hier kommt die Nummer drei",
            },
        };

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.nightcity);
        await ƒS.update(transitions.cloud.duration, transitions.cloud.alpha, transitions.cloud.edge);
        await ƒS.update(1);
        await ƒS.Character.show(characters.Helene, characters.Helene.pose.happy, ƒS.positionPercent(70, 110));
        await ƒS.update();
        await ƒS.Speech.tell(characters.Helene, text.Helene.T0000);
        await ƒS.Speech.tell(characters.Helene, text.Helene.T0001);
        await ƒS.Speech.tell(characters.Helene, text.Helene.T0002);
    }
}
