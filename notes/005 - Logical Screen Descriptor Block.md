# Logical Screen Descriptor

The Logical Screen Descriptor block of 7 bytes and is responsible for defining attributes such as:

- **Canvas width**: 16 bits.

- **Canvas height**: 16 bits.

- **Packed Data (8 bits)**: Following the image dimensions. This field is a single byte, contains compacted information such as:
    - Global color table flag (1 bit);
    - Color resolution (3 bits);
    - Sort flag (1 bit);
    - Global color table size (3 bits).

- **Background Color Index (8 bits)**: This field specifies the index of the color within the color table that represents the background color of the image.

- **Pixel Aspect Ratio (8 bits)**: Provides information about the aspect ratio of the pixels in the image.

---

## Pull Requests

- [Support Logical Screen Descriptor decoding](https://github.com/ilusiva/gif/pull/2)