---
sidebar_position: 1
slug: /configs/
---

# Getting Started
### Preliminary
Modifying the configs requires a basic understanding of JSON. I don't expect anyone to be an expert, though, so here's a few pointers:
- Watch for simple mistakes such as missing commas, quotes, brackets, etc. Be especially careful when *adding* to the config 
(e.g. adding a new group of Pokemon to alert in `pokemon.json`)
- If your configs are erroring when reloaded, use an [online tool](https://jsonformatter.org/)
to validate it and debug errors.

### General config information
The easiest way to locate your config files is to run the command `/csa openconfig`. Config files are found in your Minecraft instance
in `config/cobblemon-spawn-alerts`.

Configs are categorized as **client** or **common**.<br />
:::info Client Configs
These configs exist only on your client. They affect **what** your client alerts, and **how** those alerts are displayed. <br />
The 3 client configs are: [main.json](main_config/intro.md), [pokemon.json](pokemon_config/intro.md), and [message_templates.json](message_templates/intro.md)
:::