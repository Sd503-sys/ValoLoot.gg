var weaponId;
function warn() {
 //random Weapon generator
 generateRandomWeapon();
 //show random weapon
 showRandomWeapon();
}

function generateRandomWeapon() {
    var wId = Math.floor( Math.random()  *6 );
    weaponId = wId;
}

function showRandomWeapon() {
    var  weapons = ['Vandal', 'Knife', 'Spectre', 'Operator', 'Sherrif', 'Ghost'];
    var resultContainer = document.getElementById('result');
    var weaponName = weapons[weaponId];
    resultContainer.innerHTML = weaponName;
}