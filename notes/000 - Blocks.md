The  [GIF89a specification](https://www.w3.org/Graphics/GIF/spec-gif89a.txt) defines the byte structure of a GIF file, which consists of multiple blocks that store different types of information. Let's break down the GIF byte structure and understand each block superficially:

### 1. Header

The header block is the starting block of a GIF file and consists of 6 bytes. The header block includes the GIF signature "GIF89a" (or "GIF87a" for the older version), which indicates that the file is a GIF file.

### 2. Logical Screen Descriptor

The logical screen descriptor block consists of 7 bytes and follows the `header block` providing information about the overall properties of the GIF image. It includes parameters such as:

- Canvas width (16 bits);
- Canvas height (16 bits);
- Packed Field (8 bits);
    - Global Color Table Flag (1 bit);
    - Color resolution (3 bit);
    - Sort Flag (1 bit);
    - Size of Global Color Table (3 bit).
- Background Color Index (8 bits);
- Pixel Aspect Ratio (8 bits).

### 3. Global Color Table

The global color table block **is optional** and contains the color palette used for the entire image. The length of the global color table block depends on the color resolution specified in the logical screen descriptor block. Each color entry in the table is represented by 3 bytes: 

- Red (8 bits);
- Green (8 bits);
- Blue (8 bits).

### 4. Graphic Control Extension

The graphic control extension block is **is optional** and used to specify control information for a specific image or animation frame. It includes parameters such as:

- Extension Introducer (8 bits);
- Graphic Control Label (8 bits);
- Byte size (9 bits);
- Packed Field
    - Reserved for future use (3 bits);
    - Disposal Method (3 bits);
    - User Input Flag (1 bit);
    - Transparent Color Flag (1 bit).
- Delay Time (16 bits);
- Transparent Color Index (8 bits);
- Block terminator (8 bits).

### 5. Image Descriptor

The image descriptor block defines the properties of an individual image frame, including the image position, dimensions, and color table usage. It also specifies whether the image data is interlaced or not.

This block is exactly 10 bytes long:

- Image separator (8 bits);
- Image Left (16 bits);
- Image Top (16 bits);
- Image Width (16 bits);
- Image Height (16 bits);
- Packed Field:
    - Local Color Table Flag (1 bit);
    - Interlace Flag (1 bit);
    - Sort Flag (1 bit);
    - Reserved For Future Use (2 bits);
    - Size of Local Color Table (3 bits).

### 6. Local Color Table

The local color table block **is optional** and can be included in the image descriptor block to override the global color table for a specific frame. It contains a color palette tailored for a particular frame of the animation.

### 7. Image Data

The image data block stores the pixel data for a specific image or animation frame. It uses a compression algorithm called LZW (Lempel-Ziv-Welch) to reduce the size of the image data.

### 8. Plain Text Extension

The Plain Text Extension block allows to include optional plain text data in a GIF file. 

It begins with an extension introducer value of 21, followed by a byte indicating plain text (01). The subsequent byte specifies the block size, indicating the number of bytes to skip before reaching the actual text data. The text data is encoded in data sub-blocks, with the block ending when a sub-block of length 0 is encountered.

### 9. Application Extension

The Application Extension block enables the inclusion of application-specific information within a GIF file.

One example is the Netscape 2.0 extension, which is commonly used to loop animated GIF files. The Netscape 2.0 looping block must be positioned immediately after the global color table of the logical screen descriptor and is 19 bytes in length.


### 10. Comment Extension

The Comment Extension allows to include ASCII text in a GIF file, usually used for image descriptions, credits, or other human-readable metadata. 

It begins with an extension introducer value of 21, followed by a byte representing the comment label. Data sub-blocks follow, containing ASCII character codes for the comment. Each data sub-block length is indicated, and the block concludes with a sub-block of zero bytes, signaling the end of the block.

### 11. Trailer

The trailer block is the final block in a GIF file and consists of a single byte with a hex value of 0x3B. This byte indicates the end of the file and acts as a delimiter for GIF images.