---
sidebar_position: 2
slug: /customization/dynamic-replacements
description: "Dynamically insert information into alert messages."
---

# Dynamic Replacements
### What are dynamic replacements used for?
Dynamic replacements are used as placeholder values for parts of messages. They can be combined to create your own custom messages
in [message templates](../../config/message_templates/intro.md) and [custom alert messages](custom_alert_messages.md).

Dynamic replacements are replaced with the value from [message_templates.json](../../config/message_templates/intro.md), which is then used to style the message and fill out the parameters
defined by the placeholder values.
:::info How it works
`{shiny}` -> fetch `"shiny"` value from `message_templates.json` -> receive markup `<c col=#78CBFF>Shiny </c>` -> replace `{shiny}`
with final markup `<c col=#78CBFF>Shiny </c>`

`{level}` -> fetch `"level"` value from `message_templates.json` -> receive translation key `"cobblemon-spawn-alerts.level"` <br />
-> fetch translation for key `"cobblemon-spawn-alerts.level"` -> receive markup `"<c col=#AAAAAA>(Lvl. %s) </c>"` ->
replace placeholder `%s` with level `5` -> replace `{level}` with final markup `"<c col=#AAAAAA>(Lvl. 5) </c>"`
:::

### Available options
| Options                                         | Description                                                                                                                                                                |
|:------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{name} {name_lower} {name_upper}`              | Inserts the Pokemon's name, translated to your selected language (if available in Cobblemon). Does not have a message template currently.                                  |
| `{legendary} {legendary_unformatted}`           | Inserts the Pokemon's rarity (Legendary, Mythical, Ultra Beast, Paradox) if `showLegendary` is enabled in its respective [config](../../config/pokemon_config/intro.md).   |
| `{shiny} {shiny_unformatted}`                   | Inserts a shiny message if the Pokemon is shiny and `alertShiny` is enabled in its respective [config](../../config/pokemon_config/intro.md).                              |
| `{HA} {HA_unformatted}`                         | Inserts a hidden ability message if the Pokemon has a hidden ability and `alertHiddenAbility` is enabled in its respective [config](../../config/pokemon_config/intro.md). |
| `{bucket} {bucket_unformatted}`                 | Inserts the bucket the Pokemon spawned from. *Note: this may display as N/A under certain conditions, such as Pokemon spawned via command.*                                |
| `{level} {level_unformatted}`                   | Inserts the Pokemon's level.                                                                                                                                               |
| `{ivs} {ivs_unformatted}`                       | Inserts the Pokemon's IVs (HP/ATK/DEF/SpATK/SpDEF/SPD).                                                                                                                    |
| `{evs} {evs_unformatted}`                       | Inserts the Pokemon's EV yield (HP/ATK/DEF/SpATK/SpDEF/SPD).                                                                                                               |
| `{nature} {nature_unformatted}`                 | Inserts the Pokemon's nature.                                                                                                                                              |
| `{ability} {ability_unformatted}`               | Inserts the Pokemon's ability.                                                                                                                                             |
| `{gender} {gender_unformatted}`                 | Inserts the Pokemon's gender.                                                                                                                                              |
| `{coords} {coords_unformatted}`                 | Inserts the Pokemon's coordinates (x/y/z).                                                                                                                                 |
| `{biome} {biome_unformatted}`                   | Inserts the Pokemon's biome.                                                                                                                                               |
| `{nearest_player} {nearest_player_unformatted}` | Inserts the nearest player to the Pokemon.                                                                                                                                 |
| `{despawned}`                                   | Inserts the Pokemon's despawn message (despawned, captured, fainted, died). Shouldn't be used outside of customizing the despawn message.                                  |

:::warning Important
If the server you're on does not have CSA installed, or has disabled broadcasting of certain information,
some dynamic replacements may produce unavailable or inaccurate information.
:::