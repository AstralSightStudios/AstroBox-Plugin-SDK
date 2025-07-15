export function addEventListener<T>(
    eventName: string,
    callback: (payload: T) => void
): void {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.event?.addEventListener === "function") {
        // @ts-ignore
        globalThis.AstroBox.event.addEventListener(eventName, callback);
    } else {
        throw new Error("AstroBox.event.addEventListener not available");
    }
}

export function removeEventListener(eventName: string): void {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.event?.removeEventListener === "function") {
        // @ts-ignore
        globalThis.AstroBox.event.removeEventListener(eventName);
    } else {
        throw new Error("AstroBox.event.removeEventListener not available");
    }
}

export function sendEvent(eventName: string, payload: any): void {
    // @ts-ignore
    if (typeof globalThis.AstroBox?.event?.sendEvent === "function") {
        // @ts-ignore
        globalThis.AstroBox.event.sendEvent(eventName, payload);
    } else {
        throw new Error("AstroBox.event.sendEvent not available");
    }
}