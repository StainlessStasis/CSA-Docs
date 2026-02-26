---
sidebar_position: 2
slug: /config/server/default-options
description: "Compare your own config to the default if you're experiencing issues."
---

# Default Config Options
```json
{
  "comment": [
    "This config is only used if you are in singleplayer or hosting a server (including LAN).",
    "It determines which Pokemon are sent to all players, sending info about those Pokemon to clients.",
    "It does NOT determine how each individual client displays the data sent from the server. Each client is responsible for displaying its own alerts.",
    "For documentation on using the config, please see the Modrinth or GitHub for the mod.",
    "https://modrinth.com/mod/cobblemon-spawn-alerts",
    "https://github.com/StainlessStasis/CobblemonSpawnAlerts"
  ],
  "enableSpawnCommandAlerts": false,
  "alertShinies": true,
  "broadcastShiny": true,
  "alertLegendaries": true,
  "alertMythicals": true,
  "alertUltraBeasts": true,
  "alertParadox": true,
  "alertStarters": false,
  "alertHiddenAbility": false,
  "bucketsToAlert": [
    "ULTRA_RARE"
  ],
  "broadcastBucket": true,
  "broadcastIVs": true,
  "broadcastEVs": true,
  "broadcastNature": true,
  "broadcastAbility": true
}
```