---
sidebar_position: 3
slug: /about/faq
---

# FAQ
### My alerts don't work when using commands?
This is intended behavior, which I still need to find a better solution for (if one exists).
You *can* use `enableSpawnCommandAlerts` in `server.json`, but **use this at your own risk**.
This should only be used in a testing environment, or if you're absolutely sure you know what you're doing.

*Technical details: This mixins to SpawnPokemon#execute and uses the player spawner system to forcibly post a spawn event.*
:::danger
This can **break** the spawning of some Pokemon, primarily in datapacks such as Cobblemon: Path to Legends.
:::

### Support for Xaero's Minimap waypoints?
Unfortunately, no. While it is technically already possible via modifying templates and using custom click events in your alerts,
I will not be adding direct compatibility to the mod. Xaero's is completely closed source, offering no API, no wiki, and no Discord server.
I am not going to go through the effort of trying to figure out how to integrate someone's mod when they provide no resources for doing such.

However, if someone wants to PR this, I'd love to make compatibility possible.

### When will you...
Unless it's a genuine issue with the mod, I add features at my own pace.
If you get upset with a feature taking too long, make a PR for it.

### In-game editable config?
See above.