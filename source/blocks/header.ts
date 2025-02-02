import { IBlock } from "./block";

export class Header{
    static SIZE: number = 6;
    /**
     * The signature of the GIF file.
     */
    readonly signature: String;
    /**
     * The version of the GIF file.
     */
    readonly version: String;

    private constructor(signature: String, version: String) {
        this.signature = signature;
        this.version = version;
    }

    static read(buffer: Buffer): IBlock<Header> {
        if (!buffer || buffer.length < Header.SIZE) {
            throw new Error('Insufficient data in GIF file header.');
        }
        const signature = buffer.toString('utf8', 0, 3); 
        if (signature !== "GIF") {
            throw new Error('Invalid GIF signature in header.');
        }
        const version = buffer.toString('utf8', 3, 6);
        if (version !== "89a") {
            throw new Error('Unsupported GIF version in header.');
        }

        return Object.freeze({
            value: new Header(signature, version)
        });
    }
}