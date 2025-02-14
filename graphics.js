const graphics = {
    rendering: false,
    lastTime: null, 

    frame() {
        // Credit for the ticking implementation: https://codepen.io/samanime/pen/LYjOvpd
        if(!graphics.rendering) return;
        const now = Date.now();
        const delta = now - this.lastTime;
        graphics.lastTime = now;
        // if (!this.paused) { this.timer -= delta; }
        requestAnimationFrame(graphics.frame);
    },
}