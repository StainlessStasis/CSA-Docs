---
sidebar_position: 1
slug: /config/
---

# Getting Started
### Preliminary
Modifying the configs requires a basic understanding of JSON. When editing configs, keep the following in mind:
- Watch for simple mistakes such as missing commas, quotes, brackets, etc. Be especially careful when *adding* to the config 
(e.g. adding a new group of Pokemon in `pokemon.json`).
- If your configs are erroring when reloaded, use an [online tool](https://jsonformatter.org/)
to validate it and debug errors.

### General config information
The easiest way to locate your config files is to run the command `/csa openconfig`. Config files are found in your Minecraft instance
in `config/cobblemon-spawn-alerts`.

Configs will automatically update to newer versions, and merge new content with the existing config. 
:::warning
**Always make backups** before updating! New versions can be unstable, and without a backup, there is no
guarantee that downgrading to a previous version will work.
:::

### Types of Configs
Configs are categorized as **client** or **common**.<br />
:::info Client Configs
These configs exist only on your client. They affect **what** your client alerts, and **how** those alerts are displayed. <br />
The 3 client configs are: 
* [main.json](main_config/intro.md) - Used for alerting Pokemon based on group (e.g. legendary), and other miscellaneous settings.
* [pokemon.json](pokemon_config/intro.md) - Used for fine-grained control over exactly which Pokemon get alerted and what information the alerts display.
Also is used for custom alert messages, sounds, and waypoints.
* [message_templates.json](message_templates/intro.md) - Used to customize the formatting of alerts that applies more broadly
to all alerts, such as default spawn messages or [dynamic replacements](../customization/content/dynamic_replacements.md).
:::

:::info Common Configs
These configs exist both on clients and servers. They affect what information is **known** about a Pokemon. <br />
The 2 common configs are:
* [server.json](server_config/intro.md) - Used by *any* server, which can be a dedicated server, LAN, or even singleplayer.
Controls data about Pokemon which is sent to clients, such as global alerts and spawn buckets.
* [rarities.json](rarities_config/intro.md) (1.12.0+) - Used to specify which Pokemon are considered legendary, starter, etc.
The server only uses this config for starter Pokemon. Clients use the entire config.
:::

### Reloading Configs
Configs can be reloaded while the game is running. They will **NOT** automatically reload when entering a world.

Client configs use the `/csa reload` command.

Common configs use the `/csa-common reload` command. For versions prior to 1.12.0, use `/csa-server reload` instead.<br />
Reloading the common configs requires level 3 operator permissions (unless in singleplayer).
