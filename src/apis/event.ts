export interface Event {
    addEventListener<T>(
        eventName: string,
        callback: (payload: T) => void
    ): void;
    removeEventListener(eventName: string): void;
    sendEvent(eventName: string, payload: any): void;
}