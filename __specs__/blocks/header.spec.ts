import { IBlock } from "../../source/blocks/block";
import { Header } from "../../source/blocks/header";

export function validateHeader(header: IBlock<Header>) {
    expect(header).not.toBeFalsy();
    expect(Object.isFrozen(header)).toBe(true);
    expect(header.value.signature).toBe('GIF');
    expect(header.value.version).toBe('89a'); 
}

describe('Header', () => {
    it('should create a header object', () => {
      const buffer = Buffer.from([71, 73, 70, 56, 57, 97]);
      const header = Header.read(buffer);

      validateHeader(header);
    });
  
    it('should throw an error for invalid or insufficient data', () => {
      const buffer = Buffer.from([71, 73, 70]);
      expect(() => Header.read(buffer)).toThrow('Insufficient data in GIF file header.');
    });
  
    it('should throw an error for invalid GIF signature', () => {
      const buffer = Buffer.from([49, 50, 51, 56, 57, 97]); 
      expect(() => Header.read(buffer)).toThrow('Invalid GIF signature in header.');
    });
  
    it('should throw an error for unsupported GIF version', () => {
      const buffer = Buffer.from([71, 73, 70, 49, 50, 51]);
      expect(() => Header.read(buffer)).toThrow('Unsupported GIF version in header.');
    });
  });