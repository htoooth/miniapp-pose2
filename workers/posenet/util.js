"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var posenet = require("@tensorflow-models/posenet");
var color = 'aqua';
var boundingBoxColor = 'red';
var lineWidth = 2;
function toTuple(_a) {
    var y = _a.y, x = _a.x;
    return [y, x];
}
function drawPoint(ctx, y, x, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
exports.drawPoint = drawPoint;
/**
 * Draws a line on a canvas, i.e. a joint
 */
function drawSegment(_a, _b, color, scale, ctx) {
    var ay = _a[0], ax = _a[1];
    var by = _b[0], bx = _b[1];
    ctx.beginPath();
    ctx.moveTo(ax * scale, ay * scale);
    ctx.lineTo(bx * scale, by * scale);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke();
}
exports.drawSegment = drawSegment;
/**
 * Draws a pose skeleton by looking up all adjacent keypoints/joints
 */
// tslint:disable-next-line:no-any
function drawSkeleton(keypoints, minConfidence, ctx, scale) {
    if (scale === void 0) { scale = 1; }
    var adjacentKeyPoints = posenet.getAdjacentKeyPoints(keypoints, minConfidence);
    // tslint:disable-next-line:no-any
    adjacentKeyPoints.forEach(function (keypoints) {
        drawSegment(toTuple(keypoints[0].position), toTuple(keypoints[1].position), color, scale, ctx);
    });
}
exports.drawSkeleton = drawSkeleton;
/**
 * Draw pose keypoints onto a canvas
 */
// tslint:disable-next-line:no-any
function drawKeypoints(keypoints, minConfidence, ctx, scale) {
    if (scale === void 0) { scale = 1; }
    for (var i = 0; i < keypoints.length; i++) {
        var keypoint = keypoints[i];
        if (keypoint.score < minConfidence) {
            continue;
        }
        var _a = keypoint.position, y = _a.y, x = _a.x;
        drawPoint(ctx, y * scale, x * scale, 3, color);
    }
}
exports.drawKeypoints = drawKeypoints;
/**
 * Draw the bounding box of a pose. For example, for a whole person standing
 * in an image, the bounding box will begin at the nose and extend to one of
 * ankles
 */
// tslint:disable-next-line:no-any
function drawBoundingBox(keypoints, ctx) {
    var boundingBox = posenet.getBoundingBox(keypoints);
    ctx.rect(boundingBox.minX, boundingBox.minY, boundingBox.maxX - boundingBox.minX, boundingBox.maxY - boundingBox.minY);
    ctx.strokeStyle = boundingBoxColor;
    ctx.stroke();
}
exports.drawBoundingBox = drawBoundingBox;
//# sourceMappingURL=util.js.map