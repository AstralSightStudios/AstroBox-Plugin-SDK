export async function sendQAICMessage(
    pkgName: string,
    data: string
): Promise<void> {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.interconnect?.sendQAICMessage === "function") {
        // @ts-ignore
        await globalThis.AstroBox.interconnect.sendQAICMessage(pkgName, data);
    } else {
        throw new Error("AstroBox.interconnect.sendQAICMessage not available");
    }
}