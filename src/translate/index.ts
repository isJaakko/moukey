import { mouse, left, right, up, down, Button, straightTo, centerOf, screen, imageResource } from '@nut-tree/nut-js';
import { OPT_TYPE, BUTTON_STATE } from './constants';

export const wait = (timout: number): Promise<void> => new Promise(resolve => setTimeout(() => resolve(), timout))

async function convertCoordinate(x: number, y: number): Promise<{ x: number; y: number }> {
    const screenWidth = await screen.width();
    const screenHeight = await screen.height();
    return {
        x: Math.round((x / 10000) * screenWidth),
        y: Math.round((y / 10000) * screenHeight)
    };
}

export async function translateAction(action: any, index: number): Promise<void> {
    const { type, x, y, spd, state, ex } = action;
    if (type === OPT_TYPE.move) {
        const { x: convertedX, y: convertedY } = await convertCoordinate(x, y);
        console.log(`${index + 1} 位置 ${convertedX}-${convertedY} 轨迹： ${spd}`);
        await mouse.move(straightTo({ x: convertedX, y: convertedY }));
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