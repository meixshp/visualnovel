declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
        pronounsProtagonist: string;
        crush: string;
        dress: string;
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
        black: {
            name: string;
            background: string;
        };
        intro: {
            name: string;
            background: string;
        };
        university: {
            name: string;
            background: string;
        };
        home: {
            name: string;
            background: string;
        };
    };
    let sequences: {
        black: {
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
            look: {
                one: {
                    one: string;
                };
                two: {
                    one: string;
                };
                three: {
                    one: string;
                };
            };
            pronouns: string;
        };
        Nora: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                good: string;
            };
        };
        Crush: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        Amelie: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        Enzo: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        Jill: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    let items: {
        lipstick: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        lolly: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    function getCrush(_name: string): void;
    function ghostAnimation(): ƒS.AnimationDefinition;
    function getAnimation(): ƒS.AnimationDefinition;
    function slideInAnimation(): ƒS.AnimationDefinition;
}
declare namespace Template {
    function university(): ƒS.SceneReturn;
}
declare namespace Template {
    function home(): ƒS.SceneReturn;
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
