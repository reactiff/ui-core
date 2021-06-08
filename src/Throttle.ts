export default class Throttle {
    lastKnownParams = null;
    ticking = false;
    invokeWithAnimationFrame(method, params) {
        this.lastKnownParams = params;
        if (!this.ticking) {
            this.ticking = true;
            window.requestAnimationFrame(() => {
                method(this.lastKnownParams);
                this.ticking = false;
            });
        }
    }
}
