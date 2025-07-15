import { PluginUINode } from "../apis/ui.js";

// @ts-ignore
function call(name: keyof typeof globalThis.AstroBox.ui, arg: any) {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.ui?.[name] === "function") {
        // @ts-ignore
        globalThis.AstroBox.ui[name](arg);
    } else {
        // @ts-ignore
        throw new Error(`AstroBox.ui.${name} not available`);
    }
}

export const updatePluginSettingsUI = (ui: PluginUINode[]) =>
    call("updatePluginSettingsUI", JSON.stringify(ui));

export const openPageWithNodes = (ui: PluginUINode[]) =>
    call("openPageWithNodes", JSON.stringify(ui));

export const openPageWithUrl = (url: string) =>
    call("openPageWithUrl", url);