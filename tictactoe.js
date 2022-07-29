var check = true;
const placedFields = [];
function placeKreuz(x){


   

    var kreuz = document.getElementById('kreuz' + x);
    var kreis = document.getElementById('kreis' + x);
    if(check == true && kreuz.style.visibility != 'visible' && kreis.style.visibility != 'visible' && !(placedFields.includes("kreuz " + x) && !(placedFields.includes("kreis " + x)))){
       

        kreuz.style.visibility = 'visible';
        check = false;
        var feldString = 'kreuz ' + x;
        
        placedFields.push(feldString);
        
        RandomKIPlace(feldString);
        
    }
    

}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
  
  

function RandomKIPlace(kreuz){
    
    var field = Math.floor(Math.random() * 9) + 1;
    

    var kreis = document.getElementById("kreis" + field);
    

    if(!(placedFields.includes("kreuz " + field))){
        

        sleep(500).then(() => {
            kreis.style.visibility = 'visible';
            placedFields.push("kreis" + field);
            check = true;
            checkWin();
        });
            
        
    }else{
        RandomKIPlace(kreuz);
       

    }

    
}

function checkWin(){

    var test = 0;
    var test2 = 0;
    //check first row
    for(i =1; i < 4; i++){
        if(placedFields.includes('kreuz ' + i)){
            test++;
        }
        if(placedFields.includes('kreis ' + i)){
            test2++;
        }
        if(test == 3){
            alert("Du Hast gewonnen");
            location.reload();
        }if(test2 == 3){
            alert("Kreis hat gewonnen");
            location.reload();
        }
    }
    test = 0; test2 = 0;
    //check second row
    for(i =4; i < 7; i++){
        if(placedFields.includes('kreuz ' + i)){
            test++;
        }
        if(placedFields.includes('kreis ' + i)){
            test2++;
        }
        if(test == 3){
            alert("Du Hast gewonnen");
            location.reload();
        }if(test2 == 3){
            alert("Kreis hat gewonnen");
            location.reload();
        }
    }
    test = 0; test2 = 0;
    //check third row()
    for(i =7; i < 10; i++){
        if(placedFields.includes('kreuz ' + i)){
            test++;
        }
        if(placedFields.includes('kreis ' + i)){
            test2++;
        }
        if(test == 3){
            alert("Du Hast gewonnen");
            location.reload();
        }if(test2 == 3){
            alert("Kreis hat gewonnen");
            location.reload();
        }
    }
    test = 0; test2 = 0;
    
    //check first column
    for(i =1; i < 8; i+=3){
        
        if(placedFields.includes('kreuz ' + i)){
            test++;
        }
        if(placedFields.includes('kreis ' + i)){
            test2++;
        }
        if(test == 3){
            alert("Du Hast gewonnen");
            location.reload();
        }if(test2 == 3){
            alert("Kreis hat gewonnen");
            location.reload();
        }
    }
    test = 0; test2 = 0;
    //check second column
    for(i =2; i < 9; i+=3){
        
        if(placedFields.includes('kreuz ' + i)){
            test++;
        }
        if(placedFields.includes('kreis ' + i)){
            test2++;
        }
        if(test == 3){
            alert("Du Hast gewonnen");
            location.reload();
        }if(test2 == 3){
            alert("Kreis hat gewonnen");
            location.reload();
        }
    }
    test = 0; test2 = 0;
    //check first column
    for(i =3; i < 10; i+=3){
        
        if(placedFields.includes('kreuz ' + i)){
            test++;
        }
        if(placedFields.includes('kreis ' + i)){
            test2++;
        }
        if(test == 3){
            alert("Du Hast gewonnen");
            location.reload();
        }if(test2 == 3){
            alert("Kreis hat gewonnen");
            location.reload();
        }
    }
    test = 0; test2 = 0;

    //check vertical
    for(i = 1; i < 10; i+=4){
        
        if(placedFields.includes('kreuz ' + i)){
            test++;
        }
        if(placedFields.includes('kreis ' + i)){
            test2++;
        }
        if(test == 3){
            alert("Du Hast gewonnen");
            location.reload();
        }if(test2 == 3){
            alert("Kreis hat gewonnen");
            location.reload();
        }
    }
    test = 0; test2 = 0;

    //check vertical 2 

    for(i = 3; i < 8; i+=2){
        
        if(placedFields.includes('kreuz ' + i)){
            test++;
        }
        if(placedFields.includes('kreis ' + i)){
            test2++;
        }
        if(test == 3){
            alert("Du Hast gewonnen");
            location.reload();
        }if(test2 == 3){
            alert("Kreis hat gewonnen");
            location.reload();
        }
    }
    test = 0; test2 = 0;

    for(i = 9; i < 10; i++){

        if(placedFields.includes('kreuz ' + i) && placedFields.includes('kreis ' + i)){
            test++;
        }
        if(test == 9){
            alert('Niemand hat gewonnen');
            location.reload();
        }
    }
}
function restart(){
    location.reload();
}
