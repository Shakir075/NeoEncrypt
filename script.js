    const inputText = document.getElementById("inputText");
    const decryptText = document.getElementById("decryptText");
    const convertButton = document.getElementById("convertButton");
    const DecryptBtn = document.getElementById("DecryptBtn");
    const emojiDisplay = document.getElementById("emojiDisplay");
    const textDisplay = document.getElementById("textDisplay");
    const encrypt = document.querySelector(".encrypt");
    const decrypt = document.querySelector(".decrypt");
    const ench2 = document.querySelector(".encrypt h2");
    const dech2 = document.querySelector(".decrypt h2");
    const encryption = document.querySelector(".encryption");
    const decryption = document.querySelector(".decryption");
    
    
    decrypt.addEventListener("click", function(){
         encrypt.style.backgroundColor = "#424242";
         decrypt.style.border = "3px solid black";
         encrypt.style.border = "none"
         decrypt.style.backgroundColor = "#757575";
         ench2.style.color = "#757575";
         dech2.style.color = "#F5F5F5";
         encryption.style.display = "none";
         decryption.style.display = "block";
    
    })
    encrypt.addEventListener("click", function(){
       encrypt.style.backgroundColor = "#757575";
       decrypt.style.backgroundColor = "#424242";
       encrypt.style.border = "3px solid black";
       decrypt.style.border = "none";
       dech2.style.color = "#757575";
       ench2.style.color = "#F5F5F5";
       encryption.style.display = "block";
       decryption.style.display = "none";
    })




    convertButton.addEventListener("click", function () {
        const text = inputText.value;
        const emojiText = convertTextToEmoji(text);
        emojiDisplay.textContent = emojiText;
    });

    function convertTextToEmoji(text) {
        // Character-to-emoji mappings can be extended as needed
const emojiMap = {
    a: "😀",
    b: "😤",
    c: "😄",
    d: "😁",
    e: "😆",
    f: "😅",
    g: "😂",
    h: "🤣",
    i: "😊",
    j: "😇",
    k: "🙂",
    l: "🙃",
    m: "😉",
    n: "😌",
    o: "😍",
    p: "🥰",
    q: "😘",
    r: "😗",
    s: "😙",
    t: "😚",
    u: "☺️",
    v: "😋",
    w: "😛",
    x: "😜",
    y: "😝",
    z: "🤑",
    " ": " "
};

        // Convert text to emojis
        const emojiText = text
            .toLowerCase()
            .split("")
            .map((char) => (emojiMap[char] ? emojiMap[char] : char))
            .join("");

        return emojiText;
    }
    
DecryptBtn.addEventListener("click", function () {
    const emojiText = decryptText.value;
    const text = convertEmojiToText(emojiText);
    textDisplay.textContent = text;
});

function convertEmojiToText(emojiText) {
    const emojiMap = {
        "😀": "a",
        "😤": "b",
        "😄": "c",
        "😁": "d",
        "😆": "e",
        "😅": "f",
        "😂": "g",
        "🤣": "h",
        "😊": "i",
        "😇": "j",
        "🙂": "k",
        "🙃": "l",
        "😉": "m",
        "😌": "n",
        "😍": "o",
        "🥰": "p",
        "😘": "q",
        "😗": "r",
        "😙": "s",
        "😚": "t",
        "☺️": "u",
        "😋": "v",
        "😛": "w",
        "😜": "x",
        "😝": "y",
        "🤑": "z",
        " ": " "
    };

    const emojiTextArray = emojiText.match(/.{1,2}/g); // Split emojiText into pairs of two emojis
    const text = emojiTextArray
        .map((emojiPair) => {
            if (emojiPair in emojiMap) {
                return emojiMap[emojiPair];
            } else {
                return emojiPair; // Keep unknown emojis as they are
            }
        })
        .join("");

    return text;
}