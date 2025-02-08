import { BitShift } from "./shift";
import { BitMask } from "./mask";
import { Byte } from "../byte/byte";

/**
 * Represents a helper class for bit manipulation operations.
 */
export class Bit {
    /**
     * Performs bit manipulation operations on a given number.
     * @param number The number to be manipulated.
     */
    static shift(number: Byte): BitShift {
        return new BitShift(number);
    }

    /**
     * Creates a bit mask for the specified positions.
     * @param poisitions The positions of the bits to set in the mask.
     */
    static mask(...poisitions: number[]): BitMask {
        return new BitMask(poisitions);
    }
}