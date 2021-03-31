(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{405:function(e,i,o){"use strict";o.r(i);var t=o(25),r=Object(t.a)({},(function(){var e=this,i=e.$createElement,o=e._self._c||i;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"explaining-the-patches-in-opencore-legacy-patcher"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#explaining-the-patches-in-opencore-legacy-patcher"}},[e._v("#")]),e._v(" Explaining the patches in OpenCore Legacy Patcher")]),e._v(" "),o("p",[e._v("In our patcher, there are numerous patches used to ensure a stable system. Here we're going to go over what patches are used and why we recommend or even require them.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#opencore-settings"}},[e._v("OpenCore Settings")])])]),e._v(" "),o("h2",{attrs:{id:"opencore-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#opencore-settings"}},[e._v("#")]),e._v(" OpenCore Settings")]),e._v(" "),o("h3",{attrs:{id:"acpi-patch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#acpi-patch"}},[e._v("#")]),e._v(" ACPI -> Patch")]),e._v(" "),o("ul",[o("li",[e._v("EHCx and XHC1 Patches\n"),o("ul",[o("li",[e._v("Reason: Required for proper USB operation")]),e._v(" "),o("li",[e._v("Logic: Avoids USB maps of newer models attaching and breaking USB port functionality")]),e._v(" "),o("li",[e._v("Models: All models require")])])])]),e._v(" "),o("h3",{attrs:{id:"booter-quirks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#booter-quirks"}},[e._v("#")]),e._v(" Booter -> Quirks")]),e._v(" "),o("ul",[o("li",[e._v("ForceBooterSignature\n"),o("ul",[o("li",[e._v("Reason: Required to ensure Hibernation support")]),e._v(" "),o("li",[e._v("Logic: Tricks boot.efi into thinking OpenCore is Apple's firmware")]),e._v(" "),o("li",[e._v("Models: All models require")])])])]),e._v(" "),o("h3",{attrs:{id:"deviceproperties-add"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deviceproperties-add"}},[e._v("#")]),e._v(" DeviceProperties -> Add")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("PciRoot(0x0)/Pci(0x15,0x0)/Pci(0x0,0x0)")])]),e._v(" "),o("li",[o("code",[e._v("PciRoot(0x0)/Pci(0x1C,0x4)/Pci(0x0,0x0)")])]),e._v(" "),o("li",[o("code",[e._v("PciRoot(0x0)/Pci(0x1C,0x3)/Pci(0x0,0x0)")])]),e._v(" "),o("li",[o("code",[e._v("PciRoot(0x0)/Pci(0x1C,0x5)/Pci(0x0,0x0)")])]),e._v(" "),o("li",[o("code",[e._v("PciRoot(0x0)/Pci(0x1C,0x1)/Pci(0x0,0x0)")]),e._v(" "),o("ul",[o("li",[e._v("Reason: Required to ensure Wifi works with full, native support")]),e._v(" "),o("li",[e._v("Logic: Tricks AirPortBrcmNIC.kext into thinking our device is a BCM94360 ("),o("code",[e._v("14e4,43ba")]),e._v(")")]),e._v(" "),o("li",[e._v("Models: Machines with BCM943224 and BCM94331 chipsets")])])]),e._v(" "),o("li",[o("code",[e._v("PciRoot(0x0)/Pci(0x3,0x0)/Pci(0x0,0x0)")])]),e._v(" "),o("li",[o("code",[e._v("PciRoot(0x0)/Pci(0x1,0x0)/Pci(0x0,0x0)")]),e._v(" "),o("ul",[o("li",[e._v("Reason: Required to ensure Brightness Control works on upgraded iMacs")]),e._v(" "),o("li",[e._v("Logic: Sets AppleBackLight properties")]),e._v(" "),o("li",[e._v("Models: iMac11,x and iMac12,x with upgraded Nvidia Metal GPUs")])])]),e._v(" "),o("li",[o("code",[e._v("PciRoot(0x0)/Pci(0x2,0x0)")]),e._v(" "),o("ul",[o("li",[e._v("Reason: Disables internal GPU to fix sleep issues on upgrades iMacs")]),e._v(" "),o("li",[e._v("Logic: Tricks macOS into thinking iGPU is a generic PCI device")]),e._v(" "),o("li",[e._v("Models: iMac12,x with upgraded Metal GPUs")])])])]),e._v(" "),o("h3",{attrs:{id:"kernel-patch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#kernel-patch"}},[e._v("#")]),e._v(" Kernel -> Patch")]),e._v(" "),o("ul",[o("li",[e._v("SMC Patch\n"),o("ul",[o("li",[e._v("Reason: Required to avoid SMC Firmware updates")]),e._v(" "),o("li",[e._v("Logic: Patches out "),o("code",[e._v("smc-version")]),e._v(" in AppleSMC.kext, requires SMC-Spoof.kext for full functionality")]),e._v(" "),o("li",[e._v("Models: All models require")])])]),e._v(" "),o("li",[e._v("IOHIDFamily Patch\n"),o("ul",[o("li",[e._v("Reason: Required for HID peripheral support in macOS on older hardware")]),e._v(" "),o("li",[e._v("Logic: Tricks IOHIDFamily into thinking it's always booting recovery")]),e._v(" "),o("li",[e._v("Models: "),o("a",{attrs:{href:"https://github.com/dortania/OpenCore-Legacy-Patcher/blob/79ab028b0a039e97a528e0b99c876d95d9c2d41d/Resources/ModelArray.py#L310-L332",target:"_blank",rel:"noopener noreferrer"}},[e._v("2010 and older"),o("OutboundLink")],1)])])])]),e._v(" "),o("h3",{attrs:{id:"kernel-quirks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#kernel-quirks"}},[e._v("#")]),e._v(" Kernel -> Quirks")]),e._v(" "),o("ul",[o("li",[e._v("ThridPartyDrives\n"),o("ul",[o("li",[e._v("Reason: Required to avoid Hibernation wake issues on 3rd party drives")]),e._v(" "),o("li",[e._v("Logic: Patches AppleAHCIPort.kext into support")]),e._v(" "),o("li",[e._v("Models: All models with standard SATA ports")])])]),e._v(" "),o("li",[e._v("PanicNoKextDump\n"),o("ul",[o("li",[e._v("Reason: Avoids kext dump on kernel panics, easier kernel debugging")]),e._v(" "),o("li",[e._v("Logic: Patches Kernel to not dump dump unnecessary info")]),e._v(" "),o("li",[e._v("Models: Only set when Verbose Boot is enabled by the user")])])])]),e._v(" "),o("h3",{attrs:{id:"misc-security"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#misc-security"}},[e._v("#")]),e._v(" Misc -> Security")]),e._v(" "),o("ul",[o("li",[e._v("SecureBootModel\n"),o("ul",[o("li",[e._v("Reason: Required to ensure seamless OS updates with Big Sur")]),e._v(" "),o("li",[e._v("Logic: Sets iMacPro1,1's Secure Enclave Identifier (j137)")]),e._v(" "),o("li",[e._v("Models: All models require")])])])]),e._v(" "),o("h3",{attrs:{id:"nvram-add"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nvram-add"}},[e._v("#")]),e._v(" NVRAM -> Add")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("-v debug=0x100")]),e._v(" "),o("ul",[o("li",[e._v("Reason: Used to see debug info of macOS's kernel and kexts, and avoids reboots on panic")]),e._v(" "),o("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),o("li",[e._v("Models: Only set when Verbose Boot is enabled by the user")])])]),e._v(" "),o("li",[o("code",[e._v("-liludbgall")]),e._v(" "),o("ul",[o("li",[e._v("Reason: Enables Lilu and plugin debug logging")]),e._v(" "),o("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),o("li",[e._v("Models: Only set when Kext DEBUG is enabled by the user")])])]),e._v(" "),o("li",[o("code",[e._v("msgbuf=1048576")]),e._v(" "),o("ul",[o("li",[e._v("Reason: Sets message buffer size to 1MB, ensures boot logs are retained")]),e._v(" "),o("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),o("li",[e._v("Models: Only set when Kext DEBUG is enabled by the user")])])]),e._v(" "),o("li",[o("code",[e._v("agdpmod=pikera")]),e._v(" "),o("ul",[o("li",[e._v("Reason: Fixes GPU switching on MacBookPro9,x")]),e._v(" "),o("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),o("li",[e._v("Models: MacBookPro9,x")])])]),e._v(" "),o("li",[o("code",[e._v("shikigva=80 unfairgva=1")])]),e._v(" "),o("li",[o("code",[e._v("shikigva=128 unfairgva=1 -wegtree")]),e._v(" "),o("ul",[o("li",[e._v("Reason: Fixes DRM support on models with upgraded AMD Metal GPUs")]),e._v(" "),o("li",[e._v("Logic: Adds args to NVRAM")]),e._v(" "),o("li",[e._v("Models: Models with upgraded AMD Metal GPUs")])])])]),e._v(" "),o("h3",{attrs:{id:"uefi-protocoloverrides"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#uefi-protocoloverrides"}},[e._v("#")]),e._v(" UEFI -> ProtocolOverrides")]),e._v(" "),o("ul",[o("li",[e._v("GopPassThrough\n"),o("ul",[o("li",[e._v("Reason: Used for proper output on machines with UGA firmware but GOP GPU")]),e._v(" "),o("li",[e._v("Logic: Provide GOP protocol instances on top of UGA protocol instances")]),e._v(" "),o("li",[e._v("Models: MacPro3,1, MacBook4,1 iMac7,1-8,1")])])])]),e._v(" "),o("h2",{attrs:{id:"injected-kext"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#injected-kext"}},[e._v("#")]),e._v(" Injected Kext")]),e._v(" "),o("h3",{attrs:{id:"acidanthera"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#acidanthera"}},[e._v("#")]),e._v(" Acidanthera")]),e._v(" "),o("ul",[o("li",[e._v("Lilu\n"),o("ul",[o("li",[e._v("Reason: Patching engine for other kexts")]),e._v(" "),o("li",[e._v("Models: All models require")])])]),e._v(" "),o("li",[e._v("WhateverGreen\n"),o("ul",[o("li",[e._v("Reason: Patches GPU Frameworks and kext to ensure proper support")]),e._v(" "),o("li",[e._v("Models: All models require")])])]),e._v(" "),o("li",[e._v("CPUFriend\n"),o("ul",[o("li",[e._v("Reason: Patches IOx86PlatformPlugin to restore previous CPU profiles")]),e._v(" "),o("li",[e._v("Models: 2012 and newer models")])])]),e._v(" "),o("li",[e._v("AirportBrcmFixup\n"),o("ul",[o("li",[e._v("Reason: Patches IO80211 and co to fix networking support for unsupported cards")]),e._v(" "),o("li",[e._v("Models: BCM943224 and BCM94331")])])]),e._v(" "),o("li",[e._v("RestrictEvents\n"),o("ul",[o("li",[e._v("Reason: Disables memory errors on MacPro7,1")]),e._v(" "),o("li",[e._v("Models: Mac Pros and Xserves")])])])]),e._v(" "),o("h3",{attrs:{id:"audio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#audio"}},[e._v("#")]),e._v(" Audio")]),e._v(" "),o("ul",[o("li",[e._v("VoodooHDA\n"),o("ul",[o("li",[e._v("Reason: Attempts to add audio support for pre-2012 hardware")]),e._v(" "),o("li",[e._v("Models: 2011 and older")])])])]),e._v(" "),o("h3",{attrs:{id:"ethernet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ethernet"}},[e._v("#")]),e._v(" Ethernet")]),e._v(" "),o("ul",[o("li",[e._v("nForceEthernet\n"),o("ul",[o("li",[e._v("Reason: Inject old Nvidia Ethernet kext to resolve networking in Catalina and newer")]),e._v(" "),o("li",[e._v("Models: 2010 and older Nvidia Ethernet require")])])]),e._v(" "),o("li",[e._v("MarvelYukonEthernet\n"),o("ul",[o("li",[e._v("Reason: Inject old Marvel Ethernet kext to resolve networking in Catalina and newer")]),e._v(" "),o("li",[e._v("Models: 2008 and older Marvel Ethernet require")])])]),e._v(" "),o("li",[e._v("CatalinaBCM5701Ethernet\n"),o("ul",[o("li",[e._v("Reason: Inject old Broadcom Ethernet kext to resolve networking in Big Sur")]),e._v(" "),o("li",[e._v("Logic: Patch out conflicting symbols to not colide existing BCM5701Ethernet")]),e._v(" "),o("li",[e._v("Models: 2011 and older Broadcom Ethernet require")])])])]),e._v(" "),o("h3",{attrs:{id:"maps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#maps"}},[e._v("#")]),e._v(" Maps")]),e._v(" "),o("ul",[o("li",[e._v("USBMap\n"),o("ul",[o("li",[e._v("Reason: Inject old USB map profiles to fix USB")]),e._v(" "),o("li",[e._v("Models: All models require")])])])]),e._v(" "),o("h3",{attrs:{id:"sse"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sse"}},[e._v("#")]),e._v(" SSE")]),e._v(" "),o("ul",[o("li",[e._v("AAMouSSE\n"),o("ul",[o("li",[e._v("Reason: Translates SSE4.2 instructions to compatible code for SSE4,1 CPUs, required for AMD Metal drives")]),e._v(" "),o("li",[e._v("Models: MacPro3,1")])])]),e._v(" "),o("li",[e._v("telemetrap\n"),o("ul",[o("li",[e._v("Reason: Ensures temelemtry.plugin doesn't run, required for SSE4,1 CPUs")]),e._v(" "),o("li",[e._v("Models: Penryn CPUs")])])])]),e._v(" "),o("h3",{attrs:{id:"wifi"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wifi"}},[e._v("#")]),e._v(" Wifi")]),e._v(" "),o("ul",[o("li",[e._v("IO80211HighSierra\n"),o("ul",[o("li",[e._v("Reason: Re-inject Atheros wifi drivers from High Sierra")]),e._v(" "),o("li",[e._v("Logic: Patch out conflicting symbols to not colide existing IO80211Family")]),e._v(" "),o("li",[e._v("Models: Atheros cards")])])]),e._v(" "),o("li",[e._v("IO80211Mojave\n"),o("ul",[o("li",[e._v("Reason: Re-inject Broadcom wifi drivers from Mojave")]),e._v(" "),o("li",[e._v("Logic: Patch out conflicting symbols to not colide existing IO80211Family")]),e._v(" "),o("li",[e._v("Models: BCM94322")])])])]),e._v(" "),o("h3",{attrs:{id:"misc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[e._v("#")]),e._v(" Misc")]),e._v(" "),o("ul",[o("li",[e._v("AppleBackLightFixup\n"),o("ul",[o("li",[e._v("Reason: Patch AppleBacklight for iMacs with Nvidia Metal GPU upgrades")]),e._v(" "),o("li",[e._v("Models: iMac11,x, iMac12,x with upgraded Nvidia Metal GPUs")])])]),e._v(" "),o("li",[e._v("AppleIntelPIIXATA\n"),o("ul",[o("li",[e._v("Reason: Fix IDE support on MacPro3,1")]),e._v(" "),o("li",[e._v("Models: MacPro3,1")])])]),e._v(" "),o("li",[e._v("AppleIntelMCEDisabler\n"),o("ul",[o("li",[e._v("Reason: Fix dual socket support in Catalina and newer")]),e._v(" "),o("li",[e._v("Models: Mac Pros and Xserves")])])]),e._v(" "),o("li",[e._v("NightShiftEnabler\n"),o("ul",[o("li",[e._v("Reason: Enables NightShift support on unsupported models")]),e._v(" "),o("li",[e._v("Models: 2011 and older, MacBookPro9,x included")])])]),e._v(" "),o("li",[e._v("SMC-Spoof\n"),o("ul",[o("li",[e._v("Reason: Spoofs SMC version to 9.9999")]),e._v(" "),o("li",[e._v("Models: All models require")])])])])])}),[],!1,null,null,null);i.default=r.exports}}]);