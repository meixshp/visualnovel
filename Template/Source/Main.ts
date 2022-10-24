namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;

    console.log("FudgeStory template starting");

    export let dataForSave = { nameProtagonist: "" };
    export let transitions = {
        cloud: {
            duration: 3,
            alpha: "Images/Transitions/clouds.jpg",
            edge: 1,
        },
    };

    export let sound = {
        //themes:
        namedessounds: "Audio/namederdatei.mp3",
        //sfx:
        //voices:
    };

    export let locations = {
        namederlocation: {
            name: "Beach Day",
            background: "pfad",
        },
        nightcity: {
            name: "Night City",
            background: "Images/Backgrounds/nightcity.png",
        },
    };

    export let characters = {
        narrator: {
            name: "",
        },
        protagonist: {
            name: "",
        },
        Helene: {
            name: "Helene",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/aisaka.png",
                upset: "pfad",
            },
        },
    };

    window.addEventListener("load", start);
    function start(_event: Event): void {
        // scene hierarchy
        let scenes: ƒS.Scenes = [
            { scene: firstScene, name: "first scene" },
            { scene: secondScene, name: "second scene" },
        ];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        ƒS.Progress.go(scenes);
    }
}
