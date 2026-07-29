<p align="center">
  <img src="com.buzs.spotify.ulanziPlugin/resources/assets/btn_spotify_enc_logo.svg" alt="Spotify Enhanced" width="220">
</p>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-2.0.0-1db954?style=for-the-badge">
  <img alt="Ulanzi D200" src="https://img.shields.io/badge/Ulanzi-D200-111827?style=for-the-badge">
  <img alt="Windows and macOS" src="https://img.shields.io/badge/platform-Windows%2010%2B%20%7C%20macOS%2010.11%2B-2f81f7?style=for-the-badge">
  <img alt="Node.js" src="https://img.shields.io/badge/runtime-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
</p>

<p align="center">
  <strong>Spotify playback, volume, playlist and library controls for the Ulanzi D200.</strong>
</p>

---

## Overview

Spotify Enhanced turns the Ulanzi D200 into a compact Spotify controller with keypad and encoder actions.

This repository is a public distribution package. It contains the final `com.buzs.spotify.ulanziPlugin` folder for store/community review, but it does not include the real TypeScript source code.

Spotify Enhanced is not affiliated with, endorsed by, or sponsored by Spotify. Spotify trademarks and branding belong to Spotify AB.

## Requirements

- Ulanzi D200 with Ulanzi software 2.1.0 or newer.
- Windows 10 or newer, or macOS 10.11 or newer.
- Spotify account with Spotify Premium. Spotify Web API playback control requires Premium.
- Spotify desktop app, mobile app or web player open on at least one device.
- A Spotify Developer app created by the user.

## Install From Release

Download the ZIP asset from the latest GitHub Release:

```text
com.buzs.spotify.ulanziPlugin.zip
```

Import that ZIP in the Ulanzi software. End users do not need to run `npm install` for normal installation.

## Create The Spotify Developer App

The plugin includes a local multilingual setup guide. Open any Spotify Enhanced action settings panel and click `Open local guide` to view these instructions in a browser tab without relying on an external documentation site.

1. Open `https://developer.spotify.com/dashboard/` and sign in with your Spotify account.
2. Click `Create app`.
3. Use any app name and description.
4. Add this redirect URI:

```text
http://127.0.0.1:30901/oauth2callback
```

5. Select `Web API`.
6. Accept the Spotify terms and save the app.
7. Open the app settings and copy the `Client ID` and `Client Secret`.
8. In Ulanzi, open any Spotify Enhanced action settings panel and paste the credentials.
9. Click `Connect`, approve the Spotify authorization page and return to Ulanzi.

If the settings panel shows a different redirect URI, add the exact URI shown in the panel to your Spotify app before clicking `Connect`. This only happens when port `30901` is already used by another local application.

Do not share your Client Secret. If it leaks, rotate it in Spotify Developer Dashboard.

## Actions

| Action | Controller | What it does |
| --- | --- | --- |
| Play/Pause | Keypad | Toggles playback on the selected or active Spotify device. |
| Previous Track | Keypad | Plays the previous track. |
| Next Track | Keypad | Skips to the next track. |
| Toggle Shuffle | Keypad | Toggles Spotify shuffle mode. |
| Toggle Repeat | Keypad | Cycles repeat between context, track and off. |
| Mute Volume | Keypad | Toggles Spotify volume between muted and the last known volume. |
| Volume Set | Keypad | Sets volume to a configured percentage. |
| Volume Up | Keypad | Raises volume by 10 percent. |
| Volume Down | Keypad | Lowers volume by 10 percent. |
| Toggle Track Like | Keypad | Adds or removes the current track from liked songs. |
| Play Control | Encoder | Press to play/pause, rotate for previous/next. |
| Volume Control | Encoder | Press to mute, rotate to adjust volume by a configured step. |
| My Playlists | Encoder | Rotate through playlists and press to play the selected playlist. |
| New Releases | Encoder | Rotate through Spotify new releases and press to play the selected album. |
| Play Playlist | Keypad | Plays or pauses a fixed playlist selected in the settings panel. |

## Settings Panel

Open a Spotify Enhanced action settings panel to:

- Connect a Spotify account.
- Add another Spotify account.
- Disconnect the selected account.
- Open the bundled local setup guide.
- Choose the Spotify device or use the active device.
- Configure per-action options such as playlist, volume value and volume step.

## Privacy And Local Data

Spotify Enhanced stores account data inside the installed plugin folder:

```text
com.buzs.spotify.ulanziPlugin/.data/index.json
```

The file contains the local server port, an internal inspector token and encrypted Spotify credentials. Access tokens, refresh tokens and client secrets are encrypted with AES-256-GCM using a key derived from the local machine and plugin UUID.

The plugin communicates with Spotify Web API and `accounts.spotify.com`. It also starts a local HTTP server bound to `127.0.0.1` for OAuth and settings-panel communication.

## Troubleshooting

- `INVALID_CLIENT` or authorization fails: check that Client ID and Client Secret were copied from the same Spotify app.
- Redirect URI mismatch: add the exact redirect URI shown in the settings panel to Spotify Developer Dashboard.
- Playback actions do nothing: open Spotify on a device and start playback once, then try again.
- Device list is empty: make sure the Spotify app or web player is open and online.
- Volume/playback control fails: confirm the Spotify account has Premium.
- Account keeps failing: disconnect it in the settings panel, rotate the Client Secret in Spotify Developer Dashboard and connect again.

## Repository Layout

```text
.
├── CHANGELOG.md
├── LICENSE
├── README.md
└── com.buzs.spotify.ulanziPlugin/
    ├── manifest.json
    ├── package.json
    ├── plugin/
    ├── property-inspectors/
    └── resources/
```

## License

Spotify Enhanced is distributed here as a built Ulanzi plugin package. The real source code is private and is not licensed as part of this public distribution.

Third-party components keep their own licenses. Spotify trademarks and branding belong to Spotify AB. Ulanzi SDK/runtime files belong to their respective owners.
