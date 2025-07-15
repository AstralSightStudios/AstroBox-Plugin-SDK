export function onLoad(cb: () => void): void {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.lifecycle?.onLoad === "function") {
        // @ts-ignore
        globalThis.AstroBox.lifecycle.onLoad(cb);
    } else {
        throw new Error("AstroBox.lifecycle.onLoad not available");
    }
}