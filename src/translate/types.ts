export namespace QuickInput {
  export enum OptType {
    wait = 2,
    click = 3,
    move = 4,
  }

  export type MouseMoveAction = {
    x: number;
    y: number;
    /**
     * 操作类型
     */
    type: OptType.move;
    /**
     * 速度
     */
    spd: number;
  };

  enum KeyboardState {
    releaseButton = 0,
    pressButton = 1,
  }

  enum KeyboardKey {
    left = 1,
    right = 2,
  }

  export type MouseClickAction = {
    type: OptType.click;
    state: KeyboardState;
    vk: KeyboardKey;
  };

  export type WaitAction = {
    type: OptType.wait;
    ex: number;
  };

  export type Action = MouseMoveAction | MouseClickAction;
}
