import { FetchOptions, FetchResponse } from "../apis/network.js";
import { base64ToUint8Array, uint8ArrayToBase64 } from "../utils.js";

export async function fetch(
    url: string,
    options: FetchOptions
): Promise<FetchResponse> {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.network?.fetch === "function") {
        // @ts-ignore
        options.body = uint8ArrayToBase64(options.body)
        // @ts-ignore
        let ret = await globalThis.AstroBox.network.fetch(url, JSON.stringify(options));
        ret.body = base64ToUint8Array(ret.body);

        return ret;
    }
    throw new Error("AstroBox.network.fetch not available");
}