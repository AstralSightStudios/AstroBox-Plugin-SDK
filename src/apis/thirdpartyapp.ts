export interface ThirdPartyApp {
    launchQA(appInfo: AppInfo, pageName: string): Promise<void>;
    getThirdPartyAppList(): Promise<AppInfo[]>;
}

export interface AppInfo {
    package_name: string;
    fingerprint: number[];
    version_code: number;
    can_remove: boolean;
    app_name: string;
}