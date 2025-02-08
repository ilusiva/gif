import fs from 'fs';
import path from 'path';
import { Decoder } from "../source/decoder";
import { integration } from "./integration";

describe('Decoder', () => {
    test('should create a GIF object', () => {
        const gifPath = path.join(__dirname, '..', 'resources', 'heart.gif');
        const buffer: Buffer = fs.readFileSync(gifPath);
        const gif = Decoder.decode(buffer);

        expect(gif).not.toBeFalsy();
        integration.expect({ header: gif.header }).toBeValid();
        integration.expect({ logicalScreenDescriptor: gif.logicalScreenDescriptor }).toBeValid();
    });
});