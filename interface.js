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
        if(game.coins >= upgrades.priceFuel) ui.upgradeFuel.classList.add('enabled')
        else ui.upgradeFuel.classList.remove('enabled')
        if(game.coins >= upgrades.priceFuel) ui.upgradeSpeed.classList.add('enabled')
        else ui.upgradeSpeed.classList.remove('enabled')
    }
}


const upgrades = {
    priceHealth: 3,
    priceFuel: 5,
    priceSpeed: 10,

    health() {
        if(game.coins >= upgrades.priceHealth){
            game.coins -= upgrades.priceHealth;
            upgrades.priceHealth = Math.ceil(upgrades.priceHealth*2);
            heliData.maxLife += 25;
            heliData.life += 25;
            document.getElementById('costHealth').textContent = upgrades.priceHealth;
        }
    },

    fuel() {
        if(game.coins >= upgrades.priceFuel){
            game.coins -= upgrades.priceFuel;
            upgrades.priceFuel = Math.ceil(upgrades.priceFuel*1.75);
            heliData.maxFuel += 400;
            heliData.fuel += 400;
            document.getElementById('costHFuel').textContent = upgrades.priceFuel;
        }
    },

    speed() {
        if(game.coins >= upgrades.priceSpeed){
            game.coins -= upgrades.priceSpeed;
            upgrades.priceSpeed = Math.ceil(upgrades.priceSpeed*2.5);
            if(upgrades.priceSpeed > 10) {
                document.getElementById('helicopter').classList.add('moreSpeed')
                heliData.currentSpeed = 5000;
            }
            if(upgrades.priceSpeed > 30) {
                document.getElementById('helicopter').classList.add('finalSpeed')
                heliData.currentSpeed = 4000;
            }
            document.getElementById('costSpeed').textContent = upgrades.priceSpeed;
            if(upgrades.priceSpeed > 30) ui.upgradeSpeed.parentElement.style.display = 'none';
        }
    }
}