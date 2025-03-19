import { mouse, left, right, up, down, Button, straightTo, centerOf, screen, imageResource } from '@nut-tree/nut-js';
import { OPT_TYPE, BUTTON_STATE } from './constants.js';

export const wait = timout => new Promise(resolve => setTimeout(() => resolve(), timout))

async function convertCoordinate(x, y) {
    const screenWidth = await screen.width();
    const screenHeight = await screen.height();
    return {
        x: Math.round((x / 10000) * screenWidth),
        y: Math.round((y / 10000) * screenHeight)
    };
}

export async function translateAction(action, index) {
    const { type, x, y, spd, state, ex } = action;
    if (type === OPT_TYPE.move) {
        const { x: convertedX, y: convertedY } = await convertCoordinate(x, y);
        console.log(`${index + 1} 位置 ${convertedX}-${convertedY} 轨迹： ${spd}`);
        await mouse.move(straightTo({ x: convertedX, y: convertedY }), 'easeOutQuad');
    }

    if (type === OPT_TYPE.click) {
        if (state === BUTTON_STATE.pressButton) {
            console.log(`${index + 1} 按下 左键`);
            await mouse.pressButton(Button.LEFT);
        }
        if (state === BUTTON_STATE.releaseButton) {
            console.log(`${index + 1} 松开 左键`);
            await mouse.releaseButton(Button.LEFT);
        }
    }

    if (type === OPT_TYPE.wait) {
        console.log(`${index + 1} 等待 ${ex}`);
        await wait(ex);
    }
}