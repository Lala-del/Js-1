
let userName = prompt('Please enter your name!', 'Lala');

while(true){
    if(!isNaN(userName)) {
        userName = prompt('Please enter your name!', 'Lala');
    }
    else{
        break;
    }

}

let userAge = (prompt('PLEASE ENTER YOUR CORRECT AGE!', 22 ));
while(true){
    if(isNaN(userAge)) {
        userAge = prompt('PLEASE ENTER YOUR CORRECT AGE!', 22 );
    }
    else{
        break;
    }
}


if (userAge < 18 ){
    alert("You aren't allowed to visit this website!")
}

else if ( userAge >= 18 && userAge <= 22){
    function controlQuestion (question , ok , cancel) {
          if (confirm(question)){
              ok();
          }
          else{
              cancel();
          }
    }
    controlQuestion('Do you want to continue?', () => alert(`Welcome ${userName}`), () => alert("You are npt allowed yo visit our website!"));
    }
else {
    alert(`Welcome , ${userName}`)
}
