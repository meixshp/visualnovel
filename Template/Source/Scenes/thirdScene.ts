namespace Template {
    export async function thirdScene(): ƒS.SceneReturn {

        console.log("Third Scene starting");

        let text = {
            Lily: {
                T0001: "Hallo",
                T0002: "Anderer Text",
                T0003: "Text Nummer 3",
            }
        }

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.theathre);
        await ƒS.Character.show(characters.Helene, characters.Helene.pose.happy, ƒS.positionPercent(70, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.Lily, text.Lily.T0001);
    

    }
}
