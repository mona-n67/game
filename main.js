var a = prompt('Enter : rock or paper or scissors');

var output = document.getElementById('output');

output.innerHTML = 'you select  : ' + a + '<br>';

var b= Math.floor(Math.random() * 3);


 if (b == 0){
     b = "rock";
     output.innerHTML += 'computer select  : ' + 'rock' + '<br>';
 }

 else if (b == 1){
    b = "paper";
    output.innerHTML += 'computer select  : ' + 'paper' + '<br>';
}

 else if (b == 2){
    b = "scissors";
    output.innerHTML += 'computer select  : ' + 'scissors' + '<br>';
}

if( a === b){
    document.write ("both are equal, please try again ");
}



//Ghavanin Bazi

else if (a === "rock"){
    if (b === "scissors"){
        document.write('you are winner ');
    }
    else{
        document.write ('computer is winner ');
        
    }
}

else if (a === "paper"){
    if (b === "rock"){
        document.write('you are winner ');
    }
    else{
        document.write ('computer is winner ' );
        
    }
}

else if (a === "scissors"){
    if (b === "paper"){
        document.write('you are winner ');
    }
    else{
        document.write ('computer is winner ' );
        
    }
}

//push
