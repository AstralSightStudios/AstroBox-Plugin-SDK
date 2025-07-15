export interface Debug {
    sendRaw(data: Uint8Array): Promise<void>;
}