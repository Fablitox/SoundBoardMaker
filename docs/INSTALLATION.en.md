# Installing Soundboard Maker

> **Version 1.0 is being prepared.** Downloads will be available after the first stable public release.

## Requirements

- 64-bit Windows 11.
- A working audio output for playback and relevant capture features.
- For Stream Deck integration: Elgato Stream Deck software and the Soundboard Maker plugin.
- **To send sounds into a game's or Discord's virtual microphone input: Elgato Wave Link is required for the routing supported by Soundboard Maker.** Normal speaker/headphone playback does not require it.

## Install the Windows app

1. Open [Releases](https://github.com/Fablitox/SoundBoardMaker/releases).
2. Select the stable release and download its **Windows installer (.exe)**.
3. Verify the filename, version and SHA-256 checksum when provided.
4. Run the installer and follow the instructions.
5. Launch Soundboard Maker and configure your sound library.

No portable ZIP edition is planned.

## Install the Stream Deck plugin

Until the plugin is available on the Elgato Marketplace:

1. Install the official **Elgato Stream Deck** software.
2. Download the **.streamDeckPlugin** file from the matching Soundboard Maker release.
3. Open the file with Stream Deck and approve installation.
4. Check that Soundboard Maker is running and its actions are available in Stream Deck.

The plugin has its own version number.

## Play sounds through your microphone

**Wave Link is required to route Soundboard Maker audio into a virtual microphone in the supported setup.** Without this routing, Soundboard Maker can play audio to a standard Windows output, but it does not create a virtual microphone for Discord or games by itself.

1. Install and open **Elgato Wave Link**.
2. Add an effects channel (such as **SFX**) or an appropriate virtual channel for your Wave Link version.
3. In Soundboard Maker, select the corresponding **Wave Link playback device** as your audio output.
4. In Wave Link, route the sound-effects channel to **MicrophoneFX** (using “Route to MicrophoneFX” where available) or the equivalent microphone mix for your version.
5. In Discord or the game, choose **Wave Link MicrophoneFX** as the microphone input and test it.

Channel names and setup may vary by version. Refer to the [official Elgato soundboard routing instructions](https://help.elgato.com/hc/en-us/articles/13836129008269-Elgato-Wave-Link-How-to-use-a-Soundboard-with-MicrophoneFX).

> **Remember:** Wave Link is required for the **microphone-input routing** documented here, not for ordinary playback through speakers or headphones.

## Updates

Soundboard Maker checks for published releases on app launch and also offers a manual check. Installing a new version remains the user's choice.

Finish recording or editing before updating. Review the release notes and verify settings, sound libraries and assignments after installation.

## Need help?

See [Support](SUPPORT.md) or open an [issue](https://github.com/Fablitox/SoundBoardMaker/issues). Never include private audio, logs with personal data or access tokens.
