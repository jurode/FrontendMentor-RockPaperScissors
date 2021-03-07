<script type="text/javascript">
    
    //PC Wahl Symbol per Zufall + Hiding/Visibility
    function pcWahl() {
        var randomZahl = Math.random() * 5; 
        randomZahl = Math.round(randomZahl + 0.5)

        if (randomZahl == 1) {symbolPC = "Schere"}
        if (randomZahl == 2) {symbolPC = "Stein"}
        if (randomZahl == 3) {symbolPC = "Papier"}
        if (randomZahl == 4) {symbolPC = "Echse"}
        if (randomZahl == 5) {symbolPC = "Spock"}
        
        this.style.visibility= 'hidden';
        document.getElementById('ausgabe3').style.display='hidden'; document.getElementById('ausgabe4').style.display='block';
    }
    
    // User Wahl mittels Eingabe
    function userWahl() {
        var userWahl = ""
    }

          
                //Vergleich wer Runde gewinnt 
                if(symbolPC === symbolUser ) { alert("Unentschieden"); }
                
                if (symbolPC == "Schere" && symbolUser == "Stein"){
                    siegeUser++;
                    alert("Stein schleift Schere - du gewinnst");
                }
                if (symbolPC == "Schere" && symbolUser == "Papier"){
                    siegePC++;
                    alert("Schere schneidet Papier - PC gewinnt.");
                }
                if (symbolPC == "Schere" && symbolUser == "Echse"){
                    siegePC++;
                    alert("Schere köpft Echse - PC gewinnt.");
                }
                if (symbolPC == "Schere" && symbolUser == "Spock"){
                    siegeUser++;
                    alert("Spock zertrümmert Schere - du gewinnst");
                }
                if (symbolPC == "Stein" && symbolUser == "Schere"){
                    siegePC++;
                    alert("Stein schleift Schere - PC gewinnt");
                }
                if (symbolPC == "Stein" && symbolUser == "Papier"){
                    siegeUser++;
                    falert("Papier bedeckt Stein - du gewinnst");
                }
                if (symbolPC == "Stein" && symbolUser == "Echse"){
                    siegePC++;
                    alert("Stein zerquetscht Echse - PC gewinnt");
                } 
                if (symbolPC == "Stein" && symbolUser == "Spock"){
                    siegeUser++;
                    alert("Spock verdampft Stein - du gewinnst");
                }
                if (symbolPC == "Papier" && symbolUser == "Schere"){
                    siegeUser++;
                    alert("Schere schneidet Papier - du gewinnst");
                }
                if (symbolPC == "Papier" && symbolUser == "Stein"){
                    siegePC++;
                    alert("Papier bedeckt Stein - PC gewinnt");
                }
                if (symbolPC == "Papier" && symbolUser == "Echse"){
                    siegeUser++;
                    alert("Echse frisst Papier - du gewinnst");
                }
                if (symbolPC == "Papier" && symbolUser == "Spock"){
                    siegePC++;
                    alert("Papier widerlegt Spock - PC gewinnt");
                }
                if (symbolPC == "Echse" && symbolUser == "Schere"){
                    siegeUser++;
                    alert("Schere köpft Echse - du gewinnst");
                }
                if (symbolPC == "Echse" && symbolUser == "Stein"){
                    siegeUser++;
                    alert("Stein zerquetscht Echse - du gewinnst");
                }
                if (symbolPC == "Echse" && symbolUser == "Papier"){
                    siegePC++;
                    alert("Echse frisst Papier - PC gewinnt");
                }
                if (symbolPC == "Echse" && symbolUser == "Spock"){
                    siegePC++;
                    alert("Echse vergiftet Spock - PC gewinnt");
                }
                if (symbolPC == "Spock" && symbolUser == "Schere"){
                    siegePC++;
                    alert("Spock zertrümmert Schere - PC");
                }
                if (symbolPC == "Spock" && symbolUser == "Stein"){
                    siegePC++;
                    alert("Spock verdampft Stein - PC");
                }
                if (symbolPC == "Spock" && symbolUser == "Papier"){
                    siegeUser++;
                    alert("Papier widerlegt Spock - du gewinnst");
                }
                if (symbolPC == "Spock" && symbolUser == "Echse"){
                   siegeUser++;
                    alert("Echse vergiftet Spock - du gewinnst"); 
                }
                    
            
                // es wird auf 3 Siege gespielt
                anzahlRunden++;
                
            } while ( siegeUser < 3 && siegePC < 3 );

            //Dann wird ausgegeben, wer wie oft gewonnen hat.
            if(siegeUser >= 3){
                alert("Juhu, du hast das Spiel gewonnen!" );
            }else{
                alert("Oh no! Der Computer hatte mehr Glück...");
            }
            alert("PC" + siegePC + " zu " + "du " + siegeUser);

       
        }
            
        </script>
        
      