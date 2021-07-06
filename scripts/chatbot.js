let sweetenedWelcomeMessage = parseShortcuts(welcomeMessage);
appendBotMessage(sweetenedWelcomeMessage);

let activeKey = 0;

function writeInTextField(message) {
    document.getElementById("textField").innerHTML = message;
}

function readTextField() {
    let message = document.getElementById("textField").value;
    parseMessage(message);
}

function parseMessage(message) {
    let messageWordsArray = message.split(" ");
    let currentEtiquette = EtiquetteWithKey(activeKey);

    appendUserMessage(message);

    for (const [key, value] of Object.entries(currentEtiquette.keywords)) {
        for (let i=0; i<value.length; i++) {
            for (let j=0; j<messageWordsArray.length; j++) {
                if (messageWordsArray[j] === value[i]) {
                    activeKey = parseInt(key);
                }
            }
        }
    }

    let sweetenedMessage = parseShortcuts(EtiquetteWithKey(activeKey).message);
    appendBotMessage(sweetenedMessage);

    parseAction(EtiquetteWithKey(activeKey).action);
}

function EtiquetteWithKey(key) {
    for (let i=0; i<etiquettes.length; i++) {
        if (etiquettes[i].key === key) {
            return etiquettes[i];
        }
    }
}

function parseShortcuts(message) {
    let messageArray = message.split(" ");
    for (let i=0; i<messageArray.length; i++) {
        if (messageArray[i].charAt(0) === "#") {
            let word = messageArray[i].substring(1).trimStart().trimEnd();
            let onclick = "writeInTextField('"+word+"')";
            let link = "<a class=chatLink onclick="+onclick+">" + word + "</a>";
            messageArray[i] = link;
        }
    }

    console.log(messageArray.join(" "));
    return messageArray.join(" ");
}

function parseAction(action) {
    if (action === "welcome") {
        activeKey = 0;
        appendBotMessage(sweetenedWelcomeMessage);
    }
    else {
        console.log(action);
    }
}

function appendBotMessage(message) {
    setTimeout(() => {
        let botMessage = document.createElement("p");
        botMessage.className = "botMessage";
        botMessage.innerHTML = message;
        document.getElementById("chatBox").prepend(botMessage);
    }, 2000);
}

function appendUserMessage(message) {
    let userMessage = document.createElement("p");
    userMessage.className = "userMessage";
    userMessage.innerHTML = message;
    document.getElementById("chatBox").prepend(userMessage);
}