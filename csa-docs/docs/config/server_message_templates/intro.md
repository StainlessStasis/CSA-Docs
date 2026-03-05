---
sidebar_position: 1
slug: /config/server-message-templates/about
description: "Everything regarding what the config does, and how to use it."
---

# About
### What does this config do?
The `server_message_templates.json` config is used by **servers** to customize 'templates', which are used by the server to configure 
pieces of messages using [dynamic replacements](../../customization/content/dynamic_replacements.md). 
Currently, this config is only used by [webhooks](../webhooks/intro.md).

### How to use the config
Unlike the client [message templates](../message_templates/intro.md), `server_message_templates.json` does not use any markup or translation.

In the config, note that all whitespace is there **intentionally** to make message pieces connect together.
Keep spacing in mind so you don't end up with double/no spaces. If you need to add multiple lines, use the `\n` newline character.
:::danger
**DO NOT** edit `configVersion`.
:::

### Placeholders
You'll notice in the config that there are a bunch of `%s`. These are placeholders for String values which get replaced at runtime
with new values for each alert. For more information, see the [Minecraft wiki](https://minecraft.wiki/w/Text_component_format#Translated_Text).

For examples, see [message templates](../message_templates/intro.md), but note that the **server** message templates should **not** use markup.