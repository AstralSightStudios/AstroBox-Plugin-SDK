// @ts-ignore
function call(name: keyof typeof globalThis.AstroBox.installer, file: string) {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.installer?.[name] === "function") {
        // @ts-ignore
        globalThis.AstroBox.installer[name](file);
    } else {
        // @ts-ignore
        throw new Error(`AstroBox.installer.${name} not available`);
    }
}

export const addThirdPartyAppToQueue = (f: string) =>
    call("addThirdPartyAppToQueue", f);
export const addWatchFaceToQueue = (f: string) =>
    call("addWatchFaceToQueue", f);
export const addFirmwareToQueue = (f: string) =>
    call("addFirmwareToQueue", f);