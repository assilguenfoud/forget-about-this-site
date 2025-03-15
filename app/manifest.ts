import * as iconImage from "./icons/icon.png";

const manifest = {
  manifest_version: 3,
  name: "__MSG_extensionName__",
  description: "__MSG_extensionDescription__",
  version: process.env.npm_package_version,
  homepage_url: process.env.npm_package_homepage,
  default_locale: "en",
  permissions: [
    "activeTab",
    "tabs",
    "browsingData",
    "downloads",
    "history",
    "storage",
    "notifications",
    "scripting",
  ],
  background: {
    scripts: undefined,
    service_worker: "/background.js",
  },
  browser_specific_settings: undefined,
  icons: {
    256: iconImage,
  },
  action: {
    default_icon: iconImage,
    browser_style: undefined,
  },
  options_ui: {
    page: "/options.html",
    browser_style: undefined,
    open_in_tab: true
  },
  commands: {
    _execute_action: {
      suggested_key: {
        default: "Ctrl+Shift+X",
      }, },
  },
};

if (process.env.BROWSER === "firefox") {
  manifest.browser_specific_settings = {
    gecko: {
      id: `${process.env.npm_package_name}@blaise.io`, },
  };
  manifest.background = {
    scripts: ["background.js"],
    service_worker: undefined,
  },
  manifest.options_ui.browser_style = false;
  manifest.action.browser_style = false;
}

module.exports = JSON.stringify(manifest, null, 2);
