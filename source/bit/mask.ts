import { Byte } from "../byte/byte";

/**
 * Helper class for working with bit masks.
 */
export class BitMask {
    readonly value: Byte;

    /**
     * Create a new BitMask instance with the specified bit positions.
     * @param positions The positions of the bits to set in the mask.
     */
    constructor(positions: number[]) {
        let mask = 0;
        positions.forEach(position => {
            mask |= (1 << position);
        });
        this.value = mask as Byte;
    }

    /**
     * Apply the mask to a given number using bitwise AND operation.
     * @param number The number to apply the mask to.
     * @returns The result after applying the mask using AND operation.
     */
    apply(number: Byte): Byte {
        return (number & this.value) as Byte;
    }
}