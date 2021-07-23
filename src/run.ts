import { Context } from './context';
import { repl } from './repl';

export const run = async (): Promise<void> => {
    const ctx = new Context();

    await repl(ctx);
};
