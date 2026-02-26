---
sidebar_position: 1
slug: /config/rarities/about
description: "Everything regarding what the config does, and how to use it."
---

# About
### What does this config do?
The `rarities.json` config is used by both the **server** (dedicated server, LAN, singleplayer) and **client** to categorize Pokemon
as Legendary, Mythical, Ultra Beast, Paradox, or starter.

:::info Server
The server only uses the `starters` section of this config. <br />
This affects which Pokemon it will alert when `alertStarters` is enabled in [server.json](../server/about).
:::

:::info Client
Clients use the entire config to categorize Pokemon. <br />
This affects which Pokemon are alerted and how their respective alerts are displayed. <br />
E.g. if `399` (Bidoof) was included in the `legendaries` section, Bidoof would then alert as a Legendary Pokemon.
:::

### Config options
Editing this config is as simple as adding **dex numbers** to the list. A Pokemon can be added to multiple categories, and will trigger
only a single alert, regardless of how many different groups it is a part of. However, when the rarity is actually displayed, the highest
tier takes precedence in the order of `Legendary > Mythical > Ultra Beast > Paradox`.
:::danger
**DO NOT** use the Pokemon's name, or anything other than a number here! <br />
This config only accepts dex numbers. Anything else **will break things**.
:::