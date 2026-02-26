---
sidebar_position: 1
slug: /config/pokemon/about
description: "Everything regarding what the config does, and how to use it."
---

# About
### What does this config do?
The `pokemon.json` config is used by the **client** to determine exactly which Pokemon (by name or dex number) are alerted. <br />
It is also used for displaying information about the Pokemon in conjunction [custom alert messages](../../customization/custom-alert-messages), 
as well as [custom sounds](../../customization/sounds), click events, and Journeymap waypoints.

For alerting broader groups of Pokemon (e.g. legendaries), see [main.json](../main_config/intro.md).

### How to use the config
Inside the `pokemonConfigs` object, you will find a default config named `default (You can...)`. 
You may freely edit anything **below** that line, beginning with `"enabled"`.
:::danger
**DO NOT** delete it.<br />
**DO NOT** edit the name of it.<br />
If you do either of these, **things will break**.
:::

These default options are used for alerting any Pokemon which you haven't manually specified a config for.

### Config options
| Option                    | Description                                                                                                                                                                                                                                                                                                                                                                                |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name                      | Each config object needs a name to specify the list of Pokemon it should target. See how the default config is formatted. You can list multiple Pokemon separated by commas (e.g. `"charmander, charmeleon, charizard"`). Names are not case-sensitive, and dex numbers are also valid (e.g. `"1, 2, 3"`).                                                                                 |
| configVersion             | **DO NOT EDIT**. Self-updating mod version, used mainly for support purposes right now. May be used in the future to notify users of important changes upon updating.                                                                                                                                                                                                                      |
| comment                   | A brief description of what the config does.                                                                                                                                                                                                                                                                                                                                               |
| enabled                   | Enables the spawn message for the Pokemon. If set to false, this setting will override every other config setting for the Pokemon and make its spawn message never display.                                                                                                                                                                                                                |
| alwaysAlert               | Always alerts, assuming `enabled` is true. If `alwaysAlert` is false, then an alert will only trigger for other conditions, such as `alertShiny`.                                                                                                                                                                                                                                          |
| alertShiny                | Triggers an alert if the Pokemon is shiny. Shiny Pokemon within your client's tracking range will always trigger this. Globally alerted Pokemon may not broadcast their shiny status to clients if `broadcastShiny` is disabled in the [server config](../server/about).                                                                                                                   |
| alertHiddenAbility        | Triggers an alert if the Pokemon has a hidden ability. Requires the [server config](../server/about) to have `broadcastAbility` enabled.                                                                                                                                                                                                                                                   |
| alertDespawned            | Triggers an alert when the Pokemon despawns. This requires the Pokemon to have been globally alerted. See the [known issues](../../about/known-issues) for more details.                                                                                                                                                                                                                   |
| showLegendary             | Shows in the alert message whether the Pokemon is Legendary, Mythical, Ultra Beast, or Paradox. Uses the [rarities.json](../rarities/about) config on versions 1.12.0+. For previous versions, these are hardcoded on the client.                                                                                                                                                          |
| showBucket                | Shows which spawn bucket (common, uncommon, rare, ultra-rare) the Pokemon spawned from. Requires the [server config](../server/about) to have `broadcastBucket` enabled.                                                                                                                                                                                                                   |
| statDisplayMods           | Defines which stats are shown in the alert, and how. The 3 options are: `"MAIN_MESSAGE"`, `"HOVER"`, and `"DISABLED"`. The following will not display without the server broadcasting them to clients: `ivs`, `nature`, and `ability`. EV yields (`evs`) may be inaccurate.                                                                                                                | 
| autoGlow                  | Makes the alerted Pokemon glow the same way the glowing potion effect does. Click the alert message to toggle the glow.                                                                                                                                                                                                                                                                    |
| glowColor                 | Sets the color of `autoGlow`. Does not work for manually applying glow. Formatted as #AARRGGBB (e.g. #FF00FFFF for cyan). You can use an [online tool](https://htmlcolorcodes.com/color-picker/) for creating colors. Alpha is required, but does not actually control the alpha of the glow.                                                                                              |
| customAlertMessage        | Overrides the default spawn message with a custom one. Supports [ETA markup](https://tysontheember.dev/embers-text-api/for-modpack-creators/markup-guide/) and [dynamic replacements](../../customization/dynamic-replacements). For more details, [click here](../../customization/custom-alert-messages).                                                                                |
| customAlertTooltip        | Overrides the default hover tooltip with a custom one. Supports [ETA markup](https://tysontheember.dev/embers-text-api/for-modpack-creators/markup-guide/) and [dynamic replacements](../../customization/dynamic-replacements).                                                                                                                                                           |
| customAlertClickEvent     | Overrides the default click event with a custom one. Supports [dynamic replacements](../../customization/dynamic-replacements). Formatted as `"event_name:action"` using the following events: `open_url`, `open_file`, `run_command`, `suggest_command`, `change_page`, and `copy_to_clipboard`. For example, `run_command:/csa openconfig` would open the config folder when clicked on. |
| sounds / customAlertSound | Plays a sound for the specified alert. Formatted as `namespace:path`. E.g. `minecraft:entity.warden.sonic_boom` or `cobblemon:pokemon.bidoof.cry`. For more details, [click here](../../customization/sounds).                                                                                                                                                                             |

:::warning Important
If you are using Pokemon's names for your configs, the names must be in the language you are playing Cobblemon with. 
Using dex numbers instead of names is recommended for sharing configs in multilingual communities.
:::

### Journeymap compatibility
When [Journeymap](https://modrinth.com/mod/journeymap) is installed, the following can be used to automatically manage waypoints for alerts:

| Option         | Description                                                                                                                                                               |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| enableWaypoint | Creates waypoints when an alert is triggered.                                                                                                                             |
| waypointName   | Sets the name of the waypoint, defaulting to the Pokemon's name if left blank.                                                                                            |
| waypointColor  | Sets the color of the waypoint. Formatted as #RRGGBB (e.g. #00FFFF for cyan). You can use an [online tool](https://htmlcolorcodes.com/color-picker/) for creating colors. |
| persistent     | Sets the waypoint to persist upon leaving/rejoining the world.                                                                                                            |