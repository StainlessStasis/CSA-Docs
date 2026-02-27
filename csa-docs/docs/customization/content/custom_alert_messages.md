---
sidebar_position: 1
slug: /customization/custom-alert-messages
description: "Override the default spawn message for a pokemon.json config."
---

# Custom Alert Messages
### What are custom alert messages?
Custom alert messages - found in [pokemon.json](../../config/pokemon_config/intro.md) - are used to override the default alert message
for a specific list of Pokemon (config object). They enable you to have unique alerts for each group, or even individual Pokemon.
Custom alert messages use [ETA markup](https://tysontheember.dev/embers-text-api/for-modpack-creators/markup-guide/) to style the message.

If you are looking to customize messages/message parts for **all** alerts, see [message templates](../../config/message_templates/intro.md).

### How to create a custom alert message
In your [pokemon.json](../../config/pokemon_config/intro.md) config, find `customAlertMessage`. Then, combine markup with [dynamic replacements](dynamic_replacements.md)
and you're done. If you need to add multiple lines, use the `\n` newline character.

### Legacy versions
:::warning
These examples are written for CSA 1.12.0+ using [ETA markup](https://tysontheember.dev/embers-text-api/for-modpack-creators/markup-guide/). <br />
For older versions, the markup in these examples will not work. See the [MiniMessage](https://docs.papermc.io/adventure/minimessage/) docs.
:::

### Examples
:::info
`"customAlertMessage": "<c value=#FFFFFF>A wild {shiny}{legendary}<rainbow>{name}</rainbow> has appeared{biome}!"`
:::
![full_spawn_message.png](full_spawn_message.png)