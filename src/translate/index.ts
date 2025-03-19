import {
  mouse,
  left,
  right,
  up,
  down,
  Button,
  straightTo,
  centerOf,
  screen,
  imageResource,
} from "@nut-tree/nut-js";
import { OPT_TYPE, BUTTON_STATE } from "./constants";
import { QuickInput } from "./types";

export const wait = (timout: number): Promise<void> =>
  new Promise((resolve) => setTimeout(() => resolve(), timout));

async function convertCoordinate(
  x: number,
  y: number
): Promise<{ x: number; y: number }> {
  const screenWidth = await screen.width();
  const screenHeight = await screen.height();
  return {
    x: Math.round((x / 10000) * screenWidth),
    y: Math.round((y / 10000) * screenHeight),
  };
}

export async function translateAction(
  action: QuickInput.Action,
  index: number
): Promise<void> {
  if (action.type === QuickInput.OptType.move) {
    const { x, y, spd } = action;
    const { x: convertedX, y: convertedY } = await convertCoordinate(x, y);
    console.log(`${index + 1} 位置 ${convertedX}-${convertedY} 速度： ${spd}`);
    await mouse.move(straightTo({ x: convertedX, y: convertedY }));

    return;
  }

  if (action.type === QuickInput.OptType.click) {
    const { state } = action;

    if (state === BUTTON_STATE.pressButton) {
      console.log(`${index + 1} 按下 左键`);
      await mouse.pressButton(Button.LEFT);
    }
    if (state === BUTTON_STATE.releaseButton) {
      console.log(`${index + 1} 松开 左键`);
      await mouse.releaseButton(Button.LEFT);
    }

    return;
  }

  const { ex } = action;
  console.log(`${index + 1} 等待 ${ex}`);
  await wait(ex);
}
