export interface Native {
    regNativeFun(func: (...args: any[]) => any): string;
}