---
sidebar_position: 1
slug: /config/webhooks/about
description: "Everything regarding what the config does, and how to use it."
---

# About
### What does this config do?
The `webhooks.json` config is used by **clients and servers** to define the format of [Discord webhooks](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).
Webhooks can be used either by your **client** to send a webhook when YOU receive an alert, or they can be used by the **server** to send a webhook
when a GLOBAL alert is triggered.

Webhooks use a [library by n1netails](https://github.com/n1netails/n1netails-discord-webhook-client) if you wish to explore further.

### How to use the config
:::info Clients
Go to your [`pokemon.json`](../pokemon_config/intro.md) and enable `sendWebhook` at the bottom of the Pokemon config you want to send a webhook for.

You should almost **always** use the `unformatted` versions of dynamic replacements on the client.

Also, anything set to `DISABLED` in your Pokemon's [`config`](../pokemon_config/intro.md) will **not** work in your webhooks!
:::
:::info Servers
Go to your [`server.json`](../server_config/intro.md) and enable `sendWebhook` at the bottom of the config.
:::

Once webhooks are enabled, go back to `webhooks.json` and insert your `webhookURL`.
:::danger
**DO NOT SHARE** this URL with anyone! This gives them full access to send any message they want in your server.
Should they get ahold of it, threat actors can use your webhook URL to potentially send malicious messages containing scams, malware, etc.
:::

That's it! Your webhooks will work now, but they will use the default template. If you wish to further modify this, see the options below.

### Basic options
| Option        | Description                                                                                             |
|:--------------|:--------------------------------------------------------------------------------------------------------|
| configVersion | **DO NOT EDIT**. Self-updating mod version - used to notify of important changes when updating the mod. |
| webhookURL    | The URL to your webhook. **DO NOT SHARE** with anyone! See the above warning.                           |
| content       | The main message.                                                                                       |
| username      | Sets the username of the webhook.                                                                       |
| avatarURL     | Sets the profile picture of the webhook from the specified image URL.                                   |
| tts           | Plays text-to-speech audio for the message.                                                             |

### Embeds
| Option       | Description                                                                                                                                                                                                                                                                                                               |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| enabled      | Enables the embed.                                                                                                                                                                                                                                                                                                        |
| title        | Sets the title of the embed.                                                                                                                                                                                                                                                                                              |
| description  | Sets the description of the embed.                                                                                                                                                                                                                                                                                        |
| color        | A color in **decimal** format. Use an [online tool](https://www.mathsisfun.com/hexadecimal-decimal-colors.html) to help with this. You can also find some default colors [here](https://github.com/n1netails/n1netails-discord-webhook-client/blob/main/src/main/java/com/n1netails/n1netails/discord/DiscordColor.java). |
| url          | Turns the title into a hyperlink.                                                                                                                                                                                                                                                                                         |
| imageURL     | Inserts a large image below the title and description.                                                                                                                                                                                                                                                                    |
| thumbnailURL | Inserts a small image in the top right corner.                                                                                                                                                                                                                                                                            |
| timestamp    | Inserts a timestamp of when the webhook was sent. Uses the system's local time (I think).                                                                                                                                                                                                                                 |

### Embeds - Author
| Option  | Description                               |
|:--------|:------------------------------------------|
| name    | The author's name.                        |
| url     | Turns the author's name into a hyperlink. |
| iconURL | Sets the icon of the author.              |

### Embeds - Fields
| Option         | Description                                       |
|:---------------|:--------------------------------------------------|
| name           | The field's name.                                 |
| value          | The field's value.                                |
| inline (true)  | Fits as many fields as possible on a single line. |
| inline (false) | Treats the field as its own line.                 |

### Embeds - Footer
| Option  | Description                  |
|:--------|:-----------------------------|
| text    | The footer's text.           |
| iconURL | Sets the icon of the footer. |