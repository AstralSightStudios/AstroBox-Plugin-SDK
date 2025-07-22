import { FetchOptions, FetchResponse } from "../apis/network.js";
import { base64ToUint8Array, uint8ArrayToBase64 } from "../utils.js";

export async function fetch(
    url: string,
    options: FetchOptions
): Promise<FetchResponse<typeof options.raw>> {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.network?.fetch === "function") {
        // @ts-ignore
        options.body_encoded = typeof options.body !== "string"
        // @ts-ignore
        options.body = options.body_encoded ? uint8ArrayToBase64(options.body) : options.body;
        // @ts-ignore
        let ret = await globalThis.AstroBox.network.fetch(url, JSON.stringify(options));
        ret.body = options.raw ? base64ToUint8Array(ret.body) : ret.body;

        return ret;
    }
    throw new Error("AstroBox.network.fetch not available");
}