export interface Installer {
    addThirdPartyAppToQueue(filePath: string): void;
    addWatchFaceToQueue(filePath: string): void;
    addFirmwareToQueue(filePath: string): void;
}