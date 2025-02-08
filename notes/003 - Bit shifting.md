# Bit Shifting

Bit shifting is a fundamental operation in programming that involves moving the bits of a binary number to the left or right. This can be done using the bitwise shift operators: `<<` for left shift and `>>` for right shift.

## Left Shift

Left shifting a binary number moves its bits to the left by a specified number of positions. This is equivalent to multiplying the number by 2 for each shift.

### Example:
```
Number: 0000 0101 (decimal: 5)
Left shift by 2: 0000 0101 << 2
Result: 0001 0100 (decimal:20)
```

## Right Shift

Right shifting a binary number moves its bits to the right by a specified number of positions. This is equivalent to dividing the number by 2 for each shift.

### Example:
```
Number: 0000 1000 (decimal: 8)
Right shift by 1: 0000 1000 >> 1
Result: 0000 0100 (decimal: 4)
```