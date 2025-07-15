import { PickFileReturn } from "../apis/filesystem.js";

export async function pickFile(): Promise<PickFileReturn> {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.filesystem?.pickFile === "function") {
        // @ts-ignore
        return JSON.parse(await globalThis.AstroBox.filesystem.pickFile());
    } else {
        throw new Error("AstroBox.filesystem.pickFile not available");
    }
}