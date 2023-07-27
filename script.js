// Add new boosters here (let booster)
let booster = ['Gross 2 (Black)', 'Blink 1 (White)', 'Merfolk 4 (Blue)', 'Zombies 4 (Black)', 'Fearies 1 (Blue)', 'Treasure 2 (Red)', 'Constellation 2 (White)', 'Boneyard 1 (Black)', 'Zombies 3 (Black)', 'Think Again 2 (Blue)'];

const deck_1 = Math.floor((Math.random()*booster.length));
document.getElementById('booster_1').innerHTML = booster[deck_1];
booster.splice(deck_1, 1);

const deck_2 = Math.floor((Math.random()*booster.length));
document.getElementById('booster_2').innerHTML = booster[deck_2];
booster.splice(deck_2, 1);

const deck_3 = Math.floor((Math.random()*booster.length));
document.getElementById('booster_3').innerHTML = booster[deck_3];
booster.splice(deck_3, 1);        

const deck_4 = Math.floor((Math.random()*booster.length));
document.getElementById('booster_4').innerHTML = booster[deck_4];
booster.splice(deck_4, 1);