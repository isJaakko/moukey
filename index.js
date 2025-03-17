import { mouse, left, right, up, down, Button, straightTo, centerOf, screen, imageResource } from '@nut-tree/nut-js';

const wait = timout => new Promise(resolve => setTimeout(() => resolve(), timout))

async function main() {
    await wait(1000);
    await mouse.move(right(500));
    await mouse.move(down(500));
    await mouse.move(left(500));
    await mouse.move(up(500));
    await mouse.doubleClick(Button.LEFT);
}

main();