import records from './records/login_qq.json' assert { type: 'json' };
import { translateAction } from './translate/index.js';

async function main() {
    const { actions } = records;

    for (let index = 0; index < actions.length; index++) {
        const action = actions[index];
        await translateAction(action, index);
    }
}

main();