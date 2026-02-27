---
sidebar_position: 4
slug: /about/known-issues
description: "Incompatibilities, bugs, and other known issues."
---

# Known Issues

:::danger BlueMap & others
On versions of CSA below 1.12.0, any other mods which bundle the [Adventure](https://docs.papermc.io/adventure/) library
will conflict and cause a crash. On versions 1.12.0+, CSA has moved to using [Ember's Text API](https://www.curseforge.com/minecraft/mc-mods/embers-text-api)
to fix this issue.
:::

:::danger Fabric Server Requires ETA
Fabric dedicated servers in CSA 1.12.0+ will crash if [Ember's Text API](https://www.curseforge.com/minecraft/mc-mods/embers-text-api)
is not installed on the server, even though ETA is only required on the **client** for CSA to work.
Blame Fabric for not allowing dependencies to be marked as client-only.
:::

:::warning Cobblemon Academy 2.0
Cobblemon Academy 2.0 uses a resource pack which entirely overrides CSA's lang file, breaking the new formatting in 1.12.0. 
You have the option to either edit the `message_templates.json`, or, if you want to use the default lang file of CSA, 
go to `resourcepacks -> Academy -> assets -> cobblemon_spawn_alerts` and delete the lang file.

Cobblemon Academy 2.0 also makes some changes to the configs, causing shinies not to alert by default. 
In the CSA `main.json` config (use `/csa openconfig` to open the directory), 
set `alertAllShinies` to true. Then run `/csa reload`. 
Now, if you are the owner of the server, go  to `server.json` and set `alertShinies` to true. 
Then run `/csa-server reload` (or `/csa-common reload` on 1.12.0+). Shiny alerts should work now.
:::

:::warning Despawn Alerts
Despawn alerts do not trigger unless:
1) The mod is installed on the server
2) The Pokemon has been globally alerted by the server

This is intentional, for now at least (no promises).
For 1, clients do not have a reliable way to track the despawning of entities, leading to false alerts.
For 2, this may eventually be changed to a serverside opt-in to send the despawn to players who initially received an alert for the Pokemon.
:::