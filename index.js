
//autoScroll down
document.querySelector("#sendBtn").addEventListener("click", () => {
    document.getElementById("chatBox").scrollTo(0,100000);
})

//timeStamp
const timeStamp = document.getElementById("timeStamp");
timeStamp.innerHTML = time();

function time() {
    
    let date = new Date()
    let result = formatTime(date);
    
    function formatTime(date) {
        
        let hrs = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let mil = date.getMilliseconds();
        let amOrPm = hrs <= 12 ? "AM" : "PM";
        
        hrs = (hrs % 12) || 12;
    
        hrs = formatZero(hrs);
        min = formatZero(min);
        sec = formatZero(sec);
        mil = formatZero(mil);
        
        return `${hrs}:${min}:${sec} ${amOrPm}`
    }
    
    function formatZero(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
    return result;
    
}





//HTML Elements
//chatBox
let chatBox = document.getElementById("chatBox");
//input
let inputTxt = document.querySelector("#factionInput").value;
//button
document.getElementById("sendBtn").addEventListener("click", () => {
    userResponse();
});



//userResponse
function userResponse() {
    
    if (document.querySelector("#factionInput").value == "") {
        document.querySelector("#factionInput").value = "👋👋"
    }
    
    
    var inputTxt = document.querySelector("#factionInput").value;
    
    var val  = inputTxt;
    
    function trnsfrm(val) {
        let a = val.toLowerCase();
        let b = a.trim();
        let c = b.replaceAll(" ", "");
        let d = c.replaceAll("@", "");
        let e = d.replaceAll("#", "");
        let f = e.replaceAll("£", "");
        let g = f.replaceAll("_", "");
        let h = g.replaceAll(`&`, "");
        let i = h.replaceAll("-", "");
        let j = i.replaceAll("+", "");
        let k = j.replaceAll(`(`, "");
        let l = k.replaceAll(`)`, "");
        let m = l.replaceAll("/", "");
        let n = m.replaceAll(`*`, "");
        let o = n.replaceAll(`"`, "");
        let p = o.replaceAll(`'`, "");
        let q = p.replaceAll(":", "");
        let r = q.replaceAll(";", "");
        let s = r.replaceAll("!", "");
        let t = s.replaceAll("?", "");
        let u = t.replaceAll("1", "");
        let v = u.replaceAll("2", "");
        let w = v.replaceAll("3", "");
        let x = w.replaceAll("4", "");
        let y = x.replaceAll("5", "");
        let z = y.replaceAll("6", "");
        let aa = z.replaceAll("7", "");
        let ab = aa.replaceAll("8", "");
        let ac = ab.replaceAll("9", "");
        let ad = ac.replaceAll("0", "");
        let ae = ad.replaceAll("missme", "");
        let af = ae.replaceAll("lol", "");
        let ag = af.replaceAll(".", "");
        let ah = ag.replaceAll("lol.", "");
        let ai = ah.replaceAll("lol..", "");
        let aj = ai.replaceAll("lol...", "");
        let ak = aj.replaceAll("xd", "");
        let al = ak.replaceAll("xd.", "");
        let am = al.replaceAll("xd..", "");
        let an = am.replaceAll("xd...", "");
        return an;
    }
    
    let trnsVal = trnsfrm(val)
    
    var userLabel = document.createElement("label");
    var userSpan = document.createElement("span");
    var chatUserInf = document.createElement("label");
    var userInpt = document.querySelector("#factionInput").value;
    var lineBreak = document.createElement("br");
    userLabel.id = "userText";
    chatUserInf.id = "chatUserInf";
    chatUserInf.innerText = "Raido-Kun | " + time();
    userSpan.append(userInpt)
    userLabel.append(chatUserInf, lineBreak, userSpan);
    chatBox.append(userLabel);
    
    document.querySelector("#factionInput").value = "";
    document.getElementById("chatBox").scrollTo(0,100000);
    
    setTimeout(() => {
        botResponse(trnsVal);
    }, 1000);
    
}

//botResponse
function botResponse(trnsVal) {
    
    
    var botResponse = getBotResponse(trnsVal);
    var botLabel = document.createElement("label");
    var botSpan = document.createElement("span");
    var chatBotInf = document.createElement("label");
    var botInpt = document.querySelector("#factionInput").value;
    var lineBreak = document.createElement("br");
    botLabel.id = "botText";
    chatBotInf.id = "chatBotInf";
    chatBotInf.innerText = "Micro - Nomix | " + time();
    botSpan.append(botResponse)
    botLabel.append(chatBotInf, lineBreak, botSpan);
    chatBox.append(botLabel);
    
    document.getElementById("chatBox").scrollTo(0,100000)
    
}

