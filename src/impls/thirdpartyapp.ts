import { AppInfo } from "../apis/thirdpartyapp.js";

export async function launchQA(appInfo: AppInfo, pageName: string): Promise<void> {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.thirdpartyapp?.launchQA === "function") {
        // @ts-ignore
        await globalThis.AstroBox.thirdpartyapp.launchQA(
            JSON.stringify(appInfo),
            pageName
        );
    } else {
        throw new Error("AstroBox.thirdpartyapp.launchQA not available");
    }
}

export async function getThirdPartyAppList(): Promise<AppInfo[]> {
    // @ts-ignore
    if (
        // @ts-ignore
        typeof globalThis.AstroBox?.thirdpartyapp?.getThirdPartyAppList ===
        "function"
    ) {
        // @ts-ignore
        const raw = await globalThis.AstroBox.thirdpartyapp.getThirdPartyAppList();
        return JSON.parse(raw);
    }
    throw new Error("AstroBox.thirdpartyapp.getThirdPartyAppList not available");
}