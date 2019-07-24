/// <reference types="miniprogram-api-typings" />
export declare function drawPoint(ctx: wx.CanvasContext, y: number, x: number, r: number, color: string): void;
/**
 * Draws a line on a canvas, i.e. a joint
 */
export declare function drawSegment([ay, ax]: [number, number], [by, bx]: [number, number], color: string, scale: number, ctx: wx.CanvasContext): void;
/**
 * Draws a pose skeleton by looking up all adjacent keypoints/joints
 */
export declare function drawSkeleton(keypoints: any, minConfidence: number, ctx: wx.CanvasContext, scale?: number): void;
/**
 * Draw pose keypoints onto a canvas
 */
export declare function drawKeypoints(keypoints: any, minConfidence: number, ctx: wx.CanvasContext, scale?: number): void;
/**
 * Draw the bounding box of a pose. For example, for a whole person standing
 * in an image, the bounding box will begin at the nose and extend to one of
 * ankles
 */
export declare function drawBoundingBox(keypoints: any, ctx: wx.CanvasContext): void;
