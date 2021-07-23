import * as inquierer from 'inquirer';
import { Context } from './context';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export const repl = async (_: Context): Promise<void> => {
    rl.question('> ', function (input) {
        rl.close();
        console.log(input);
    });

    // await repl(ctx);
};
