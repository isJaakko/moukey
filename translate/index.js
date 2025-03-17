import { mouse, left, right, up, down, Button, straightTo, centerOf, screen, imageResource } from '@nut-tree/nut-js';
import { OPT_TYPE, BUTTON_STATE } from './constants.js'

const wait = timout => new Promise(resolve => setTimeout(() => resolve(), timout))

export async function translateAction(action, index) {
    const { type, x, y, spd, state, ex } = action;
    if (type === OPT_TYPE.move) {
        console.log(`${index + 1} 位置 ${x}-${y} 轨迹： ${spd}`);
        await mouse.move([{ x, y }]);
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