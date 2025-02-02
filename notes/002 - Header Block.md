## Header Block

The GIF header block is a 6-byte segment at the start of a GIF file containing information, such as the "GIF" signature and the GIF format version as follows:

1. **Signature (Bytes 1-3):** The first 3 bytes of the header block contain the signature "GIF" in ASCII characters to signify the file format.
   
2. **Version (Bytes 4-6):** Following the signature, the next 3 bytes specify the version of the GIF format being utilized, typically either "87a" or "89a".

---

## Signature

The signature "GIF" is represented by the hex values `0x47 0x49 0x46`, corresponding to the individual characters "G," "I," and "F" respectively.

---

## Version

The version bytes can be "87a" represented by `0x38 0x37 0x61` or "89a" represented by `0x38 0x39 0x61` in hexadecimal format.

---

## Reading a GIF file

In the directory `resources`, there is a file called `heart.gif`. To read the first 6 bytes (header), we can use the command below:

```
hexdump -C -n 6 heart.gif
```

We will have the following output:

```
00000000  47 49 46 38 39 61                                 |GIF89a
```


---

## Pull Requests

- [Support header decoding](https://github.com/ilusiva/gif/pull/1)
