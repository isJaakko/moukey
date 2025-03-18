// import records from './records/start_game.json';
// import { translateAction, wait } from './translate/index.js';

export const wait = timout => new Promise(resolve => setTimeout(() => resolve(), timout))

async function main() {
    console.log('start');
    await wait(5000);
    console.log('end');
    // const { actions } = records;

    // for (let index = 0; index < actions.length; index++) {
    //     const action = actions[index];
    //     await translateAction(action, index);
    // }
}

main();