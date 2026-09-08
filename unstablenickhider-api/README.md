# unstablenickhider-api

Serves the username list for Simple Unstable Nick Hider.

## Endpoint

`GET /api/usernames`

Returns `data/usernames.json` with CORS enabled. Also reachable at `/api/usernames.json` (rewritten by vercel.json).

## Editing the list

Edit `data/usernames.json` — it's a plain JSON array. Push to GitHub and Vercel redeploys automatically. Changes are live within ~60 seconds (cache TTL).

## Deploying

1. Push this repo to GitHub.
2. Import the repo on Vercel (framework preset: **Other**, zero config needed).
3. Test with:
   ```
   curl https://<your-app>.vercel.app/api/usernames
   ```
