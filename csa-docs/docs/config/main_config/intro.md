---
sidebar_position: 1
slug: /config/main/about
description: "Everything regarding what the config does, and how to use it."
---

# About
### What does this config do?
The `main.json` config is used by the **client** to control a broad group of which Pokemon get alerted (e.g. legendaries).
It also contains any other miscellaneous settings, such as enabling debugging of alerts.

For alerting Pokemon by specific name or dex number, see [pokemon.json](../pokemon_config/intro.md).

### Config options
| Option              | Description                                                                                                                                                           |
|:--------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| configVersion       | **DO NOT EDIT**. Self-updating mod version, used mainly for support purposes right now. May be used in the future to notify users of important changes upon updating. |
| debug               | Enables debug messages in chat when an alert attempts to trigger.                                                                                                     |
| multiplayerWarning  | Shows a warning message in chat when joining a server.                                                                                                                |
| enableAlerts        | Enables all alerts, excluding despawns.                                                                                                                               |
| enableDespawnAlerts | Enables alert messages for when an alerted Pokemon despawns. Limited to Pokemon which have been **globally alerted**, thus requiring the mod to be on the server.     |
| enableSounds        | Enables all custom sounds defined for the alerts. For dertails on adding your own sounds, [click here](../../customization/sounds).                                   |
| alertAllShinies     | Alerts when any shiny spawns, unless `alertShiny` is disabled in its config.                                                                                          |
| alertAllHA          | Alerts when any Pokemon with a hidden ability spawns, unless `alertHiddenAbility` is disabled in its config.                                                          |
| alertAllLegendaries | Alerts when any Legendary Pokemon spawns.                                                                                                                             |
| alertAllMythicals   | Alerts when any Mythical Pokemon spawns.                                                                                                                              |
| alertAllUltraBeasts | Alerts when any Ultra Beast Pokemon spawns.                                                                                                                           |
| alertAllParadox     | Alerts when any Paradox Pokemon spawns.                                                                                                                               |
| alertAllStarter     | Alerts when any starter Pokemon spawns.                                                                                                                               |
| alertAllNotInDex    | Alerts when any Pokemon which is not already registered in your Pokedex spawns.                                                                                       |
| alertAllUncaught    | Alerts when any uncaught Pokemon spawns.                                                                                                                              |
| alertEverything     | Alerts *every* Pokemon that spawns. Useful for debugging.                                                                                                             |
| bucketsToAlert      | A list of buckets to alert spawns from. E.g. `"ULTRA_RARE", "RARE"`. Requires the server to broadcast the bucket to clients.                                          |                                                      |
| Level filter        | Specifies min and max Pokemon levels for triggering alerts.                                                                                                           |
| Distance filter     | Specifies min and max distance (in blocks) to the Pokemon for triggering alerts.                                                                                      |
:::warning Important
When something like **alertAllLegendaries** is enabled, it does not necessarily mean all legendaries across the entire server.
If the server you're on does not have CSA installed, or has disabled global alerts for that group of Pokemon, then alerts
will be limited to entities in your client's tracking range.

**Level & Distance filters** apply to all configs in `pokemon.json`.
:::

### IV & EV hunting
:::info
IV hunting:<br />
**requireAllMinimumsMet**:  Requires all the specified minimum stats to be met for an alert to trigger. 
For example, say minHp and minAtk are both set to 20, and a Pokemon spawns with 25 hp but only 10 atk. 
If this is enabled, then an alert will NOT trigger, since both conditions aren't met. 
If this is disabled, however, an alert will trigger since at least one of the conditions is met.<br />
**minPerfectIVs**: Requires at least x perfect IVs (a perfect IV is 31) to trigger an alert.

EV hunting does not have the same level of control since it is intended to be used for EV training. If any of the
`min` conditions are met, it will trigger an alert.

Any value set to 0 will be ignored when determining whether to alert.
:::