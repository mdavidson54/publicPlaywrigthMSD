/*
Randome Utils 
*/

export function randomEmail(){
    return Math.random().toString().substr(2) + '@email.com';
}

export function randomPhone(){
    return Math.random().toString().substr(2, 6);
}

export function randomString(lenString) {  
    //define a variable consisting alphabets in small and capital letter  
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  
    var randomstring = '';  

    //loop to select a new character in each iteration  
    for (var i=0; i<lenString; i++) {  
        var rnum = Math.floor(Math.random() * characters.length);  
        randomstring += characters.substring(rnum, rnum+1);  
    }  

     //display the generated string   
    return  randomstring;  
}  