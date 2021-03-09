// BinaryReader
// Reads primitive data types as binary values in a specific encoding.

class Reader {
    constructor(buffer) {
        if (!Buffer.isBuffer(buffer)) throw new Error('Obj is not a buffer');

        this.buffer = buffer;
        this.offset = 0;
    }

    getLength() {
        return this.buffer.length;
    }

    getOffset() {
        return this.offset;
    }

    skip(length) {
        this.offset += length;
    }

    // Miscellaneous
    compare(target, targetStart, targetEnd, sourceStart, sourceEnd) {
        // https://nodejs.org/api/buffer.html#buffer_buf_compare_target_targetstart_targetend_sourcestart_sourceend
    }

    equals(otherBuffer) {
        return this.buffer.equals(otherBuffer);
    }

    includes(value) {
        return this.buffer.includes(value);
    }
    
    slice(start, end) {
        if (end == null) end = this.buffer.length;

        return this.buffer.slice(start, end);
    }

    // Read
    read(length, encoding) {
        if (length == null) length = this.buffer.length - this.offset;
        
        let value = this.buffer.toString(encoding, this.offset, this.offset + length);
        this.offset += length;

        return value;
    }

    readZero(encoding) {
        let start = this.offset;
        let end = this.offset;

        switch (encoding) {
            case 'utf8':
                while (this.offset + 1 < this.buffer.length && this.readUInt8() !== 0) {
                    end += 1;
                }
                break;

            case 'utf16le':
            case 'ucs2':
                while (this.offset + 2 < this.buffer.length && this.readUInt16LE() !== 0) {
                    end += 2;
                }
                break;
        }

        return this.slice(start, end).toString();
    }

    // Big Int
    readBigInt64BE() {
        let value = this.buffer.readBigInt64BE(this.offset);
        this.offset += 8

        return value;
    }

    readBigInt64LE() {
        let value = this.buffer.readBigInt64LE(this.offset);
        this.offset += 8;

        return value;
    }

    // Big UInt
    readBigUInt64BE() {
        let value = this.buffer.readBigUInt64BE(this.offset);
        this.offset += 8;

        return value;
    }

    readBigUInt64LE() {
        let value = this.buffer.readBigUInt64LE(this.offset);
        this.offset += 8;

        return value;
    }

    // Double
    readDoubleBE() {
        let value = this.buffer.readDoubleBE(this.offset);
        this.offset += 8;

        return value;
    }

    readDoubleLE() {
        let value = this.buffer.readDoubleLE(this.offset);
        this.offset += 8;

        return value;
    }

    // Float
    readFloatBE() {
        let value = this.buffer.readFloatBE(this.offset);
        this.offset += 4;

        return value;
    }

    readFloatLE() {
        let value = this.buffer.readFloatLE(this.offset);
        this.offset += 4;

        return value;
    }

    // Int
    readInt8() {
        let value = this.buffer.readInt8(this.offset);
        this.offset += 1;

        return value;
    }

    readInt16BE() {
        let value = this.buffer.readInt16BE(this.offset);
        this.offset += 2;

        return value;
    }

    readInt16LE() {
        let value = this.buffer.readInt16LE(this.offset);
        this.offset += 2;

        return value;
    }

    readInt32BE() {
        let value = this.buffer.readInt32BE(this.offset);
        this.offset += 4;

        return value;
    }

    readInt32LE() {
        let value = this.buffer.readInt32LE(this.offset);
        this.offset += 4;

        return value;
    }

    readIntBE() {
        // https://nodejs.org/api/buffer.html#buffer_buf_readintbe_offset_bytelength
    }

    readIntLE() {
        // https://nodejs.org/api/buffer.html#buffer_buf_readintle_offset_bytelength
    }

    // UInt
    readUInt8() {
        let value = this.buffer.readUInt8(this.offset);
        this.offset += 1;

        return value;
    }

    readUInt16BE() {
        let value = this.buffer.readUInt16BE(this.offset);
        this.offset += 2;

        return value;
    }

    readUInt16LE() {
        let value = this.buffer.readUInt16LE(this.offset);
        this.offset += 2;

        return value;
    }

    readUInt32BE() {
        let value = this.buffer.readUInt32BE(this.offset);
        this.offset += 4;

        return value;
    }

    readUInt32LE() {
        let value = this.buffer.readUInt32LE(this.offset);
        this.offset += 4;

        return value;
    }

    readUIntBE() {
        // https://nodejs.org/api/buffer.html#buffer_buf_readuintbe_offset_bytelength
    }

    readUIntLE() {
        // https://nodejs.org/api/buffer.html#buffer_buf_readuintle_offset_bytelength
    }
}

module.exports = Reader;
