export interface Device {
    getDeviceList(): Array<MiWearDeviceInfo>;
    getDeviceState(addr: string): MiWearDeviceState;
    modifyDeviceState(addr: string, state: MiWearDeviceState): void;
    disconnectDevice(): Promise<void>;
}

export interface MiWearDeviceInfo {
    name: string;
    addr: string;
}

export interface MiWearDeviceState {
    name: string;
    addr: string;
    authkey: string;
    bleservice: MiWearBleCharaUuid;
    max_frame_size: number;
    sec_keys?: SecurityKeys | null;
    network_mtu: number;
    codename: string;
}

export interface MiWearBleCharaUuid {
    recv: string;
    sent: string;
}

export interface SecurityKeys {
    enc_key: Array<number>,
    dec_key: Array<number>,
    enc_nonce: Array<number>,
    dec_nonce: Array<number>
}