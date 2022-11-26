declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
    };
    let transitions: {
        cloud: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wet: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        dystopia: string;
        supermarket_packing: string;
        conversation: string;
    };
    let locations: {
        theathre: {
            name: string;
            background: string;
        };
        nightcity: {
            name: string;
            background: string;
        };
        supermarket: {
            name: string;
            background: string;
        };
        university: {
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
        Lily: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                good: string;
            };
        };
    };
    function ghostAnimation(): ƒS.AnimationDefinition;
    function getAnimation(): ƒS.AnimationDefinition;
    function slideInAnimation(): ƒS.AnimationDefinition;
}
declare namespace Template {
    function university(): ƒS.SceneReturn;
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
declare namespace Template {
    function thirdScene(): ƒS.SceneReturn;
}
