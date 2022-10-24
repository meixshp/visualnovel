"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.dataForSave = { nameProtagonist: "" };
    Template.transitions = {
        cloud: {
            duration: 3,
            alpha: "Images/Transitions/clouds.jpg",
            edge: 1,
        },
    };
    Template.sound = {
        //themes:
        namedessounds: "Audio/namederdatei.mp3",
        //sfx:
        //voices:
    };
    Template.locations = {
        namederlocation: {
            name: "Beach Day",
            background: "pfad",
        },
        nightcity: {
            name: "Night City",
            background: "Images/Backgrounds/nightcity.png",
        },
    };
    Template.characters = {
        narrator: {
            name: "",
        },
        protagonist: {
            name: "",
        },
        Helene: {
            name: "Helene",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "pfaddesbildes",
                happy: "Images/Characters/aisaka.png",
                upset: "pfad",
            },
        },
    };
    window.addEventListener("load", start);
    function start(_event) {
        // scene hierarchy
        let scenes = [
            { scene: Template.firstScene, name: "first scene" },
            { scene: Template.secondScene, name: "second scene" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting!!");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstScene() {
        console.log("first scene: starting");
        // SPEECH
        let text = {
            Helene: {
                T0000: "Das ist Text Nummer 1",
                T0001: "Das hier ist der zweite Text",
                T0002: "Hier kommt die Nummer drei",
            },
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.nightcity);
        await Template.ƒS.update(Template.transitions.cloud.duration, Template.transitions.cloud.alpha, Template.transitions.cloud.edge);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Helene, Template.characters.Helene.pose.happy, Template.ƒS.positionPercent(70, 110));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0002);
    }
    Template.firstScene = firstScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondScene() {
        console.log("second scene: starting");
        // SPEECH
        let text = {
            Helene: {
                T0000: "Das ist die zweite Szene",
                T0001: "Lets goooo",
                T0002: "Hallo Hallo",
            },
        };
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Helene, text.Helene.T0002);
    }
    Template.secondScene = secondScene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map