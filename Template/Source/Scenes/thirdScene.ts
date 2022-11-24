namespace Template {
    export async function thirdScene(): ƒS.SceneReturn {

        console.log("Audio  Scene starting");

        let text = {
            Helene: {
                T0001: "Guten Tag!",
                T0002: "Anderer Text",
                T0003: "Text Nummer 3",
            }
        }

        ƒS.Speech.hide();
        ƒS.Sound.play(sound.supermarket_packing, 1, true);
        await ƒS.Location.show(locations.supermarket);
        ƒS.Sound.fade(sound.conversation, 0.5, 1, true);
        await ƒS.Character.show(characters.Helene, characters.Helene.pose.happy, ƒS.positionPercent(70, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.Helene, text.Helene.T0001);
    
    }
}
