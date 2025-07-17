import { pickFileOptions, PickFileReturn, ReadFileOptions } from "../apis/filesystem.js";
import { base64ToUint8Array } from "../utils.js";

export async function pickFile(options: pickFileOptions): Promise<PickFileReturn> {
    const options_: pickFileOptions = {
        decode_text: false,
        encoding: "undefined",
        ...options
    }
    // @ts-ignore
    if (typeof globalThis.AstroBox?.filesystem?.pickFile === "function") {
        // @ts-ignore
        return JSON.parse(await globalThis.AstroBox.filesystem.pickFile(JSON.stringify(options_)));
    } else {
        throw new Error("AstroBox.filesystem.pickFile not available");
    }
}
export async function readFile(path: string, options: ReadFileOptions): Promise<Uint8Array | string> {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.filesystem?.readFile === "function") {
        let options_: ReadFileOptions = {
            offset: 0,
            decode_text: true,
            ...options
        }
        // @ts-ignore
        var result = await globalThis.AstroBox.filesystem.readFile(path, JSON.stringify(options_));
        if (options_.decode_text) {
            return result;
        }
        return base64ToUint8Array(result);
    } else {
        throw new Error("AstroBox.filesystem.readFile not available");
    }
}
export async function unloadFile(path: string): Promise<void> {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.filesystem?.unloadFile === "function") {
        // @ts-ignore
        return await globalThis.AstroBox.filesystem.unloadFile(path);
    } else {
        throw new Error("AstroBox.filesystem.unloadFile not available");
    }
}
