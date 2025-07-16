export interface FileSystem {
    pickFile(): Promise<PickFileReturn>;
    statFile(path: string): Promise<StatFileReturn>;
    readFile(path: string, options?: ReadFileOptions): Promise<Uint8Array>;
}

export interface PickFileReturn {
    path: string;
    size: number;
}

export interface StatFileReturn {
    size: number;
}

export interface ReadFileOptions {
    offset: number;
    len: number;
    decode_text: boolean;
}