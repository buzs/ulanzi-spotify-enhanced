# Changelog

## 2.0.5

- Fixed a conflict with the official Ulanzi Spotify plugin: both plugins used local port `30901`, which could stop the official plugin. Spotify Enhanced now uses `30931`, so both plugins can run side by side.
- Already connected accounts keep working. To connect a new account, add `http://127.0.0.1:30931/oauth2callback` to your Spotify Developer app (the settings panel always shows the exact redirect URI).

## 2.0.4

- Fixed Like/Unlike for Spotify Development Mode apps using the new library API, with a fallback to the legacy endpoints.
- A failed status lookup no longer marks a track as not liked.
- Reduced Spotify API traffic: device polling every 15s, one library check per track, and Retry-After is honored.

## 2.0.3

- Fixed paused Play/Pause buttons keeping the previous album artwork instead of restoring the manifest play icon.
- Kept the fix compatible with the currently available Ulanzi software protocol.

## 2.0.2

- Fixed static manifest icon updates so host custom icons are not replaced on plugin restart.
- Kept compatibility with the currently available Ulanzi software protocol.

## 2.0.1

- Fixed D200X encoder rotation for playback, volume, playlist and new-release actions.
- Fixed encoder direction handling for the Ulanzi SDK event payload.

## 2.0.0

- Initial public distribution of Spotify Enhanced for Ulanzi D200.
- Added Spotify OAuth connection through a local settings-panel flow.
- Added playback, volume, shuffle, repeat, liked-track, playlist and new-release actions.
- Added keypad and encoder actions.
- Added encrypted local storage for Spotify access tokens, refresh tokens and client secrets.
- Added public repository packaging without TypeScript source code.
