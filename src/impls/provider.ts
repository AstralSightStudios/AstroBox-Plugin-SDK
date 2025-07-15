import { JSPluginProvider } from "../apis/provider.js";

export async function registerCommunityProvider(provider: JSPluginProvider): Promise<void> {
    // @ts-ignore
    if (
        // @ts-ignore
        typeof globalThis.AstroBox?.provider?.registerCommunityProvider ===
        "function"
    ) {
        // @ts-ignore
        await globalThis.AstroBox.provider.registerCommunityProvider(JSON.stringify(provider));
    } else {
        throw new Error("AstroBox.provider.registerCommunityProvider not available");
    }
}