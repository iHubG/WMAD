let isName = true;

start_loop: 
while (isName){

let section = window.prompt("What is your section?");
let sect = section.toLowerCase();

    if (sect != "wmad" || sect == null){
        continue start_loop;
    } else if (sect == "wmad"){
        let name = window.prompt("What is your name?");
        alert(`Welcome ${name}!`);
        isName = false;
        break;
    } 
}