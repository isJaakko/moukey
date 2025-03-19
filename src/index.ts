import records from './records/start_game.json';
import { translateAction, wait } from './translate/index';

async function main() {
    const { actions } = records;

    for (let index = 0; index < actions.length; index++) {
        const action = actions[index];
        await translateAction(action, index);
    }
}

main();