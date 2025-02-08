import { IBlock } from "../source/blocks/block";
import { Header } from "../source/blocks/header";
import { LogicalScreenDescriptor } from "../source/blocks/logical-screen-descriptor";
import { validateHeader } from "./blocks/header.spec";
import { validateLogicalScreenDescriptor } from "./blocks/logical-screen-descriptor.spec";

export type Value = {
    header?: IBlock<Header> | undefined;
    logicalScreenDescriptor?: IBlock<LogicalScreenDescriptor> | undefined;
}
export class Integration {
    expect(value: Value): Expectable {
        if (value.header) {
            return {
                toBeValid: () => validateHeader(value.header!)
            }
        }
        if (value.logicalScreenDescriptor) {
            return {
                toBeValid: () => validateLogicalScreenDescriptor(value.logicalScreenDescriptor!)
            }
        }

        throw new Error('integration function must have one valid conditional branch.');
    }
}
export interface Expectable {
    toBeValid(): void;
}

export const integration = new Integration();