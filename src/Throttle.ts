export default class Throttle {
    
    nextCallback?: Function;
    lastKnownParams?: any[];

    ticking = false;

    invokeWithAnimationFrame(callback, ...params: any[]) {
        
        this.nextCallback = callback;
        this.lastKnownParams = params;

        if (!this.ticking) {

            const _this = this;

            const dispatch = (callback, params) => {
                _this.ticking = true;
                _this.nextCallback = undefined;
                _this.lastKnownParams = undefined;
                window.requestAnimationFrame(() => {
                    callback(params);
                    _this.ticking = false;
                    if (_this.nextCallback) {
                        dispatch(this.nextCallback, this.lastKnownParams);            
                    }
                });
            }

            dispatch(this.nextCallback, this.lastKnownParams);

        }
    }
}
