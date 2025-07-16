import * as configImpl from "./impls/config.js";
import * as debugImpl from "./impls/debug.js";
import * as deviceImpl from "./impls/device.js";
import * as eventImpl from "./impls/event.js";
import * as installerImpl from "./impls/installer.js";
import * as interconnectImpl from "./impls/interconnect.js";
import * as lifecycleImpl from "./impls/lifecycle.js";
import * as nativeImpl from "./impls/native.js";
import * as networkImpl from "./impls/network.js";
import * as providerImpl from "./impls/provider.js";
import * as thirdpartyImpl from "./impls/thirdpartyapp.js";
import * as uiImpl from "./impls/ui.js";
import * as filesystemImpl from "./impls/filesystem.js";

export function initApis(AstroBox) {
    // Config APIs
    AstroBox.config = {};
    AstroBox.config.readConfig = configImpl.read;
    AstroBox.config.writeConfig = configImpl.write;
    // Debug APIs
    AstroBox.debug = {};
    AstroBox.debug.sendRaw = debugImpl.sendRaw;
    // Device APIs
    AstroBox.device = {};
    AstroBox.device.getDeviceList = deviceImpl.getDeviceList;
    AstroBox.device.getDeviceState = deviceImpl.getDeviceState;
    AstroBox.device.modifyDeviceState = deviceImpl.modifyDeviceState;
    AstroBox.device.disconnectDevice = deviceImpl.disconnectDevice;

    // Event APIs
    AstroBox.event = {};
    AstroBox.event.addEventListener = eventImpl.addEventListener;
    AstroBox.event.removeEventListener = eventImpl.removeEventListener;
    AstroBox.event.sendEvent = eventImpl.sendEvent;

    // Installer APIs
    AstroBox.installer = {};
    AstroBox.installer.addThirdPartyAppToQueue = installerImpl.addThirdPartyAppToQueue;
    AstroBox.installer.addWatchFaceToQueue = installerImpl.addWatchFaceToQueue;
    AstroBox.installer.addFirmwareToQueue = installerImpl.addFirmwareToQueue;

    // Interconnect APIs
    AstroBox.interconnect = {};
    AstroBox.interconnect.sendQAICMessage = interconnectImpl.sendQAICMessage;

    // Lifecycle APIs
    AstroBox.lifecycle = {};
    AstroBox.lifecycle.onLoad = lifecycleImpl.onLoad;

    // Native APIs
    AstroBox.native = {};
    AstroBox.native.regNativeFun = nativeImpl.regNativeFun;

    // Network APIs
    AstroBox.network = {};
    AstroBox.network.fetch = networkImpl.fetch;

    // Provider APIs
    AstroBox.provider = {};
    AstroBox.provider.registerCommunityProvider = providerImpl.registerCommunityProvider;

    // Third-Party App APIs
    AstroBox.thirdpartyapp = {};
    AstroBox.thirdpartyapp.launchQA = thirdpartyImpl.launchQA;
    AstroBox.thirdpartyapp.getThirdPartyAppList = thirdpartyImpl.getThirdPartyAppList;

    // UI APIs
    AstroBox.ui = {};
    AstroBox.ui.updatePluginSettingsUI = uiImpl.updatePluginSettingsUI;
    AstroBox.ui.openPageWithNodes = uiImpl.openPageWithNodes;
    AstroBox.ui.openPageWithUrl = uiImpl.openPageWithUrl;

    // FileSystem APIs
    AstroBox.filesystem = {};
    AstroBox.filesystem.pickFile = filesystemImpl.pickFile;
    AstroBox.filesystem.statFile = filesystemImpl.statFile;
    AstroBox.filesystem.readFile = filesystemImpl.readFile;
}