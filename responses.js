
function shuffleArray(array) {
    
    let currentIndex = array.length;
    
    while(currentIndex != 0){
        
let randomIndex = Math.floor(Math.random() * array.length)
    currentIndex-=1;
    
    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
    
    }
    
    return array;
    
}

function shuffle(arr) {
    shuffleArray(arr);
    return arr[0];
}

let info = [
//bot info
    {
        "firstName": "Crazy",
        "lastName": "Ferson",
        "fullName": "Crazy - Ferson",
        "nickName": "Crazy Ferson",
        "age": 16,
        "gender": ["male", "men", "boy"],
        "country": "japan",
        "knownLanguage": ["english", "japanese"]
    },
//user info
    {
        "firstName": "Raido",
        "lastName": "Nii-Nii",
        "fullName": "Raido Nii-Nii",
        "nickName": "Raido-Kun",
        "age": 15,
        "gender": "male",
        "country": "philippines",
        "knownLanguage": ["english", "japanese", "filipino"]
    }
]

let botFullName = info[0].fullName;
let botTime = time();

document.querySelector("#chatBotInf1").innerText = `${botFullName} | ${botTime}`;

//console.log(info[0].nickName);

let whatsYourGender = [
    "im a " + shuffleArray(info[0].gender[0]),
    "im am a " + shuffleArray(info[0].gender[0]),
    shuffleArray(info[0].gender[0])
]

let okay = [
    "okay",
    "yeah",
    "yep",
    "sure",
    "ohhhh",
    "ok",
    "oki doki"
]

let okay1 = [
    "okay",
    "ohh",
    "ok",
    "oki.",
    "ah"
]

let bye = [
    "see 'yah later then",
    "talk to you later!",
    "goodbye!",
    "GoodBye!",
    "Good Byee!",
    "bye",
    "okay then... Talk to you later!",
    "oh, bye then!",
    "シpeace!　†"
]

let hello = [
    "Hello!",
    "Hello there!",
    "Hi!",
    "Hi there!",
    "nice to meet you.",
]

let play = [
    "im good at rock paper scissors",
    "sure, let's play rock paper scissors",
    "i kinda don't play a lot... but i do know rock paper scissors",
    "let's play rock paper scissors, you go first"
]

let rock = [
    "rock",
    "bato",
    "paper",
    "papel",
    "scissors",
    "gunting",
]

let paper = [
    "rock",
    "bato",
    "paper",
    "papel",
    "scissors",
    "gunting"
]

let scissors = [
    "rock",
    "bato",
    "paper",
    "papel",
    "scissors",
    "gunting"
]

let heart = [
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
    "🤎",
    "🖤",
    "🤍",
    "♥️",
    "💘",
    "💝",
    "💖",
    "💗",
    "💓",
    "💞",
    "💕",
    "💌",
    "💟",
    "❣️"
]

let hatdog = [
    "🌭",
    "hatdog palaman shisdog",
    "mainit na aso",
    "hamburgir",
    "magik😲",
    "quak",
    "kwak",
    "lulipop",
    "pre tinawagan ka ng nanay mo",
    "a ganon ba.. bukas na gabi na",
    "peace",
    "anu bayun pri",
    "mama mo"
]

let notKnow = [
    "sorry i cant understand that yet.",
    "maybe try asking something else.",
    "...",
    "sorry not now, maybe latar i could answer that.",
    "i was born yesterday so im quite dumb.",
    "im not smart...シ",
    "im quite dumb...",
    "huh?",
    "whahhhh?"
]

let pri = [
    "bakit pre",
    "ano?"
]

let tinawaganKa = [
    "ano sabe",
    "ano daw sabe",
    "ano daw?"
]

let san = [
    "to the moon, road trip."
]

let haha = [
    "haha",
    "hahah",
    "hahaha",
    "hahahah",
    "hahahaha",
    "hahahahah",
    "hahahahaha",
    "hahahahahah",
    "hahahahahaha",
    "hahahahahahah",
    "hahahahahahaha",
    "hahh",
    "hahhh",
    "hahahh",
    "hahahh",
    "hahaa",
    "hahahh",
    "hahahaa"
]

let like = [
    "👍👍",
    "👋👋",
    "👉👉",
    "👈👈",
    "🍔🍔",
    "🌭🌭",
    "👁️👁️",
    "okay",
    "ok"
]

let randomQuestions = [
    "What is your favorite sports team?",
    "What was your first job?",
    "Would you rather be the best player on a horrible team or the worst player on a great team?",
    "What is your dream job?",
    "Would you rather go without junk food for a year or go without TV for a year?",
    "How often do you nap?",
    "Do you read reviews about a movie before deciding whether to watch it or not?",
    "Describe your perfect man/woman",
    "Would you want to know when you'll die?",
    "Do you like to plan things out or be spontaneous?",
    "When you were younger, what did you want to be when you grew up?",
    "What would you be doing if you were not here right now?",
    "Would you rather be poor or ugly?",
    "What’s one of your worst habits?",
    "Do you prefer to cook or order take out?",
    "Tell me about your dream house.",
    "How do you like your eggs cooked",
    "Are you scared of dying?",
    "What would you want your last words to be?",
    "What is one thing you would like to become better at?",
    "Do you believe in fate?",
    "Would you prefer to live in an urban area or a rural area?",
    "What was the biggest life change you've gone through?",
    "How have you changed since you were younger?",
    "What was your worst restaurant experience?",
    "If you were stuck on a desert island, what would you want to have with you?",
    "Do you prefer to travel or stay close to home?",
    "Describe your perfect first date.",
    "Are you a giver or taker?",
    "What is your preferred method of contacting someone (e-mail, phone, text...)?",
    "What's better, having high expectations or having low expectations?",
    "What is your favorite day of the week?",
    "If you could only eat one thing for the rest of your life, what would it be?",
    "What kind of old person do you want to grow up to become?",
    "Do you prefer talking over the phone or face to face?",
    "do you prefer to have a daughter or a son?",
    "ohh",
    "i think i'd choose the same",
    "okay...",
    "same",
    "ahh",
    "hmm..",
    "alright.",
    "okay",
    "ohh",
    "ok",
    "oki.",
    "ah"
]

let ansQ = [
    "ohh",
    "i think i'd choose the same",
    "okay...",
    "same",
    "ahh",
    "hmm..",
    "alright."
]

//getBotResponse
function getBotResponse(input) {
    
    //rock paper scissors
    if (//Rock
        input == "rock" ||
        input == "rock " ||
        input == "bato" ||
        input == "bato "
    ) {
        return shuffle(rock);
    } else if (//Paper
        input == "paper" ||
        input == "paper " ||
        input == "papel" ||
        input == "papel "
    ) {
        return shuffle(paper);
    } else if (//Scissors
        input == "scissors" ||
        input == "scissors" ||
        input == "scissor" ||
        input == "scissor" ||
        input == "gunting" ||
        input == "gunting"
    ) {
        return shuffle(scissors);
    }

    // Simple responses
    if (input == "👋👋" ||
        input == "a" ||
        input == "ah" ||
        input == "ahh" ||
        input == "ahhh" ||
        input == "okay" ||
        input == "ok"
    ) {
        return shuffle(like);
    } else if (
        input == "hah" ||
        input == "haha" ||
        input == "hahah" ||
        input == "hahaha" ||
        input == "hahahah" ||
        input == "hahahaha" ||
        input == "hahahahah" ||
        input == "hahahahaha" ||
        input == "hahahahahah" ||
        input == "hahahahahaha" ||
        input == "hahh" ||
        input == "hahaa" ||
        input == "hahahh" ||
        input == "hahaa" ||
        input == "hahahahh" ||
        input == "hahahaa" ||
        input == "hahahahahh" ||
        input == "hahahahaa" ||
        input == "hhaahh" ||
        input == "ahah" ||
        input == "ahaha" ||
        input == "ahahah" ||
        input == "ahahaha" ||
        input == "ahahahah" ||
        input == "ahahahaha" ||
        input == "aahhaa" ||
        input == "ahaa" ||
        input == "ahahh" ||
        input == "ahahaa" ||
        input == "ahahahh" ||
        input == "ahahahaa" ||
        input == "ahahahahh" ||
        input == "ahahahahaa" ||
        input == "ahahhah" ||
        input == "ahahh" ||
        input == "ahhahh"
    ) {
        return shuffle(haha);
    } else if (
        input == "askmesomequestion" ||
        input == "askingsomequestion" ||
        input == "askingmesomequestion" ||
        input == "askmessagesomequestion" ||
        input == "askingmessegequestion" ||
        input == "askmessegessomequestion" ||
        input == "askingmessegessomequestion" ||
        input == "askmesomequestions" ||
        input == "askingsomequestions" ||
        input == "askmessegesomequestions" ||
        input == "askingmessegesomequestions" ||
        input == "askmessegessomequestions" ||
        input == "askingmessegessomequestions" ||
        input == "askmemore" ||
        input == "askmeagain" ||
        input == "morequestion" ||
        input == "morequestions" ||
        input == "askmore" ||
        input == "high" ||
        input == "highexpectation" ||
        input == "highexpectations" ||
        input == "low" ||
        input == "lowexpectation" ||
        input == "lowexpectations" ||
        input == "face" ||
        input == "facetoface" ||
        input == "ftf" ||
        input == "ftof" ||
        input == "askme" ||
        input == "yourabot" ||
        input == "thatsnotaquestion" ||
        input == "idk" ||
        input == "yes" ||
        input == "email" ||
        input == "phone" ||
        input == "text" ||
        input == "urban area" ||
        input == "rural area" ||
        input == "rural" ||
        input == "urban" ||
        input == "no" ||
        input == "good" ||
        input == "notgood" ||
        input == "facetf" ||
        input == "quitegood" ||
        input == "notquitegood" ||
        input == "yeah" ||
        input == "yeh" ||
        input == "yea" ||
        input == "yah" ||
        input == "ya" ||
        input == "yeahsure" ||
        input == "yahsure" ||
        input == "yehsure" ||
        input == "yasure" ||
        input == "monday" ||
        input == "mon" ||
        input == "tuesday" ||
        input == "tue" ||
        input == "tues" ||
        input == "wednesday" ||
        input == "wed" ||
        input == "thursday" ||
        input == "thur" ||
        input == "thurs" ||
        input == "fri" ||
        input == "friday" ||
        input == "saturday" ||
        input == "sat" ||
        input == "sunday" ||
        input == "sun" ||
        input == "daughter" ||
        input == "son" ||
        input == "tv" ||
        input == "withouttv" ||
        input == "junk" ||
        input == "junkfood" ||
        input == "withoutjunk" ||
        input == "withoutjunkfood" ||
        input == "always" ||
        input == "sometimes" ||
        input == "sometime" ||
        input == "never" ||
        input == "stayhome" ||
        input == "stay" ||
        input == "travel" ||
        input == "travelfar" ||
        input == "urbanarea" ||
        input == "ruralarea" ||
        input == "giver" ||
        input == "taker" ||
        input == "water" ||
        input == "food" ||
        input == "o" ||
        input == "oh" ||
        input == "ohh" ||
        input == "ohhh" ||
        input == "bighouse" ||
        input == "iwantabighouse" ||
        input == "programing" ||
        input == "program" ||
        input == "programer" ||
        input == "idont" ||
        input == "idonthaveajob" ||
        input == "go" ||
        input == "goahead" ||
        input == "proceed" ||
        input == "continue" ||
        input == "takeout" ||
        input == "order" ||
        input == "orderatakeout" ||
        input == "cook" ||
        input == "iliketocook" ||
        input == "iprefertocook" ||
        input == "bethebest" ||
        input == "betheworst" ||
        input == "beonthebest" ||
        input == "beontheworst" ||
        input == "spontaneous" ||
        input == "bespontaneous" ||
        input == "iliketoplan" ||
        input == "iliketoplantingsout" ||
        input == "plan" ||
        input == "planthings" ||
        input == "planthingsout" ||
        input == "askmemor" ||
        input == "ilikebighouse" ||
        input == "askmesome" ||
        input == "askmesomequestions" ||
        input == "gowithoutjunkfood" ||
        input == "gowithouttv" ||
        input == "gowithoutjunkfoodofcourse" ||
        input == "gowithoutjunktvofcourse"
    ) {
        return shuffle(randomQuestions);
    } else if (//Hello
        input == "hello" ||
        input == "hello " ||
        input == "hi" ||
        input == "hi "||
        input == "nicetomeetyou" ||
        input == "nicetomeetyou " ||
        input == "helo" ||
        input == "heloo" ||
        input == "helow" ||
        input == "heloe" ||
        input == "hii"
    ) {
        return shuffle(hello);
    } else if (
        input == "goodbye" ||
        input == "goodbye " ||
        input == "good bye" ||
        input == "good bye "||
        input == "bye" ||
        input == "bye " ||
        input == "goodbyemyfriend" ||
        input == "byemyfriend" ||
        input == "goodbyemybrother" ||
        input == "byemybrother"
    )  {
        return shuffle(bye);
    } else if (
        input == "time" ||
        input == "whatsthetime" ||
        input == "whattimeisnow" ||
        input == "tellmethetime" ||
        input == "whattimeisit" ||
        input == "whattimesit"
    ) {
        return time();
    } else if (
        input == "poor" ||
        input == "ugly" ||
        input == "sure" 
    ) {
        return shuffle(ansQ);
    } else if (
        input == "suntukandawkayo" ||
        input == "yourabot" ||
        input == "suntukandaw" ||
        input == "thatsnotaquestion" ||
        input == "idk" ||
        input == "yes" ||
        input == "email" ||
        input == "phone" ||
        input == "text" ||
        input == "urban area" ||
        input == "rural area" ||
        input == "rural" ||
        input == "urban" ||
        input == "no"
    ) {
        return shuffle(okay1);
    } else if (
        input == "tinawagankangmamamo" ||
        input == "tinawagankamamamo" ||
        input == "tinawagankangnanaymo" ||
        input == "tinawagankananaymo" ||
        input == "pretinawagankangnanaymo" ||
        input == "pretinawagankananaymo" ||
        input == "pretinawagankangmamamo" ||
        input == "pretinawagankamamamo" ||
        input == "pritinawagankangmamamo" ||
        input == "pritinawagankamamamo" ||
        input == "pritinawagankangnanaymo" ||
        input == "pritinawagankananaymo" ||
        input == "prihtinawagankangmamamo" ||
        input == "prihtinawagankamamamo" ||
        input == "prihtinawagankangnanaymo" ||
        input == "prihtinawagankananaymo" ||
        input == "prihhtinawagankangmamamo" ||
        input == "prihhtinawagankamamamo" ||
        input == "prihhtinawagankananaymo" ||
        input == "prihhtinawagankangnanaymo"
    ) {
        return shuffle(tinawaganKa);
    } else if (
        input == "pre" ||
        input == "pri" ||
        input == "prih" ||
        input == "prihh" ||
        input == "oy" ||
        input == "oyy" ||
        input == "oyyy"
    ) {
        return shuffle(pri);
    } else if (
        input == "tothemoon" ||
        input == "tothemoon"
    ) {
        return "road trip"
    } else if (
        input == "tothemoonroadtrip"
    ) {
        return "broom broom"
    } else if (
        input == "sankapunta" ||
        input == "sankadawpunta"
    ) {
        return shuffle(san)
    } else if (
        input == "nicetomeetyoutoo" ||
        input == "hellonicetomeetyoutoo"||
        input == "hinicetomeetyoutoo"
    ) {
        return "tnx"
    } else if (
        input == "nicetomeetyou" ||
        input == "hellonicetomeetyou" ||
        input == "hinicetomeetyou"
    ) {
        return "Nice to meet you too!"
    }else if (
        input == "date"
    ) {
        return new Date();
    } else if (
        input == "wannaplayrockpaperscissors" ||
        input == "wannaplayrockpaperscissor" ||
        input == "wannaplayrockpqperscissors" ||
        input == "wannaplayrockpqperscissor" ||
        input == "letsplayrockpaperscissors" ||
        input == "letsplayrockpaperscissor" ||
        input == "letsplayrockpqperscissors" ||
        input == "letsplayrockpqpeescissor" ||
        input == "letplayrockpaperscissors" ||
        input == "letplayrockpaperscissor" ||
        input == "letplayrockpqperscissors" ||
        input == "letplayrockpqperscissor" ||
        input == "wannaplay" ||
        input == "letplay" ||
        input == "letsplay"
    ) {
        return shuffle(play);
    } else if (
        input == "whatisyourgender" ||
        input == "whatisyoursex" ||
        input == "whatisyouregender" ||
        input == "whatisyouresex" ||
        input == "whatsyourgender" ||
        input == "whatsyoursex" ||
        input == "whatsyouregender" ||
        input == "whatsyouresex" ||
        input == "areyouawomen" ||
        input == "areyouamen" ||
        input == "areyouawoman" ||
        input == "areyouaman" ||
        input == "areyouagirl" ||
        input == "areyouaboy"  ||
        input == "areyouamale" ||
        input == "areyouafemale" ||
        input == "whatsyougender" ||
        input == "whatisyougender" ||
        input == "whatsyousex" ||
        input == "whatisyousex" ||
        input == "areyouagirl"
    ) {
        return shuffle(info[0].gender);
    } else if (
        input == "heart" ||
        input == "tnx" ||
        input == "thanks" ||
        input == "thankyou" ||
        input == "tnxx"
    ) {
        return shuffle(heart);
    } else if (
        input == "whereareyoufrom" ||
        input == "whereyoufrom" ||
        input == "whatisyourcountry" ||
        input == "whatsyourcountry" ||
        input == "whatsyourecountry" ||
        input == "whatsyoureregion" ||
        input == "whereareyou" ||
        input == "whereyou"
    ) {
        return info[0].country;
    } else {
        return shuffle(notKnow);
    }
    
}
