// Automata forditas:
// npx tsc --watch
// npx webpack watch

document.addEventListener('DOMContentLoaded' , () => {
    document.getElementById('subButton')!.addEventListener('click' , () =>{
        let username : string = (document.getElementById('username') as HTMLInputElement).value;
        let password : string = (document.getElementById('password') as HTMLInputElement).value;
        let bool1 : boolean;
        let bool2 : boolean;
        if(username.includes('&') || username.includes('_') || username.includes('=') || username[0] == '.' || username.length < 6 || username.length > 30 || username.includes('.') || username.includes(',') || username.includes('+')){
            console.log("rósz név");
            bool1 = true;
        }
        if(password.length > 10 || password.length < 5 ){
            console.log("rósz jelszó");
            
        }



    }) ;

});