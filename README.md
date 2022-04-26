## derekpodi.com

My personal website, which I use to test and build on.

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Styling**: [Spectre CSS](https://picturepan2.github.io/spectre/)

## Creation

This project initially started with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The project takes advantage of Vercel's Github integration and CLI. First, I created a branch that acts as the staging area for deployment via git.

```bash
$ git checkout -b deploy-with-git
```

This allowed me to add any changes made to the website to a staging branch that can merge later. To add all current changes:

```bash
$ git add .
$ git commit -m "varaiable message about changes"
$ git push --set-upstream origin deploy-with-git
```

Upon creation of the pull request on Github, webhooks with Vercel start to run a build on the preview environment. If confirmed, will push into production view.
To see changes at any point on the localhost:

```bash
$ vercel dev
$ yarn dev
```

## Overview

- `api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/api/date`] and other serverless functions
- `components/*` - The different reusable components used in page layout
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/*` - All other static pages.
- `posts/*` - Static pre-rendered blog pages using MDX.
- `public/*` - Static assets including fonts and images.
- `styles/*` - A small amount of global styles.

## Running Locally

To try the site yourself, run at the CL:

```bash
$ git clone https://github.com/derekpodi/derekpodi.com.git
$ cd derekpodi.com
$ yarn
$ yarn dev
```
