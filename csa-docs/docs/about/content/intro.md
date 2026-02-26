---
sidebar_position: 1
slug: /about/intro
description: "Comprehensive list of all of CSA's features."
---

# What is Cobblemon Spawn Alerts?
Cobblemon Spawn Alerts (**CSA**) is a **utility and QoL** addon/sidemod for [Cobblemon](https://modrinth.com/mod/cobblemon) 
to notify players of Pokemon spawns. CSA is designed to be client-first, with
a highly customizable config for players to control exactly **what** they want to see, and **how** they see it.

# What can CSA do?
:::info Find Rare Pokemon | Complete The Pokedex
* Alert **shinies, legendaries, ultra-rares**, and more.
* Alert any **uncaught or unregistered** Pokemon.
:::

:::info Build Your Team
* Alert based on **hidden ability, IVs, or EV yield**.
* Alert **groups** of Pokemon by name or dex number.
* Display info such as **nature, ability, gender**, and more.
:::

:::info Fully Customizable
* Create your own alerts using **styled text, custom sounds, click events**, and more.
* Automatically create **Journeymap waypoints** with custom names and colors.
:::

:::info Other
* Reload configs without needing to restart the game.
* Notify when a previously alerted Pokemon despawns.
* Make alerted Pokemon glow any color.
* Classify any Pokemon as legendary, mythical, etc.
:::

For more details and examples on using these features, see the [documentation](../../config/intro.md).

# Is the mod required on clients?
Yes. CSA **must** be present on the client and will not function otherwise. Unlike other mods which may
simply send a global message through the server, CSA's client is responsible for turning data
into functional alerts. If a server has CSA installed, you will be required to install it on your client.

# Is the mod required on servers?
Although not strictly required, the mod is **highly recommended** to be installed serverside to unlock all of its features.

Servers may **optionally**:
- Globally alert all players on the server of spawns and despawns
- Broadcast spawn bucket, nature, IVs, etc. to clients
- Enable alerts for Pokemon spawned via command (**do not use** without knowing what you're doing)

:::note Limitations
Without the mod being installed on the server, the features listed above will **not** work.

:::warning
Certain info about a Pokemon may not be displayed properly if server owners choose to disable it!<br />
This also applies to using CSA on a server which does not have the mod installed.

Be advised that what you see may not always be accurate.
:::