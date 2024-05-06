function randomNumber1(){
    var number=parseInt(Math.random() * 6 + 1);
    var imagePath1="./images/zar" + number +".png";
    document.querySelector(".img1").setAttribute("src",imagePath1);

    var number2=parseInt(Math.random()* 6 + 1);
    var imagePath2="./images/zar" + number2 + ".png";
    document.querySelector(".img2").setAttribute("src",imagePath2);

    if(number == number2){
        document.querySelector(".title").innerHTML = "Berabere";
    }
    else if(number>number2){
        document.querySelector(".title").innerHTML = "Player 1 Win !";
    }
    else{
        document.querySelector(".title").innerHTML = "Player 2 Win !";
    }
    return number;
}


var result= randomNumber1();
console.log(result);