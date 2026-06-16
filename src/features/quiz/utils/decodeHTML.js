export function decodeHTML(str){
    //textarea element will take HTML encoded string character (return from Trivia API) and return human redable character as value
    let ele = document.createElement("textarea");
    ele.innerHTML = str;
    return ele.value;
}