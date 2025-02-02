import { Header } from "../source/blocks/header";
import { Decoder } from "../source/decoder";
import { integration } from "./integration";

describe('Decoder', () => {
    test('should create a GIF object', () => {
        const buffer = Buffer.from([71, 73, 70, 56, 57, 97]);
        const decoder = new Decoder(buffer);
        const gif = decoder.decode();

        expect(gif).not.toBeFalsy();
        integration.expect({ header: gif.header }).toBeValid();
    });
});