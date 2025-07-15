export interface FileSystem {
    pickFile(): PickFileReturn;
}

export interface PickFileReturn {
    path: string;
    size: number;
    content: string;
}