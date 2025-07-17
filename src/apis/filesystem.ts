export interface FileSystem {
    pickFile(options: PickFileOptions): Promise<PickFileReturn>;
    unloadFile(path: string): Promise<void>;
    readFile(path: string, options?: ReadFileOptions): Promise<Uint8Array | string>;
}

export interface PickFileReturn {
    path: string;
    size: number;
    text_len: number;
}

export interface StatFileReturn {
    size: number;
}

export interface ReadFileOptions {
    offset?: number;
    len: number;
    decode_text?: boolean;
}

export interface PickFileOptions {
    decode_text?: boolean;
    encoding?: string;
}