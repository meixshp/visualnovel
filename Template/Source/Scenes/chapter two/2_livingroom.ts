namespace Template {
    export async function two_livingroom(): ƒS.SceneReturn {
        console.log("chapter two: living room");

        // SPEECH
        let text = {
            Narrator: {
                N0000: "The two of you walk through the lobby and enter a doorway on the right to a very luxurious and clean living room. You're getting closer to someone sitting on a comfortable looking sofa in the middle of the room. There are three other people in the room besides them. ",
                N0001: "Mr. Moore looks you up and down a bit and forces a smile. You get the impression he's not very fond of your presence. ",
                N0002: "Your crush walks you over to a bar where a black haired young woman was just talking to a middle-aged man. As you two approach her, she starts smiling.",
                N0003: "",
                N0004: "",
                N0005: "",
                N0006: "",
                N0007: ""
            },

            Protagonist: {
                T0000: "<i>Do actual people still live in this mansion? I mean, it all looks great but I don't think I could actually relax here... there's so much stuff that could just... break.</i>",
                T0001: "Oh.. Excuse me?",
                T0002: "Serving their food- Who do you think you-",
                T0003: "Yeah, be careful or you're not going to like tomorrow's newspaper.", 
                T0004: "Nice to meet you, Clara. I feel like I've seen you before…",
                T0005: "Oh, yeah! That's exactly where I've seen you. Wow. I did not expect to see Nox Ford Royalty here. ",
                T0006: "<i>And I'm really curious if I would be able to afford anything they're going to auction off..</i>",
                T0007: "",
                T0008: "",
                T0009: "",
                T0010: ""
            },

            Crush: {
                C0000: "Hello Mr. Moore. Long time no see. How have you been? This is Y/N, I invited them to come here with me. Y/N, this is Mr. Reginald Moore, an old business partner of my father.", 
                C0001: "No. We're both students at Nox Ford University. Y/N studies journalism and is actually very dedicated on campus. ",   
                C0002: "We actually wanted to speak to my friend over there, as well. It was nice seeing you. I hope you'll find something at the auction!",                       
                C0003: "Well, hello Clara, this is Y/N. We're going to the same university. ",                                         
                C0004: "And Y/N, that's Clara. We've known each other since elementary school. If you're looking for brains at this event, it's right here",
                C0005: "Oh, don't be modest. She would've finished her studies about a year early but she took a bunch of extra classes just for fun.",
                C0006: "Actually, no. But that sounds interesting. I'm really curious what they're going to auction off in general.",
                C0007: "Alright. I think we'll go back to the lobby. The event should start any minute now, I believe.",
                C0008: "",
                C0009: "",
                C0010: "",
                C0011: "",
                C0012: "",

            }, 

            Moore: {
                M0000: "Crush's name! It's really been quite a while, you've grown a lot. Hello Y/N. Judging by your face, I'm guessing this is not your usual ensemble?",
                M0001: "No offense, little one. You just seem to be looking around and staring around a lot, that's all.", 
                M0002: "Anyway, how did you two meet? Were they serving your food at a restaurant or something? ",
                M0003: "I see. So we have someone from the press here, great. ",
                M0004: "You too. Greetings to your father!",
                M0005: "Oh, you be careful yourself, you little flea."
            }, 

            Clara: {
                N0000: "Crush's name! How long has it been? I hope you're well. And who's your date?",
                N0001: "Yeah, maybe. I don't like to brag but I was an honorary student at your university. Unfortunately, they had to hang my picture on some wall there.",
                N0002: "Stop! I just happen to be good at what I'm doing. As long as you enjoy your major, you're good.",
                N0003: "On another note, have you had a chance to glimpse into the auction room? I heard they were going to show off something extra luxurious.",
                N0004: "Yes. I'll be there in a second, as well. Have fun!"
            }
        };

        // CHOICES
        let choicesTalkBack = {
            O1: "Stay quiet",
            O2: "Make a snarky remark",
        };

        let choicesDrinkWine = {
            O1: "",
            O2: "",
            O3: "",
            O4: ""
        };

        characters.protagonist.name = dataForSave.nameProtagonist;
        getCrush(dataForSave.crush);
        characters.protagonist.pronouns = dataForSave.pronounsProtagonist;

        //ƒS.Speech.hide();
        //await ƒS.update();
        await ƒS.Location.show(locations.livingroom);
        await ƒS.update(2);   
        await ƒS.update(1);     
        
        await ƒS.Speech.tell(undefined, text.Narrator.N0000);
        await ƒS.Speech.tell("You", text.Protagonist.T0000);
        await ƒS.Character.show(characters.Crush, characters.Crush.pose.happy, ƒS.positionPercent(30, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0000);
        
        await ƒS.Character.show(characters.Emma, characters.Emma.pose.good, ƒS.positionPercent(70, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Emma, text.Moore.M0000);
        await ƒS.Speech.tell("You", text.Protagonist.T0001);
        await ƒS.Speech.tell(characters.Emma, text.Moore.M0001);
        await ƒS.Speech.tell(characters.Emma, text.Moore.M0002);
        await ƒS.Speech.tell(undefined, text.Narrator.N0001);
        await ƒS.Speech.tell("You", text.Protagonist.T0002);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0001);
        await ƒS.Speech.tell(characters.Emma, text.Moore.M0003);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0002);

        let choiceTalkBack = await ƒS.Menu.getInput(choicesTalkBack, "userOptions");
        switch(choiceTalkBack) {
            case choicesTalkBack.O1:
                console.log("Option 1");
                await ƒS.Speech.tell(characters.Emma, text.Moore.M0004);
                break;
            case choicesTalkBack.O2:
                console.log("Option 2");
                await ƒS.Speech.tell("You", text.Protagonist.T0003);
                await ƒS.Speech.tell(characters.Emma, text.Moore.M0005);
                break;
        }

        await ƒS.Character.hide(characters.Emma);
        await ƒS.update(1);
        await ƒS.Speech.tell(undefined, text.Narrator.N0002);
        await ƒS.Character.show(characters.Clara, characters.Clara.pose.happy, ƒS.positionPercent(70, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell("Black haired woman", text.Clara.N0000);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0003);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0004);
        await ƒS.Speech.tell("You", text.Protagonist.T0004);
        await ƒS.Speech.tell(characters.Clara, text.Clara.N0001);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0005);
        await ƒS.Speech.tell("You", text.Protagonist.T0005);
        await ƒS.Speech.tell(characters.Clara, text.Clara.N0002);
        await ƒS.Speech.tell(characters.Clara, text.Clara.N0003);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0006);
        await ƒS.Speech.tell("You", text.Protagonist.T0006);
        await ƒS.Speech.tell(characters.Crush, text.Crush.C0007);
        await ƒS.Speech.tell(characters.Clara, text.Clara.N0004);
        await ƒS.Character.hide(characters.Clara);
        await ƒS.update(1);

    }
}
