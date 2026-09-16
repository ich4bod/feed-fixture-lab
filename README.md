# Feed Fixture Lab

A static, local-first diagnostic page for five checked-in RSS/Atom-shaped fixtures. The browser makes no application network calls; verdicts come from `inspect()` in `app.js`.

## Verify

Run `npm test`. To deploy, run `docker compose up -d --build`, then open `https://feed-lab.ichabod-crane.net`.
