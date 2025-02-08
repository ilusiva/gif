import { Header } from "./blocks/header";
import { IGif } from "./gif";
import { LogicalScreenDescriptor } from "./blocks/logical-screen-descriptor";
/**
 * GIF decoder.
 */
export class Decoder {
    static decode(buffer: Buffer): IGif {
        const header = Header.read(buffer);
        const logicalScreenDescriptor = LogicalScreenDescriptor.read(buffer);

        return {
            header,
            logicalScreenDescriptor,
        }
    }
}