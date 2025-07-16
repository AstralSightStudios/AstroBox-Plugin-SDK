export interface FileSystem {
    pickFile(options?: PickFileOptions): Promise<PickFileReturn>;
    pickTextFile(): Promise<PickTextFileReturn>;
}

export interface PickFileOptions {
    read_start: number;
    read_end: number;
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