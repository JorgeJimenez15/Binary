// BinaryWriter
// Writes primitive types in binary to a stream and supports writing strings in a specific encoding.

class Writer {
    constructor(length) {
        if (length == null) length = 1024; // 1 KB

        this.buffer = Buffer.alloc(length);
        this.offset = 0;
    }
    
    getLength() {
        return this.offset;
    }

    reset() {
        this.offset = 0;
    }

    toBuffer() {
        let buffer = Buffer.alloc(this.offset);
        this.buffer.copy(buffer);

        return buffer;
    }

    // Miscellaneous
    copy(target) {
        let length = target.copy(this.buffer, this.offset, 0, target.length);
        this.offset += length;
    }

    fill(value, end, encoding) {
        if (encoding == null) encoding = 'utf8';

        this.buffer.fill(value, this.offset, end, encoding);
        this.offset += end;
    }

    // Write
    write(string, encoding) {
        let length = Buffer.byteLength(string, encoding);
        this.buffer.write(string, this.offset, encoding);
        this.offset += length;
    }

    writeZero(string, encoding) {
        this.write(string, encoding);

        switch (encoding) {
            case 'utf8':
                this.writeUInt8(0);
                break;

            case 'utf16le':
            case 'ucs2':
                this.writeUInt16LE(0);
                break;
        }
    }

    // Big Int
    writeBigInt64BE(value) {
        this.buffer.writeBigInt64BE(value, this.offset);
        this.offset += 8;
    }

    writeBigInt64LE(value) {
        this.buffer.writeBigInt64LE(value, this.offset);
        this.offset += 8;
    }

    // Big UInt
    writeBigUInt64BE(value) {
        this.buffer.writeBigUInt64BE(value, this.offset);
        this.offset += 8;
    }

    writeBigUInt64LE(value) {
        this.buffer.writeBigUInt64LE(value, this.offset);
        this.offset += 8;
    }

    // Double
    writeDoubleBE(value) {
        this.buffer.writeDoubleBE(value, this.offset);
        this.offset += 8;
    }

    writeDoubleLE(value) {
        this.buffer.writeDoubleLE(value, this.offset);
        this.offset += 8;
    }

    // Float
    writeFloatBE(value) {
        this.buffer.writeFloatBE(value, this.offset);
        this.offset += 4;
    }

    writeFloatLE(value) {
        this.buffer.writeFloatLE(value, this.offset);
        this.offset += 4;
    }

    // Int
    writeInt8(value) {
        this.buffer.writeInt8(value, this.offset);
        this.offset += 1;
    }

    writeInt16BE(value) {
        this.buffer.writeInt16BE(value, this.offset);
        this.offset += 2;
    }

    writeInt16LE(value) {
        this.buffer.writeInt16LE(value, this.offset);
        this.offset += 2;
    }

    writeInt32BE(value) {
        this.buffer.writeInt32BE(value, this.offset);
        this.offset += 4;
    }

    writeInt32LE(value) {
        this.buffer.writeInt32LE(value, this.offset);
        this.offset += 4;
    }

    writeIntBE(value) {
        // https://nodejs.org/api/buffer.html#buffer_buf_writeintbe_value_offset_bytelength
    }

    writeIntLE(value) {
        // https://nodejs.org/api/buffer.html#buffer_buf_writeintle_value_offset_bytelength
    }

    // UInt
    writeUInt8(value) {
        this.buffer.writeUInt8(value, this.offset);
        this.offset += 1;
    }

    writeUInt16BE(value) {
        this.buffer.writeUInt16BE(value, this.offset);
        this.offset += 2;
    }

    writeUInt16LE(value) {
        this.buffer.writeUInt16LE(value, this.offset);
        this.offset += 2;
    }

    writeUInt32BE(value) {
        this.buffer.writeUInt32BE(value, this.offset);
        this.offset += 4;
    }

    writeUInt32LE(value) {
        this.buffer.writeUInt32LE(value, this.offset);
        this.offset += 4;
    }

    writeUIntBE(value) {
        // https://nodejs.org/api/buffer.html#buffer_buf_writeuintbe_value_offset_bytelength
    }

    writeUIntLE(value) {
        // https://nodejs.org/api/buffer.html#buffer_buf_writeuintle_value_offset_bytelength
    }
}

module.exports = Writer;
