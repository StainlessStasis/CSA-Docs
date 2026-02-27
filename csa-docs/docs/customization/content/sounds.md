---
sidebar_position: 3
slug: /customization/sounds
description: "Add your own sounds to alerts using a resource pack template."
---

# Custom Sounds
### How to add custom sounds
If you are not adding **your own** sounds via resource pack, refer to `sounds / customAlertSound` in [pokemon.json](../../config/pokemon_config/intro.md).

To get started with adding custom sounds, you need a resource pack. You can either make this yourself, or download the CSA
[resource pack template](https://github.com/StainlessStasis/CSA-Pack-Template). This provides two sounds you can base your own off of.

Inside the resource pack, start by adding your sound files in `assets\minecraft\sounds\cobblemonspawnalerts`.
:::danger
The sound **MUST** be an `.ogg` file!<br />
You **CANNOT** just rename any sound file to `.ogg`. There are tools online to convert sounds, but use them at your own risk.
:::

Once your sound files are added, open `sounds.json`. Here, you'll find a template for creating your own sounds.
You must include the name of the directory where the sounds are located, relative to `assets\minecraft\sounds`. 
If you've added them to the same file path specified above, the directory will be `cobblemonspawnalerts`.
:::info Example legendary sound
```json
"cobblemonspawnalerts.legendary": {
  "sounds": [
    {
    "name": "cobblemonspawnalerts/legendary",
    "attenuation_distance": 0
    }
  ]
}
```
:::

An attenuation distance of 0 is recommended so that the sound does not have volume falloff. For more info on the configuration of `sounds.json`, refer
to the [Minecraft wiki](https://minecraft.wiki/w/Sounds.json).

Finally, we add the sound to the config. Sounds added via resource pack must begin with the `minecraft:` namespace.
In our example, the sound was `cobblemonspawnalerts.legendary`, so the full resource location is `minecraft:cobblemonspawnalerts.legendary`.
Finally, take that resource location, and add it to the Pokemon's [config](../../config/pokemon_config/intro.md). 

In our case, this sound is for a legendary, so it would be added like so: <br />
`"legendary": "minecraft:cobblemonspawnalerts.legendary",`