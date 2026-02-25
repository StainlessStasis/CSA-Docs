---
sidebar_position: 2
slug: /about/dependencies
---

# Dependencies
### 1.12.0+
CSA depends on [Ember's Text API](https://www.curseforge.com/minecraft/mc-mods/embers-text-api) (>=2.5.0). Clients will **not** function without it.

For server owners:<br />
NeoForge servers should work fine without ETA. You can safely leave it out of your server if you wish.<br />
As mentioned [here](known_issues.md), Fabric servers are required to have ETA installed, otherwise the server
will crash on startup. Blame Fabric.

### 1.11.5 and lower
CSA does not depend on any external mods for 1.11.5 and below, however it does bundle the [Adventure](https://docs.papermc.io/adventure/)
library. This can [conflict with other mods](known_issues.md).