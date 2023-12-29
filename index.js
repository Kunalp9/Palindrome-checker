const input = document.getElementById('text-input');
const btnSubmit = document.getElementById('check-btn');
const result = document.getElementById('result');

const show = () => {
    result.style.display = "flex"; 
    result.style.color = 'rgb(101, 19, 155)';
    result.style.textAlign ='center'
}

const check = () => {//Razar
    let textInput = input.value;//razar

    // const regex = /[^a-zA-Z0-9]/g;
    let filteredTextArr = textInput.split('').filter((char) => {
        return /^[a-zA-Z0-9]+$/.test(char);
    })
    console.log(filteredTextArr);
    let filteredTextInput = filteredTextArr.join('').toLowerCase();
    // let textArr = textArray.replace(/ /g, "");

    let reverseTextArr = filteredTextArr.reverse();
    let reverseTextInput = reverseTextArr.join('').toLowerCase();
    if(filteredTextInput === reverseTextInput) {
        result.innerHTML = `<strong>The word '${textInput}' is a palindrome.</strong>`;
    }else {
        result.innerHTML = `<strong>The word '${textInput}' is not a palindrome.</strong`;
    }

}

const submit = () => {
    check();
    show();
}

btnSubmit.addEventListener('click', submit);