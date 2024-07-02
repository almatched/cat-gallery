# Cat Gallery

## TODO

- [x] Make it deploy (vercel)
- [x] Scaffold basic ui with mock data
- [x] Tidy up build config
- [x] Actually set up a database (vercel postgres)
- [x] Attach database to UI
- [x] Add authentication (w/ clerk)
- [x] Add image upload
- [x] "taint" (server-only)
- [x] Use Next/Image component
- [x] Error management (w/ Sentry)
- [x] Routing/image page (parallel route)
- [x] Customize upload button
- [x] Add toast for image upload notification (Shadui)
- [x] Analytics (posthog)
- [x] Delete button (w/ Server Actions)
- [x] Ratelimiting (upstash)
-----------------------------------------------------
- [x] Restrict uploads to specific users
- [x] Delete images from uloadthing, not only from postgres
- [x] Manage who can read, upload and delete images via clerk (permission-flags)
- [x] Handle runtime errors, like "image not found", with error boundary
- [x] Fix the page layout for images of different aspect-ratios
- [ ] "infinite scroll", lazy loading
- [ ] Fix ids on sonner
- [ ] "Selecting" images on the gallery page (Zustand recommended by Theo)
- [ ] Customize error boundary to look nice
- [ ] Optimize images as much as possible
- [ ] Add shadow database (database with test data) to test not test on production data