import { ReadFileOptions, PickFileReturn, StatFileReturn } from "../apis/filesystem.js";
import { base64ToUint8Array, uint8ArrayToString } from "../utils.js";

export async function pickFile(): Promise<PickFileReturn> {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.filesystem?.pickFile === "function") {
        // @ts-ignore
        return JSON.parse(await globalThis.AstroBox.filesystem.pickFile());
    } else {
        throw new Error("AstroBox.filesystem.pickFile not available");
    }
}

export async function statFile(path: string): Promise<StatFileReturn> {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.filesystem?.statFile === "function") {
        // @ts-ignore
        return JSON.parse(await globalThis.AstroBox.filesystem.statFile(path));
    } else {
        throw new Error("AstroBox.filesystem.statFile not available");
    }
}

export async function readFile(path: string, options?: ReadFileOptions): Promise<Uint8Array | string> {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.filesystem?.readFile === "function") {
        let options_: ReadFileOptions = {
            offset: 0,
            len: 0,
            decode_text: true
        }
        if (options) {
            options_ = options;
        }
        else {
            options_.len = (await statFile(path)).size;
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