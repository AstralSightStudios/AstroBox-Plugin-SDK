export interface FileSystem {
    pickFile(): Promise<PickFileReturn>;
    pickTextFile(): Promise<PickTextFileReturn>;
}

export interface PickFileReturn {
    path: string;
    size: number;
    content: Uint8Array;
}

export interface PickTextFileReturn {
    path: string;
    size: number;
    content: string;
}