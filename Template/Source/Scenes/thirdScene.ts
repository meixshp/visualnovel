namespace Template {
    export async function thirdScene(): ƒS.SceneReturn {

        console.log("Audio  Scene starting");

        let text = {
            Helene: {
                T0001: "Guten Tag!",
                T0002: "Mit Karte bitte.",
                T0003: "Den Kassenzettel brauche ich nicht, danke.",
                T0004: "Tschüüüüss!"
            }, 

            Kassiererin: {
                T0001: "Hallo!",
                T0002: "Das macht einmal 783,29 Yen bitte.",
                T0003: "Kassenzettel?",
                T0004: "Schönen Tag noch!"
            }
        }


        ƒS.Speech.hide();
        ƒS.Sound.play(sound.supermarket_packing, 1, true);
        await ƒS.Location.show(locations.supermarket);
        ƒS.Sound.fade(sound.conversation, 0.5, 1, true);
        await ƒS.Character.show(characters.Amelie, characters.Amelie.pose.happy, ƒS.positionPercent(70, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Nora, text.Kassiererin.T0001);
        await ƒS.Character.animate(characters.Nora, characters.Nora.pose.good, slideInAnimation());
        //await ƒS.Character.show(characters.Lily, characters.Lily.pose.good, ƒS.positionPercent(30, 100));
        //await ƒS.update(1);
        await ƒS.Speech.tell(characters.Amelie, text.Helene.T0001);
        await ƒS.Speech.tell(characters.Nora, text.Kassiererin.T0002);
        await ƒS.Speech.tell(characters.Amelie, text.Helene.T0002);
        await ƒS.Speech.tell(characters.Nora, text.Kassiererin.T0003);
        await ƒS.Speech.tell(characters.Amelie, text.Helene.T0003);
        await ƒS.Speech.tell(characters.Nora, text.Kassiererin.T0004);
        await ƒS.Speech.tell(characters.Amelie, text.Helene.T0004);
        ƒS.Inventory.add(items.lipstick);
        ƒS.Inventory.add(items.lolly);
    }
}
