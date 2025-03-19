import records from './records/start_game.json';
import { translateAction, wait } from './translate/index';
import { QuickInput } from './translate/types';

async function main() {
    const { actions } = records;

    for (let index = 0; index < actions.length; index++) {
        const action = actions[index] as QuickInput.Action;
        await translateAction(action, index);
    }
}

main();