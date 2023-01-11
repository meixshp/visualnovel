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
        mansion_driveway: {
            name: string;
            background: string;
        };
        mansion_closer: {
            name: string;
            background: string;
        };
        mansion_front: {
            name: string;
            background: string;
        };
        lobby_entrance: {
            name: string;
            background: string;
        };
        livingroom: {
            name: string;
            background: string;
        };
        kitchen: {
            name: string;
            background: string;
        };
        bathroom: {
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
        Emma: {
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
        Cal: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        Clara: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        Doorman: {
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
        pencil: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        earpods: {
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
    function slideToSide(_startPos: number, _endPos: number): ƒS.AnimationDefinition;
}
declare namespace Template {
    function one_university(): ƒS.SceneReturn;
}
declare namespace Template {
    function home(): ƒS.SceneReturn;
}
declare namespace Template {
    function two_partyEntrance(): ƒS.SceneReturn;
}
declare namespace Template {
    function two_livingroom(): ƒS.SceneReturn;
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
