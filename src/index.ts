import { initApis } from "./init.js";
import type { Lifecycle } from "./apis/lifecycle.js";
import type { Config } from "./apis/config.js";
import type { Device } from "./apis/device.js";
import type { Debug } from "./apis/debug.js";
import type { Event } from "./apis/event.js";
import type { Installer } from "./apis/installer.js";
import type { Interconnect } from "./apis/interconnect.js";
import type { Native } from "./apis/native.js";
import type { Network } from "./apis/network.js";
import type { Provider } from "./apis/provider.js";
import type { ThirdPartyApp } from "./apis/thirdpartyapp.js";
import type { UI } from "./apis/ui.js";
import type { FileSystem } from "./apis/filesystem.js";

interface AstroBoxSDK {
  lifecycle: Lifecycle;
  config: Config;
  debug: Debug;
  device: Device;
  event: Event;
  installer: Installer;
  interconnect: Interconnect;
  native: Native;
  network: Network;
  provider: Provider;
  thirdpartyapp: ThirdPartyApp;
  ui: UI;
  filesystem: FileSystem;
}

const AstroBox = {} as AstroBoxSDK;
initApis(AstroBox);

export default AstroBox;