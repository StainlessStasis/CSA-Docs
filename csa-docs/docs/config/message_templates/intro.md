---
sidebar_position: 1
slug: /config/message-templates/about
description: "Everything regarding what the config does, and how to use it."
---

# About
### What does this config do?
The `message_templates.json` config is used by **clients** to customize 'templates' which are used by all alert message parts,
such as [dynamic replacements](../../customization/dynamic-replacements). By default, message templates only serve as an intermediary step to the lang file using a translation key.
This config allows you to edit those and directly edit how individual pieces of messages are styled.

In essence, message templates accomplish the same thing as a resource pack, but are quicker and easier to reload when making rapid changes. This is
not a resource pack tutorial, but you may find a resource pack to be more suitable for your needs. For example, if you wanted to swap between
multiple different themes for different use cases, multiple resource packs would likely be the better option.

### How to use the config
Editing message templates is very straightforward using [ETA markup](https://tysontheember.dev/embers-text-api/for-modpack-creators/markup-guide/).
First, reference the [language file](lang) of the matching translation key for the template you want to edit. 
Then, use this as a basis for editing the template. Note that all whitespace is there **intentionally** to make message pieces connect together.
Keep spacing in mind so you don't end up with double/no spaces. If you need to add multiple lines, use the `\n` newline character.

### Placeholders
You'll notice in the [language file](lang) that there are a bunch of `%s`. These are placeholders for String values which get replaced at runtime
with new values for each alert. For more information, see the [Minecraft wiki](https://minecraft.wiki/w/Text_component_format#Translated_Text).

Placeholder values can be swapped in any order, or even reused. To get a value by its index, format it as `%x$s`, where x is the index.
Indices start from 1.
:::info Examples
`"coords": " at <color value=#AAAAAA>(%3$s, %2$s, %1$s)</color>",` - Swap the X and Z coordinates<br />
`"coords": " at <color value=#AAAAAA>(%2$s, %2$s, %2$s)</color>",` - Only use the Y coordinate
:::
:::warning
While you can reorder the placeholders however you like, ensure that the *amount* of them remains the same.

These examples are written for CSA 1.12.0+ using [ETA markup](https://tysontheember.dev/embers-text-api/for-modpack-creators/markup-guide/). <br />
For older versions, the markup in these examples will not work. See the [MiniMessage](https://docs.papermc.io/adventure/minimessage/) docs.
:::