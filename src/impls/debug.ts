import { uint8ArrayToBase64 } from "../utils.js";

export async function sendRaw(data: Uint8Array) {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.debug?.sendRaw === "function") {
        // @ts-ignore
        await globalThis.AstroBox.debug.sendRaw(uint8ArrayToBase64(data));
    } else {
        throw new Error('AstroBox.debug.sendRaw not available on native side');
    }
}