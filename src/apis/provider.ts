export interface Provider {
    registerCommunityProvider(provider: JSPluginProvider): Promise<void>;
}

export interface JSPluginProvider {
    name: string;
    plugin_name: string;
    fn_get_page: string;
    fn_get_item: string;
    fn_download: string;
}