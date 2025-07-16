export interface FileSystem {
    pickFile(): Promise<PickFileReturn>;
}

export interface PickFileReturn {
    path: string;
    size: number;
    content: string;
}