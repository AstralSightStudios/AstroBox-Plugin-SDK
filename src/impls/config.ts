export function read(): Object {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.config?.readConfig === "function") {
        // @ts-ignore
        return JSON.parse(globalThis.AstroBox.config.readConfig());
    } else {
        throw new Error('AstroBox.config.readConfig not available on native side');
    }
}

export function write(content: Object){
    // @ts-ignore
    if (typeof globalThis.AstroBox?.config?.writeConfig === "function") {
        // @ts-ignore
        globalThis.AstroBox.config.writeConfig(JSON.stringify(content));
    } else {
        throw new Error('AstroBox.config.writeConfig not available on native side');
    }
}