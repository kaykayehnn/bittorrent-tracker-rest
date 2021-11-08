import express from "express";

export default function createApi({ tracker, port }) {
  const app = express();

  app.get("/t", (req, res) => {
    const data = Object.keys(tracker.torrents);

    res.json(data);
  });

  app.get("/t/:infohash", (req, res) => {
    const torrent = tracker.torrents[req.params.infohash];

    const data = {
      infoHash: torrent.infoHash,
      seeders: torrent.complete,
      peers: torrent.incomplete,
    };

    res.json(data);
  });

  app.listen(port, () => console.log(`Api listening on port: ${port}`));

  return app;
}
