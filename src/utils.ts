export function uint8ArrayToBase64(bytes: Uint8Array): string {
    const base64abc = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
        "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"
    ];
    let result = '', i;
    const l = bytes.length;
    for (i = 2; i < l; i += 3) {
        result += base64abc[bytes[i - 2] >> 2];
        result += base64abc[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
        result += base64abc[((bytes[i - 1] & 0x0f) << 2) | (bytes[i] >> 6)];
        result += base64abc[bytes[i] & 0x3f];
    }
    if (i === l + 1) {
        result += base64abc[bytes[i - 2] >> 2];
        result += base64abc[(bytes[i - 2] & 0x03) << 4];
        result += '==';
    }
    if (i === l) {
        result += base64abc[bytes[i - 2] >> 2];
        result += base64abc[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
        result += base64abc[(bytes[i - 1] & 0x0f) << 2];
        result += '=';
    }
    return result;
}

export function base64ToUint8Array(base64: string): Uint8Array {
    base64 = base64.replace(/[\r\n\s]/g, '');
    if (base64.length % 4 !== 0) {
        throw new Error('Invalid base64 string length');
    }

    const table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    let padding = 0;
    if (base64.endsWith('==')) padding = 2;
    else if (base64.endsWith('=')) padding = 1;
    const byteLength = (base64.length / 4) * 3 - padding;

    const arr = new Uint8Array(byteLength);

    let byteIdx = 0;
    for (let i = 0; i < base64.length; i += 4) {
        const n =
            (table.indexOf(base64[i]) << 18) |
            (table.indexOf(base64[i + 1]) << 12) |
            (table.indexOf(base64[i + 2]) << 6) |
            table.indexOf(base64[i + 3]);

        if (byteIdx < byteLength) arr[byteIdx++] = (n >> 16) & 0xff;
        if (byteIdx < byteLength) arr[byteIdx++] = (n >> 8) & 0xff;
        if (byteIdx < byteLength) arr[byteIdx++] = n & 0xff;
    }
    return arr;
}

export function uint8ArrayToString(arr: Uint8Array): string {
    let out = '';
    let i = 0;
    while (i < arr.length) {
        const byte1 = arr[i++];
        if (byte1 < 0x80) {
            out += String.fromCharCode(byte1);
        } else if (byte1 >= 0xc0 && byte1 < 0xe0) {
            const byte2 = arr[i++];
            out += String.fromCharCode(((byte1 & 0x1f) << 6) | (byte2 & 0x3f));
        } else if (byte1 >= 0xe0 && byte1 < 0xf0) {
            const byte2 = arr[i++];
            const byte3 = arr[i++];
            out += String.fromCharCode(
                ((byte1 & 0x0f) << 12) | ((byte2 & 0x3f) << 6) | (byte3 & 0x3f)
            );
        } else {
            // 4字节转为utf-16代理对
            const byte2 = arr[i++];
            const byte3 = arr[i++];
            const byte4 = arr[i++];
            let codepoint =
                ((byte1 & 0x07) << 18) |
                ((byte2 & 0x3f) << 12) |
                ((byte3 & 0x3f) << 6) |
                (byte4 & 0x3f);
            codepoint -= 0x10000;
            out += String.fromCharCode(
                0xd800 + (codepoint >> 10),
                0xdc00 + (codepoint & 0x3ff)
            );
        }
    }
    return out;
}

export function stringToUint8Array(str: string): Uint8Array {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code < 0x80) {
            arr.push(code);
        } else if (code < 0x800) {
            arr.push(0xc0 | (code >> 6));
            arr.push(0x80 | (code & 0x3f));
        } else if (code >= 0xd800 && code <= 0xdbff) {
            // 代理对
            const next = str.charCodeAt(++i);
            const codepoint =
                ((code - 0xd800) << 10) + (next - 0xdc00) + 0x10000;
            arr.push(0xf0 | (codepoint >> 18));
            arr.push(0x80 | ((codepoint >> 12) & 0x3f));
            arr.push(0x80 | ((codepoint >> 6) & 0x3f));
            arr.push(0x80 | (codepoint & 0x3f));
        } else {
            arr.push(0xe0 | (code >> 12));
            arr.push(0x80 | ((code >> 6) & 0x3f));
            arr.push(0x80 | (code & 0x3f));
        }
    }
    return new Uint8Array(arr);
}