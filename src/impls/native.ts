export function regNativeFun(func: (...args: any[]) => any): string {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.native?.regNativeFun === "function") {
        // @ts-ignore
        return globalThis.AstroBox.native.regNativeFun(func);
    }
    throw new Error("AstroBox.native.regNativeFun not available");
}