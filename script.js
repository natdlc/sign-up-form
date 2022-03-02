// // messy form validation due to style being the main focus of project

let pwd2 = document.querySelector('#password2');
let pwd1 = document.querySelector('#password');
let pwdSpan = document.querySelector('#password + span');
let email = document.querySelector('#email');
let emailSpan = document.querySelector('#email + span');
let phone = document.querySelector('#phone');
let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');

fname.addEventListener('focus', e => {
    if (e.target.value == '') {
        document.querySelector('#fname:focus').style = 'border: 1px solid blue;';
    }
})

fname.addEventListener('keyup', e => {
    if (e.target.value != '') {
        document.querySelector('#fname:focus').style = 'border: 1px solid green;';
    }
    if (e.target.value == '') {
        document.querySelector('#fname:focus').style = 'border: 1px solid blue;';
    }
})

fname.addEventListener('focusout', e => {
    if (e.target.value == '') {
        fname.style = 'border: 1px solid rgb(208, 208, 208);';
    }
})

lname.addEventListener('focus', e => {
    if (e.target.value == '') {
        document.querySelector('#lname:focus').style = 'border: 1px solid blue;';
    }
})

lname.addEventListener('keyup', e => {
    if (e.target.value != '') {
        document.querySelector('#lname:focus').style = 'border: 1px solid green;';
    }
    if (e.target.value == '') {
        document.querySelector('#lname:focus').style = 'border: 1px solid blue;';
    }
})

lname.addEventListener('focusout', e => {
    if (e.target.value == '') {
        lname.style = 'border: 1px solid rgb(208, 208, 208);';
    }
})

pwd1.addEventListener('keyup', e => {
    checkPwd();
})

pwd1.addEventListener('focus', e => {
    if (pwd1.value == '') {
        pwd1.style = 'border: 1px solid blue;';
    }
})

pwd1.addEventListener('focusout', e => {
    if (pwd1.value == '') {
        pwd1.style = 'border: 1px solid rgb(208, 208, 208);';
    }
})

pwd2.addEventListener('keyup', e => {
    checkPwd();
})

pwd2.addEventListener('focus', e => {
    if (e.target.value == '') {
        pwd2.style = 'border: 1px solid blue;';
    }
})

pwd2.addEventListener('focusout', e => {
    if (e.target.value =='') {
        pwd2.style = 'border: 1px solid rgb(208, 208, 208);';
    }
})

function checkPwd() {
    if (pwd1.value != '' && pwd2.value == '') {
        pwdSpan.innerText = '';
        pwd1.style = 'border: 1px solid blue;';
    }
    else if (pwd1.value !== '' && pwd2.value !== pwd1.value) {
        pwdSpan.innerText = '* Passwords do not match';
        pwdSpan.style = 'font-size: 14px; color: #FF0000;';
        pwd1.style = 'border: 1px solid red;'
        pwd2.style = 'border: 1px solid red;'
    }

    else if (pwd1.value == '' && pwd2.value != '') {
        pwdSpan.innerText = '';
    }

    else if (pwd1.value !== '' && pwd2.value === pwd1.value) {
        pwdSpan.innerText = '';
        pwd1.style = 'border: 1px solid green;';
        pwd2.style = 'border: 1px solid green;';
    }

    else if (pwd1.value === '' && pwd2.value === '') {
        pwd1.style = 'border: 1px solid rgb(208, 208, 208);';
        pwdSpan.innerText = '';
    }

    else if (pwd2.value === '') {
        pwd2.style = 'border: 1px solid blue;';
    }
}

email.addEventListener('keyup', e => {
    if (e.target.validity.typeMismatch) {
        emailSpan.innerText = '* Email must be valid';
        emailSpan.style = 'font-size: 14px; color: red;';
        email.style = 'border: 1px solid red;';
    }
    else if (!e.target.validity.typeMismatch) {
        emailSpan.innerText = '';
        email.style = 'border: 1px solid green;';
    }
    if (e.target.value === '') {
        email.style = 'border: 1px solid blue;';
    }
})

email.addEventListener('focus', e => {
    if (e.target.value === '') {
        email.style = 'border: 1px solid blue;';
    }
})

email.addEventListener('focusout', e => {
    if (e.target.value === '') {
        email.style = 'border: 1px solid rgb(208, 208, 208);';
    }
})

/* need to add validation styles in first and last names to require to start with non-whitespace*/
