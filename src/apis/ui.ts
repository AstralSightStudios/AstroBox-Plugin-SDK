export interface PluginUIButton {
    primary: boolean;
    text: string;
    callback_fun_id: string;
}
export interface PluginUIDropdown {
    options: string[];
    callback_fun_id: string;
}
export interface PluginUIInput {
    text: string;
    callback_fun_id: string;
}
export type PluginUINodeContent =
    | { type: "Text"; value: string }
    | { type: "Button"; value: PluginUIButton }
    | { type: "Dropdown"; value: PluginUIDropdown }
    | { type: "Input"; value: PluginUIInput }
    | { type: "HtmlDocument"; value: string };

export interface PluginUINode {
    node_id: string;
    visibility: boolean;
    disabled: boolean;
    content: PluginUINodeContent;
}

export interface UI {
    updatePluginSettingsUI(ui: PluginUINode[]): void;
    openPageWithNodes(ui: PluginUINode[]): void;
    openPageWithUrl(url: string): void;
}