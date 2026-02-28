---
sidebar_position: 3
slug: /config/pokemon/default-options
description: "Compare your own config to the default if you're experiencing issues."
---

# Default Config Options
```json
{
  "configVersion": "1.12.3",
  "comment": [
    "This config is only on your client. It determines which Pokemon are alerted, and how that alert is displayed.",
    "For details on using the config, please see the docs.",
    "https://stainlessstasis.github.io/CSA-Docs/config/"
  ],
  "pokemonConfigs": {
    "default (You can modify anything BELOW this, but dont delete it!)": {
      "enabled": true,
      "alwaysAlert": true,
      "alertShiny": true,
      "alertHiddenAbility": true,
      "alertDespawned": true,
      "showLegendary": true,
      "showBucket": true,
      "statDisplayModes": {
        "level": "MAIN_MESSAGE",
        "ivs": "DISABLED",
        "evs": "DISABLED",
        "nature": "DISABLED",
        "ability": "DISABLED",
        "gender": "HOVER",
        "coordinates": "HOVER",
        "biome": "MAIN_MESSAGE",
        "nearestPlayer": "DISABLED"
      },
      "customAlertMessage": "",
      "customAlertTooltip": "",
      "customAlertClickEvent": "",
      "sounds": {
        "shiny": "",
        "legendary": "",
        "mythical": "",
        "ultrabeast": "",
        "paradox": "",
        "starter": "",
        "bucket": "",
        "unregistered": "",
        "uncaught": "",
        "ivs": "",
        "evs": "",
        "despawned": ""
      },
      "customAlertSound": "",
      "autoGlow": false,
      "glowColor": "#FFFFFFFF",
      "journeyMap": {
        "enableWaypoint": false,
        "waypointName": "",
        "waypointHexColor": "",
        "persistent": false
      }
    }
  }
}
```