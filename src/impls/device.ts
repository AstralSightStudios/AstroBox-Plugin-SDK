import { MiWearDeviceInfo, MiWearDeviceState } from "../apis/device.js";

export function getDeviceList(): Array<MiWearDeviceInfo> {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.device?.getDeviceList === "function") {
        // @ts-ignore
        return JSON.parse(globalThis.AstroBox.device.getDeviceList())
    } else {
        throw new Error('AstroBox.device.getDeviceList not available on native side');
    }
}

export function getDeviceState(addr: string): MiWearDeviceState {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.device?.getDeviceState === "function") {
        // @ts-ignore
        return JSON.parse(globalThis.AstroBox.device.getDeviceState(addr));
    }
    throw new Error("AstroBox.device.getDeviceState not available on native side");
}

export function modifyDeviceState(
    addr: string,
    state: MiWearDeviceState
): void {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.device?.modifyDeviceState === "function") {
        // @ts-ignore
        globalThis.AstroBox.device.modifyDeviceState(addr, JSON.stringify(state));
    } else {
        throw new Error(
            "AstroBox.device.modifyDeviceState not available on native side"
        );
    }
}

export async function disconnectDevice(): Promise<void> {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.device?.disconnectDevice === "function") {
        // @ts-ignore
        await globalThis.AstroBox.device.disconnectDevice();
    } else {
        throw new Error(
            "AstroBox.device.disconnectDevice not available on native side"
        );
    }
}