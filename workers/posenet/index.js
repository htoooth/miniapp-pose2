"use strict";
// import { detectPoseInRealTime } from './posenet'
worker.onMessage(function (res) {
    console.log('worker recevie msg=', res);
    worker.postMessage({
        msg: 'hello, worker'
    });
});
//# sourceMappingURL=index.js.map