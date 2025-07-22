export interface FetchOptions {
    method: string;
    headers: Record<string, string>;
    body?: Uint8Array | string;
    raw?: boolean;
}

// 原始响应体结构
interface BaseResponse {
    status: number;
    headers: Record<string, string>;
    contentType: string;
}

// 自动类型推断响应体
export type FetchResponse<T extends boolean> = BaseResponse & {
    body: T extends true ? Uint8Array : string;
};

// 泛型接口定义
export interface Network {
    fetch<T extends boolean>(url: string, options: FetchOptions & { raw: T }): Promise<FetchResponse<T>>;
}