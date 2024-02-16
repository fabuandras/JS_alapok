function elagazas() {
    /* Döntsük el a "szam" változóról, hogy 0-? páros-? vagy páratlan-? */
    /* A "===" nem csak az értéket ellenőrzi, hanem a típust is! */
    let index = 0;
    console.log("A szam változó típusa: " + typeof szam);




    
    szam = Number(szam)
    console.log(szam)
    if (!Number.isNaN(szam)) {
        if (szam === 0) {
            console.log("A szam 0");
        } else if (szam % 2 === 0) {
            console.log("A szam páros");
        } else {
            console.log("A szam páratlan");
        }
    }
}

function udvozles(nev) {
    console.log("Jó reggelt " + nev + " !")
}

/* Írjuk ki 10-szer a consolra, hogy "Az élet szééép!" */

for (let index = 0; index < 10; index++) {
    console.log(`${index}. Az élet szééép!`)
}




while (index < 10) {
    console.log(`${index}. Az élet szééép!`)
    index++;
}


szam = "0"


