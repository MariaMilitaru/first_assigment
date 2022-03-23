const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
"Q", "R",  "S", "T", "U", "V",  "W", "X", "Y", "Z",  "0", "1",  "2", "3", "4", "5", "6", "7",  
"8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];

stringToArray = (string) => {
    return string.toUpperCase().split('');
}

toIndex = (arr) => {
    return arr.map(x => characters.indexOf(x));
}

//sum of the cripted message and key 
const sum = (message,key) => {
    message = toIndex(message);
    key = toIndex(key);
    if(message.length == key.length){
        return message.map((num, idx) => (num + key[idx])%52);
    }
    if(key.length < message.length){
        return message.map((num, idx) => (num + key[idx % key.length])%52);
    } 
}

const reduce = (message,key) => {
    message = toIndex(message);
    key = toIndex(key);
    if(message.length == key.length){
        return message.map((num, idx) => num - key[idx]);
    }
    if(key.length < message.length){
        return message.map((num, idx) => num - key[idx % key.length]);
    } 
}

const encryptMessage = (message, key) => {
    let newarr = sum(message,key).map(x => characters[x]);
    return newarr.join('');  //array to string
}

const decryptMessage = (message,key) => {
    let newarr = reduce(message,key).map(x => characters[x]);
    return newarr.join('');  //array to string
}
 

const encrypt_btn = document.getElementById("encrypt_btn");
encrypt_btn.onclick = () => {
    let message = document.getElementById("message").value;
    message = stringToArray(message);
    let key = document.getElementById("key").value;
    key =  stringToArray(key);
    const finalMessage = encryptMessage(message,key);
    document.getElementById("final").value = finalMessage;
}


const decrypt_btn = document.getElementById("decrypt_btn");
decrypt_btn.onclick = () => {
    let message = document.getElementById("message").value;
    message = stringToArray(message);
    let key = document.getElementById("key").value;
    key =  stringToArray(key);
    const finalMessage = decryptMessage(message,key);
    document.getElementById("final").value = finalMessage;
}



