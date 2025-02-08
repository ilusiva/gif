import { Byte } from "../byte/byte";

export class BitShift {
    private number: Byte;

    constructor(number: Byte) {
        this.number = number;
    }

    /** Performs a left shift operation on the number. */
    left(amount: Byte): number {
        return this.number << amount;
    }

    /** Performs a right shift operation on the number. */
    right(amount: Byte): number {
        return this.number >> amount;
    }
}