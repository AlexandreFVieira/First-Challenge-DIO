// Beginning of code creation
// Type your name
let YourName = "Alexandre";
// Enter your hero's name
let HerosName = "Agron"; 

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

// Hero's Level
let XP = 850;
let rank = " "

    if (XP <= 1000)  {
       rank = "Ferro"
    }
    else if ((XP >= 1001) && (XP <= 2000)) {
        rank = "Bronze"
        
    }
    else if ((XP >= 2001) && (XP <= 5000)){
        rank = "Prata"
        
    }

    else if ((XP >= 5001) && (XP <=7000)){
        rank = "Ouro"
        
    }

    else if ((XP >= 7001) && (XP <= 8000)){
        rank = "Platina"
        
    }

    else if ((XP >= 8001) && (XP <= 9000)){
        rank = "Ascendente"
        
    }

    else if ((XP >= 9001) && (XP <= 10000)){
        rank = "Imortal"
       
    }

    else{
        rank = "Radiante"
        
    }

            console.log("Olá " + YourName + ", " + " \nO Herói " + HerosName + " está no level " + XP + ", ranking " + rank)