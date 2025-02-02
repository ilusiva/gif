import { IDecodable } from "./permissions/decodable";
import { Header } from "./blocks/header";
import { IGif } from "./gif";
import { IBlock } from "./blocks/block";
/**
 * GIF decoder.
 */
export class Decoder implements IDecodable<IGif> {
    readonly buffer: Buffer;
    /**
     * Header block
     */
    private header: IBlock<Header> | undefined;

    constructor(buffer: Buffer) {
        this.buffer = buffer;
    }

    decode(): IGif {
        this.header = Header.read(this.buffer);

        return {
            header: this.header,
        }
    }
}