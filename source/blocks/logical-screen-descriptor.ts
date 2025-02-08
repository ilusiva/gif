import { Bit } from "../bit/bit";
import { Byte } from "../byte/byte";
import { IBlock } from "./block";

class PackedData {
    /**
     * Flag indicating the presence of a global color table.
     * @type {boolean}
     */
    readonly globalColorTableFlag: boolean;
    /**
     * Number of bits per primary color available in the original image.
     * @type {number}
     */
    readonly colorResolution: number;
    /**
     * Flag indicating whether the global color table is sorted.
     * @type {boolean}
     */
    readonly sortFlag: boolean;
    /**
     * Size of the global color table in powers of 2.
     * @type {number}
     */
    readonly globalColorTableSize: number;
    /**
     * @param {number} data - The packed data as a byte.
     */
    constructor(data: Byte) {
        this.globalColorTableFlag = !!Bit.shift(data).right(7);
        this.colorResolution = Bit.shift(Bit.mask(6, 5, 4).apply(data)).right(4);
        this.sortFlag = !!Bit.shift(Bit.mask(3).apply(data)).right(4);
        this.globalColorTableSize = Bit.mask(0, 1, 2).apply(data);
    }
}
/**
 * Logical Screen Descriptor of a GIF file.
 */
export class LogicalScreenDescriptor {
    private static readonly START_INDEX: number = 6;
    private static readonly SIZE: number = 13;

    readonly width: number;
    readonly height: number;
    readonly packedData: PackedData;
    readonly backgroundColorIndex: number;
    readonly pixelAspectRatio: number;

    constructor(width: number, height: number, packedData: PackedData, backgroundColorIndex: number, pixelAspectRatio: number) {
        this.width = width;
        this.height = height;
        this.packedData = packedData;
        this.backgroundColorIndex = backgroundColorIndex;
        this.pixelAspectRatio = pixelAspectRatio;
    }

    static read(buffer: Buffer): IBlock<LogicalScreenDescriptor> {
        if (!buffer || buffer.length < LogicalScreenDescriptor.SIZE) {
            throw new Error('Invalid or insufficient data in GIF logical screen descriptor.');
        }
        const data = buffer.subarray(LogicalScreenDescriptor.START_INDEX, LogicalScreenDescriptor.SIZE);

        const width = data.readUInt16LE(0);
        const height = data.readUInt16LE(2);
        const packedData = new PackedData(data.readUint8(4) as Byte);
        const backgroundColorIndex = data.readUint8(5);
        const pixelAspectRatio = data.readUint8(6);

        return Object.freeze({
            value: new LogicalScreenDescriptor(width, height, packedData, backgroundColorIndex, pixelAspectRatio)
        });
    }

    public hasGlobalColorTable(): boolean {
        return this.packedData.globalColorTableFlag;
    }
}