"use strict";
// Automata forditas:
// npx tsc --watch
// npx webpack watch
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('subButton').addEventListener('click', () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let password2 = document.getElementById('password2').value;
        let email = document.getElementById('email').value;
        let email2 = document.getElementById('email2').value;
        //ha igaz akkor rossz valamelyik
        let bool1;
        let bool2;
        let bool3;
        let bool4;
        let bool5;
        if (username.includes('&') || username.includes('_') || username.includes('=') || username[0] == '.' || username.length < 6 || username.length > 30 || username.includes('.') || username.includes(',') || username.includes('+')) {
            console.log("rósz név");
            bool1 = true;
            window.alert("A felhasználónév hibás");
        }
        if (password.length > 10 || password.length < 5) {
            console.log("rósz jelszó");
            bool2 = true;
            window.alert("A Jelszó hibás");
        }
        if (password2.length > 10 || password2.length < 5) {
            console.log("rósz jelszó");
            bool4 = true;
            window.alert("A Második Jelszó hibás");
        }
        if (password != password2) {
            window.alert("A Két jelszó nem egyezik");
        }
        if (!email.includes('@')) {
            bool3 = true;
            window.alert("Az Email Hibás");
        }
        if (!email2.includes('@')) {
            bool5 = true;
            window.alert("A Második Email hibás");
        }
        if (email != email2) {
            window.alert("A Két Email nem egyezik");
        }
    });
});
