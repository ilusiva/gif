import { IBlock } from "../source/blocks/block";
import { Header } from "../source/blocks/header";
import { validateHeader } from "./blocks/header.spec";

export type Value = {
    header: IBlock<Header> | undefined;
}
export class Integration {
    expect(value: Value): Expectable {
        if (value.header) {
            return {
                toBeValid: () => validateHeader(value.header!)
            }
        }

        throw new Error('integration function must have one valid conditional branch.');
    }
}
export interface Expectable {
    toBeValid(): void;
}

export const integration = new Integration();