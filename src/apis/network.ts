export interface FetchOptions {
    method: string;
    headers: Record<string, string>;
    body: Uint8Array;
}

export interface FetchResponse {
    status: number;
    headers: Record<string, string>;
    contentType: string;
    body: Uint8Array;
}

export interface Network {
    fetch(url: string, options: FetchOptions): Promise<FetchResponse>;
}