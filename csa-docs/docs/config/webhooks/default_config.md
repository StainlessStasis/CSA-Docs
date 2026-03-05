---
sidebar_position: 3
slug: /config/webhooks/default-options
description: "Compare your own config to the default if you're experiencing issues."
---

# Default Config Options
```json
{
  "configVersion": "1.13.1",
  "comment": [
    "This config is common between server and client. It creates Discord webhooks for alerts.",
    "Servers only reference this config for global alerts. Clients use this for every alert, if webhooks are enabled for the alert.",
    "For details on using the config, please see the docs.",
    "https://stainlessstasis.github.io/CSA-Docs/config/"
  ],
  "webhookURL": "YOUR WEBHOOK URL HERE",
  "webhookContent": {
    "content": "No message provided. This cannot be blank, unless your webhook has an embed(s).",
    "username": "",
    "avatarURL": "",
    "tts": false,
    "embeds": [
      {
        "enabled": true,
        "title": "**A {shiny_unformatted}{legendary_unformatted}{HA_unformatted}{bucket_unformatted}{name} spawned in a {biome_unformatted} biome!**",
        "description": "**Dex Number**: #{dex_unformatted}\n**Level**: {level_unformatted}\n**IVs**: {ivs_unformatted}\n**EVs**: {evs_unformatted}\n**Nature**: {nature_unformatted}\n**Ability**: {ability_unformatted}\n**Gender**: {gender_unformatted}\n**Coordinates**: {coords_unformatted}\n**Nearest Player**: {nearest_player_unformatted}",
        "color": "",
        "url": "",
        "imageURL": "",
        "thumbnailURL": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{dex_unformatted}.png",
        "timestamp": false,
        "author": {
          "name": "",
          "url": "",
          "iconURL": ""
        },
        "fields": [
          {
            "name": "",
            "value": "",
            "inline": false
          }
        ],
        "footer": {
          "text": "",
          "iconURL": ""
        }
      }
    ]
  }
}
```