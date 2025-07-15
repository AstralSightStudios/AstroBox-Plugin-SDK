export interface Config {
    readConfig(): Object;
    writeConfig(content: Object): void;
}