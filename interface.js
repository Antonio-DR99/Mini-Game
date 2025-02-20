const ui = {
    coins: document.getElementById('statCoi'),
    cowsAbd: document.getElementById('statAbd'),
    cowsDea: document.getElementById('statDea'),
    heliLife: document.getElementById('heliLife'),
    heliFuel: document.getElementById('heliFuel'),

    buttonRepair: document.getElementById('butRepair'),
    upgradeHealth: document.getElementById('upgHeal'),
    upgradeSpeed: document.getElementById('upgSpeed'),
    upgradeFuel: document.getElementById('upgFuel'),

    updateHud() {
        // top hud
        ui.coins.textContent = game.coins;
        ui.cowsAbd.textContent = game.cowsAbd;
        ui.cowsDea.textContent = game.cowsDie;
        ui.heliLife.value = heliData.life;
        ui.heliLife.max = heliData.maxLife;
        ui.heliFuel.value = heliData.fuel;
        ui.heliFuel.max = heliData.maxFuel;

        // bottom hud
        if(!heliData.moving && heliData.fuel == heliData.maxFuel) ui.buttonRepair.classList.add('enabled')
        else ui.buttonRepair.classList.remove('enabled')
        if(game.coins >= upgrades.priceHealth) ui.upgradeHealth.classList.add('enabled')
        else ui.upgradeHealth.classList.remove('enabled')
    }
}


const upgrades = {
    priceHealth: 3,
    priceFuel: 5,
    priceSpeed: 10,

    health() {
        if(game.coins >= upgrades.priceHealth){
            game.coins -= upgrades.priceHealth;
            upgrades.priceHealth = Math.ceil(upgrades.priceHealth*1.5);
            heliData.maxLife += 25;
            heliData.life += 25;
            document.getElementById('costHealth').textContent = upgrades.priceHealth;
        }
    },

    fuel() {

    },

    speed() {

    }
}