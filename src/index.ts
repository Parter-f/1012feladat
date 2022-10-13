// Automata forditas:
// npx tsc --watch
// npx webpack watch

document.addEventListener('DOMContentLoaded' , () => {
    document.getElementById('subButton')!.addEventListener('click' , () =>{
        let username : string = (document.getElementById('username') as HTMLInputElement).value;
        let password : string = (document.getElementById('password') as HTMLInputElement).value;
        let password2 : string = (document.getElementById('password2') as HTMLInputElement).value;
        let email : string = (document.getElementById('email') as HTMLInputElement).value;
        let email2 : string = (document.getElementById('email2') as HTMLInputElement).value;


        //ha igaz akkor rossz valamelyik
        let bool1 : boolean;
        let bool2 : boolean;
        let bool3 : boolean;
        let bool4 : boolean;
        let bool5 : boolean;
        


        if(username.includes('&') || username.includes('_') || username.includes('=') || username[0] == '.' || username.length < 6 || username.length > 30 || username.includes('.') || username.includes(',') || username.includes('+')){
            console.log("rósz név");
            bool1 = true;
            window.alert("A felhasználónév hibás");
        }
        if(password.length > 10 || password.length < 5 ){
            console.log("rósz jelszó");
            bool2 = true;
            window.alert("A Jelszó hibás");

        }
        if(password2.length > 10 || password2.length < 5 ){
            console.log("rósz jelszó");
            bool4 = true;
            window.alert("A Második Jelszó hibás");

        }
        if(password != password2){
            window.alert("A Két jelszó nem egyezik");
        }
        if(!email.includes('@')){
            bool3 = true;
            window.alert("Az Email Hibás");
        }
        if(!email2.includes('@')){
            bool5 = true;
            window.alert("A Második Email hibás");
        }
        if(email != email2){
            window.alert("A Két Email nem egyezik"); 
        }

        



    }) ;

});