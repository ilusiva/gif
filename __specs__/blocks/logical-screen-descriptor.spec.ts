import { IBlock } from "../../source/blocks/block";
import { LogicalScreenDescriptor } from "../../source/blocks/logical-screen-descriptor";

export function validateLogicalScreenDescriptor(logicalScreenDescriptor: IBlock<LogicalScreenDescriptor>) {
    // 10 00  10 00      a2  06 00
    // .. ..  .. .. 10100010 .. ..
    expect(logicalScreenDescriptor.value.width).toBe(16);
    expect(logicalScreenDescriptor.value.height).toBe(16);
    expect(logicalScreenDescriptor.value.packedData.globalColorTableFlag).toBe(true);
    expect(logicalScreenDescriptor.value.packedData.colorResolution).toBe(2);
    expect(logicalScreenDescriptor.value.packedData.sortFlag).toBe(false);
    expect(logicalScreenDescriptor.value.packedData.globalColorTableSize).toBe(2);
    expect(logicalScreenDescriptor.value.hasGlobalColorTable()).toBe(true);
    expect(logicalScreenDescriptor.value.backgroundColorIndex).toBe(6);
    expect(logicalScreenDescriptor.value.pixelAspectRatio).toBe(0);
}

describe('LogicalScreenDescriptor', () => {
    test('LogicalScreenDescriptor throws error for invalid buffer', () => {
        const invalidBuffer = Buffer.from([0x01, 0x00, 0x02, 0x00, 0x8E, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]);
        expect(() => LogicalScreenDescriptor.read(invalidBuffer)).toThrow('Invalid or insufficient data in GIF logical screen descriptor.');
    });
});