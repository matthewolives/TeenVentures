This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## After Hours Luma calendar

The slider reads public upcoming events from `https://lu.ma/ah-tv`
(calendar ID `cal-9Cf7KMxCZQzNAHk`). Add or approve events on that calendar
and set their cover images in Luma. No API key or manual slide uploads are needed.
All upcoming public calendar events are included, ordered by start time.
The server revalidates on requests after five minutes. Already-open browser tabs
need a reload to see newly published events. Dates display in Europe/Rome time.

This uses Luma's public website endpoint, not its supported authenticated API.
If that endpoint changes or is unavailable, the page links directly to the calendar
instead of displaying outdated hardcoded slides. Empty calendars have a separate
coming-soon message. Run `node --test tests/luma.test.cjs` for adapter tests.
