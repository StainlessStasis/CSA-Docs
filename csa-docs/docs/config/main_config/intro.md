---
sidebar_position: 1
---

# About
### What does this config do?
The `main.json` config is used by the **client** to control a broad group of which Pokemon get alerted.

### Config options
:::info Alerts
**enableAlerts**: Enables all alerts, excluding despawns.<br />
**enableDespawnAlerts**: Enables alert messages for when an alerted Pokemon despawns.<br />
**alertAllShinies**: Alerts when any shiny spawns, unless `alertShiny` is disabled in its config.<br />
**alertAllHA**: Alerts when any Pokemon with a hidden ability spawns, unless `alertHiddenAbility` is disabled in its config.<br />
**alertAllLegendaries**: Alerts when any legendary spawns.<br />
**alertAllMythicals**: Alerts when any mythical spawns.<br />
**alertAllUltraBeasts**: Alerts when any ultra beast spawns.<br />
**alertAllParadox**: Alerts when any paradox Pokemon spawns.<br />
**alertAllStarter**: Alerts when any starter spawns.<br />
**alertAllNotInDex**: Alerts when any Pokemon which is not already registered in your Pokedex spawns.<br />
**alertAllUncaught**: Alerts when any uncaught Pokemon spawns.<br />
**alertEverything**: Alerts every Pokemon that spawns.<br />
**bucketsToAlert**: A list of buckets to alert spawns from. E.g. `"ULTRA_RARE", "RARE"`.

**Level filter**: Allows setting min and max Pokemon levels for triggering alerts.<br />
**Distance filter**: Allows setting min and max distance (in blocks) from Pokemon for triggering alerts.
:::warning Important
**enableDespawnAlerts** Is limited to Pokemon which have been **globally alerted**, thus requiring the mod to be on the server.<br />
**bucketsToAlert** Requires the server to broadcast the bucket to clients.<br />
**Level & Distance filters** Apply to all configs in `pokemon.json`.
:::

:::info IV & EV hunting
**requireAllMinimumsMet**:  Requires all the specified minimum stats to be met for an alert to trigger. 
For example, say minHp and minAtk are both set to 20, and a Pokemon spawns with 25 hp but only 10 atk. 
If this is enabled, then an alert will NOT trigger, since both conditions aren't met. 
If this is disabled, however, an alert will trigger since at least one of the conditions is met.<br />
**minPerfectIVs**: Requires at least x perfect IVs (a perfect IV is 31) to trigger an alert.

EV hunting does not have the same level of control since it is intended to be used for EV training. If any of the
`min` conditions are met, it will trigger an alert.

Any value set to 0 will be ignored when determining whether to alert.
:::

:::info Misc.
**debug**: Enables debug messages in chat when an alert attempts to trigger.<br />
**multiplayerWarning**: Shows a warning message in chat when joining a server.<br />
:::