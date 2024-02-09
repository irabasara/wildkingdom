import throttle from "lodash.throttle";


const emailEl = document.querySelector('input[type = email]');
const messageEl = document.querySelector('textarea[name = message]');
const formEl = document.querySelector('.feedback-form');

const FORM_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onFormEl, 500));
formEl.addEventListener('submit', onButtonClick);

let formData = {};

function onFormEl(event) {
    if (event.target.nodeName !== 'INPUT' && event.target.nodeName !== 'TEXTAREA') {
        return;
    };
    formData = {
        email: emailEl.value,
        message: messageEl.value
        }
    formData = JSON.stringify(formData);
    localStorage.setItem(FORM_KEY, formData);
};


function  onButtonClick(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(FORM_KEY);
    console.log(formData);

};


function formOutput() {
    const userInput = localStorage.getItem(FORM_KEY);
    formData = JSON.parse(userInput);
    if (userInput) {
        emailEl.value = formData.email;
        messageEl.value = formData.message;

    };
};
formOutput();



