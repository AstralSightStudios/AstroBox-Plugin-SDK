export interface Interconnect {
    sendQAICMessage(pkgName: string, data: string): Promise<void>;
}