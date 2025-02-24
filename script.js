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
    var weaponUrls = [
        'https://valorantstrike.com/wp-content/uploads/Valorant-Kuronami-Collection-Vandal-HD-1536x864.jpg',
        'https://s-valorant-api.op.gg/Assets/WeaponSkins/D3F2119F-4853-E136-C807-E197B6A9C92E.png?image=q_auto:good,f_webp,w_auto&v=5989259264',
        'https://th.bing.com/th/id/OIP.tuUYTJhVIYuC_WovJ_CD2wHaEK?w=311&h=180&c=7&r=0&o=5&pid=1.7',
        'https://valorantstrike.com/wp-content/uploads/2020/10/Valorant-Reaver-Collection-Operator-HD-1536x864.jpg', 
        'https://liquipedia.net/commons/images/thumb/6/67/Sheriff_reaver_black_VALORANT.png/241px-Sheriff_reaver_black_VALORANT.png', 
        'https://liquipedia.net/commons/images/thumb/3/36/Ghost_reaver_2.0_VALORANT.png/241px-Ghost_reaver_2.0_VALORANT.png'
        ];
    var resultContainer = document.getElementById('result');
    var resultImageContainer = document.getElementById('result-image')
    var weaponName = weapons[weaponId];
    resultContainer.innerHTML = weaponName;
    resultImageContainer.src = weaponUrls[weaponId];
}
