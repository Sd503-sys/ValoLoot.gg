var weaponId;
function warn() {
 //random Weapon generator
 generateRandomWeapon();
 //show random weapon
 showRandomWeapon();
}

function generateRandomWeapon() {
    var wId = Math.floor( Math.random()  *6 +1);
    weaponId = wId;
}

function showRandomWeapon() {
    console.log(weaponId);
}