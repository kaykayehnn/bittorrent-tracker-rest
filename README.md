# bittorrent-tracker-rest

This is a simple wrapper around [bittorrent-tracker](https://github.com/webtorrent/bittorrent-tracker) which adds a REST API for accessing torrent seeders and leechers.

## How to use

You can clone this repo and install dependencies, or you can use the provided Dockerfile to build a standalone image.

**TL;DR**

```bash
git clone https://github.com/kaykayehnn/bittorrent-tracker-rest
cd bittorrent-tracker-rest
yarn
yarn start
```

## Environment variables

You can use the following variables to modify the configuration:

| Variable     | Type        | Default | Required |
| ------------ | ----------- | ------- | -------- |
| TRACKER_PORT | port number | 6969    | no       |
| API_PORT     | port number | 8080    | no       |
