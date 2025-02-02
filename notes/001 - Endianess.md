Endianess refers to the way data is stored in memory on computer systems. There are two main types of endianess: little-endian (LE) and big-endian (BE).

### Little-Endian

In little-endian systems, the least significant byte of a data value is stored at the lowest memory address. This means that the values are read from right to left. 

#### Example:

For a 4-byte integer value `0x12345678` in little-endian system:

```
Address | Data
--------|------
0x00    | 0x78
0x01    | 0x56
0x02    | 0x34
0x03    | 0x12
```

### Big-Endian

In big-endian systems, the most significant byte of a data value is stored at the lowest memory address. This means that the values are read from left to right. 

#### Example:

For the same 4-byte integer value `0x12345678` in big-endian system:

```
Address | Data
--------|------
0x00    | 0x12
0x01    | 0x34
0x02    | 0x56
0x03    | 0x78
```