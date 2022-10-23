declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
    };
    let transition: {
        namedertransition: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        namedessounds: string;
    };
    let locations: {
        namederlocation: {
            name: string;
            background: string;
        };
        nightcity: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        Helene: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function firstScene(): ƒS.SceneReturn;
}
declare namespace Template {
    function secondScene(): ƒS.SceneReturn;
}
