"use strict";
// Automata forditas:
// npx tsc --watch
// npx webpack watch
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('subButton').addEventListener('click', () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let bool1;
        let bool2;
        if (username.includes('&') || username.includes('_') || username.includes('=') || username[0] == '.' || username.length < 6 || username.length > 30 || username.includes('.') || username.includes(',') || username.includes('+')) {
            console.log("rósz név");
            bool1 = true;
        }
        if (password.length > 10 || password.length < 5) {
            console.log("rósz jelszó");
        }
    });
});
