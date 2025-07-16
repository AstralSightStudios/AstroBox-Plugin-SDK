import { PickFileReturn, PickTextFileReturn } from "../apis/filesystem.js";
import { base64ToUint8Array, uint8ArrayToString } from "../utils.js";

export async function pickFile(): Promise<PickFileReturn> {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.filesystem?.pickFile === "function") {
        // @ts-ignore
        let ret = JSON.parse(await globalThis.AstroBox.filesystem.pickFile());
        ret.content = base64ToUint8Array(ret.content);
        return ret;
    } else {
        throw new Error("AstroBox.filesystem.pickFile not available");
    }
}

export async function pickTextFile(): Promise<PickTextFileReturn> {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.filesystem?.pickFile === "function") {
        // @ts-ignore
        let ret = JSON.parse(await globalThis.AstroBox.filesystem.pickFile());
        ret.content = uint8ArrayToString(base64ToUint8Array(ret.content));
        return ret;
    } else {
        throw new Error("AstroBox.filesystem.pickFile not available");
    }
}