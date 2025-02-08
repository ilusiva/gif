# Bit Masking

Bit masking is a technique that involves using binary numbers to manipulate specific bits within a larger binary number. This is achieved by performing bitwise AND, OR, XOR, and other operations with a mask – a binary number with one or more bits set to 1.

## Usage

Bit masking is commonly used to:
- Extract specific bits from a binary number
- Set or clear specific bits within a binary number
- Check if a particular bit is set or clear
- Perform bitwise operations on selected bits

Let's consider a scenario where we want to set the 2nd bit of a binary number to 1 using a bit mask. We can perform a bitwise OR operation with the bit mask:

```
Number: 0101
Bit Mask: 0010
OR: 0101 | 0010
Result: 0111 (decimal: 7)
```

### Checking Specific Bits

Using a bit mask with multiple bits set, we can check the state of specific bits within a binary number by performing bitwise AND operations. 

Consider the binary number `10110110`, we want to check if the first 4 bits from the right are set:

```
Binary Number: 10110110
Bit Mask: 00001111
AND: 10110110 & 00001111
Result: 00000110
```