export declare const videoWidth = 288;
export declare const videoHeight = 352;
export interface Point {
    x: number;
    y: number;
}
export interface CanvasNode {
    width: number;
    height: number;
    getContext: Function;
    createImage: Function;
}
/**
 * Feeds an image to posenet to estimate poses - this is where the magic
 * happens. This function loops with a requestAnimationFrame method.
 */
export declare function detectPoseInRealTime(image: any, net: any, mirror: any): Promise<any[]>;
export declare function drawPoses(page: any): any;
