const ui = {
    coins: document.getElementById('statCoi'),
    cowsAbd: document.getElementById('statAbd'),
    cowsDea: document.getElementById('statDea'),
    heliLife: document.getElementById('heliLife'),
    heliFuel: document.getElementById('heliFuel'),

    updateHud() {
        ui.coins = game.coins;
        ui.cowsAbd = game.cowsAbd;
        ui.cowsDea = game.cowsDie;
        ui.heliLife.value = heliData.life;
        ui.heliLife.max = heliData.maxLife;
        ui.heliFuel.value = heliData.fuel;
        ui.heliFuel.max = heliData.maxFuel;
    }
}