import { Bit } from "../../source/bit/bit";

describe('Bit', () => {
    it('performs left bit shift operation correctly', () => {
        const result = Bit.shift(5).left(2);
        expect(result).toBe(20);
    });

    it('performs right bit shift operation correctly', () => {
        const result = Bit.shift(20).right(2);
        expect(result).toBe(5);
    });

    it('creates a bit mask correctly', () => {
        const mask = Bit.mask(7, 6); // 10000000 | 01000000 = 11000000
        expect(mask.value).toBe(192); // 11000000 in binary = 192
    });

    it('apply mask correctly', () => {
        const mask = Bit.mask(7, 6); // 10000000 | 01000000 = 11000000
        expect(mask.apply(170)).toBe(128); // 11000000 & 10101010 = 10000000 in binary = 128
    });
});