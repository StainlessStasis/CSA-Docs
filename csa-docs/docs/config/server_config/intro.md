---
sidebar_position: 1
slug: /config/server/about
description: "Everything regarding what the config does, and how to use it."
---

# About
### What does this config do?
The `server.json` config is used by the **server** (dedicated server, LAN, singleplayer) to broadcast information about Pokemon to players.
Here, server owners can control what they want their players to have access to regarding alerts. This includes global alerts as well.

### Config options
| Option                   | Description                                                                                                                                                 |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| configVersion            | **DO NOT EDIT**. Self-updating mod version - used to notify of important changes when updating the mod.                                                     |
| enableSpawnCommandAlerts | Enables alerts for Pokemon spawned via commands. **NOT RECOMMENDED** to enable. Please see the full warning below this table.                               |
| alertShinies             | Sends all shiniy Pokemon spawned on the server to all players.                                                                                              |
| alertLegendaries         | Sends all Legendary Pokemon spawned on the server to all players.                                                                                           |
| alertMythicals           | Sends all Mythical Pokemon spawned on the server to all players.                                                                                            |
| alertUltraBeasts         | Sends all Ultra Beast Pokemon spawned on the server to all players.                                                                                         |
| alertParadox             | Sends all Paradox Pokemon spawned on the server to all players.                                                                                             |
| alertStarters            | Sends all starter Pokemon spawned on the server to all players.                                                                                             |
| alertHiddenAbility       | Sends all Pokemon with a hidden ability spawned on the server to all players.                                                                               |
| bucketsToAlert           | A list of spawn buckets: `"COMMON"`, `"UNCOMMON"`, `"RARE"`, and `"ULTRA_RARE"`. Sends all Pokemon on the server spawned from these buckets to all players. |
| broadcastBucket          | Provides players with which bucket the Pokemon spawned from.                                                                                                |
| broadcastShiny           | Provides players with whether the Pokemon is shiny.                                                                                                         |
| broadcastIVs             | Provides players with the Pokemon's IVs.                                                                                                                    |
| broadcastEVs             | Provides players with the Pokemon's EV yield.                                                                                                               |
| broadcastNature          | Provides players with the Pokemon's nature.                                                                                                                 |
| broadcastAbility         | Provides players with the Pokemon's ability.                                                                                                                |

:::danger
`enableSpawnCommandAlerts` **can break certain spawns**!<br />
Some Cobblemon addons use spawn commands and functions via datapack. Enabling this option **will break those spawns**.<br />
Even on a vanilla Cobblemon server, this option is recommended to be kept strictly to testing, outside a production environment.<br />
If you aren't absolutely certain about what you're doing, leave it disabled.
:::

:::info
The alert options here, also known as global alerts, do **not** directly send a chat message to players. They only send the necessary data about the spawned 
Pokemon for clients to make their own decision about whether to alert it, and how it should be displayed.

Also, disabling anything here will apply the same config to your singleplayer/LAN worlds.
:::
