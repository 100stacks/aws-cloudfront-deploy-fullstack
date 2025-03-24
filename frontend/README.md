# Frontend - AWS CloudFront NextJS Fullstack Deploy

- Provides a website with a landing page and a countdown timer.

## Getting Started - Next.js v14.2.25

```bash
➜ npx create-next-app@14.2.25
Need to install the following packages:
create-next-app@14.2.25
Ok to proceed? (y) y

✔ What is your project named? … frontend
✔ Would you like to use TypeScript? … No / Yes ✅
✔ Would you like to use ESLint? … No / Yes ✅
✔ Would you like to use Tailwind CSS? … No / Yes ✅
✔ Would you like to use `src/` directory? … No ✅/ Yes
✔ Would you like to use App Router? (recommended) … No / Yes ✅
✔ Would you like to customize the default import alias (@/*)? … No / Yes ✅
✔ What import alias would you like configured? … @/* ✅

Using npm.

Initializing project with template: app-tw


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- postcss
- tailwindcss
- eslint
- eslint-config-next
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Install Shadcn UI Components

Installing shadcn/ui components as wonderful UI React components are customizable.

- ref: https://ui.shadcn.com/docs/installation/next

**Navigate to the `frontend` directory:**

1. npx shadch@latest init

   You'll see something similar to the below output:

```bash
➜ npx shadcn@latest init
Need to install the following packages:
shadcn@2.4.0-canary.16
Ok to proceed? (y) y

✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS.
✔ Validating import alias.
✔ Which style would you like to use? › New York (Recommended)
✔ Which color would you like to use as the base color? › Slate
✔ Writing components.json.
✔ Checking registry.
✔ Updating tailwind.config.ts
✔ Updating app/globals.css
✔ Installing dependencies.
✔ Created 1 file:
  - lib/utils.ts

Success! Project initialization completed.
You may now add components.
```

2. Now add your shadcn/ui components - https://ui.shadcn.com/docs/components/accordion. You can additional components later if you need to.

```bash
➜ npx shadcn add sidebar-07 alert-dialog button card dropdown-menu input label select separator sheet skeleton textarea tooltip
Need to install the following packages:
shadcn@2.4.0-canary.16
Ok to proceed? (y) y

✔ Checking registry.
✔ Updating tailwind.config.ts
✔ Updating app/globals.css
✔ Installing dependencies.
✔ Created 23 files:
  - app/dashboard/page.tsx
  - components/app-sidebar.tsx
  - components/nav-main.tsx
  - components/nav-projects.tsx
  - components/nav-user.tsx
  - components/team-switcher.tsx
  - components/ui/sidebar.tsx
  - components/ui/button.tsx
  - components/ui/separator.tsx
  - components/ui/sheet.tsx
  - components/ui/tooltip.tsx
  - components/ui/input.tsx
  - hooks/use-mobile.tsx
  - components/ui/skeleton.tsx
  - components/ui/breadcrumb.tsx
  - components/ui/collapsible.tsx
  - components/ui/dropdown-menu.tsx
  - components/ui/avatar.tsx
  - components/ui/alert-dialog.tsx
  - components/ui/card.tsx
  - components/ui/label.tsx
  - components/ui/select.tsx
  - components/ui/textarea.tsx
```
