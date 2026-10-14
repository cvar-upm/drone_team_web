# CVAR-UPM Drone Team Web

Official website for the CVAR-UPM Drone Team, developed with Astro. This repository contains all information about the team, competitions, divisions, and members.

Visit the website: [https://cvar-upm.github.io/drone_team_web/](https://cvar-upm.github.io/drone_team_web/)


## Table of Contents

- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Available Commands](#available-commands)
- [Guide to Adding Content](#guide-to-adding-content)
  - [Adding New Members](#adding-new-members)
  - [Adding New Competitions](#adding-new-competitions)
  - [Adding Images and Videos](#adding-images-and-videos)
  - [Adding New Divisions](#adding-new-divisions)
- [Available Components](#available-components)
- [Styles and Themes](#styles-and-themes)
- [Deployment](#deployment)

## Project Structure

```
drone_team_web/
├── public/                      # Files served as-is (favicon, SVG logos, videos)
│   ├── logo-cvar.png           # Favicon
│   ├── aerostack2.svg          # Aerostack2 logos
│   └── imav25/imav25video.mp4  # Local videos
├── src/
│   ├── assets/                 # Images (optimised by Astro: resized + WebP)
│   │   ├── a2rl25/ a2rl26/ icuas22/ icuas23/ imav19/ imav22/ imav25/ mbzirc/
│   │   ├── members/            # Team member photos
│   │   ├── divisions/          # Division images
│   │   └── ...                 # Other logos and photos
│   ├── components/             # Reusable components
│   │   ├── AssetImage.astro    # Optimised image from a path in src/assets
│   │   ├── Carousel.astro      # Image/video carousel
│   │   ├── Footer.astro        # Footer with social media links and map
│   │   ├── Header.astro        # Sticky header with logo and navigation
│   │   ├── Icon.astro          # Social media icons
│   │   ├── Image.astro         # Full-width image block
│   │   ├── Member.astro        # Team member card
│   │   ├── Navigation.astro    # Desktop menu and mobile drawer
│   │   ├── PageHeader.astro    # Breadcrumbs, title and intro at the top of inner pages
│   │   ├── Row.astro           # Grid of member cards
│   │   ├── Section.astro       # Page section (spacing, background, eyebrow + heading)
│   │   ├── TextSection.astro   # Long-form text block (headings, paragraphs, links)
│   │   └── Video.astro         # Component for videos (iframe or local)
│   ├── data/
│   │   ├── competitions.ts     # Competitions, editions and results
│   │   ├── divisions.ts        # Research divisions (titles, images, texts)
│   │   ├── navigation.ts       # Menu links (built from the two files above)
│   │   ├── social.ts           # Social media links and map
│   │   └── icons.ts            # Icon SVG paths
│   ├── layouts/
│   │   ├── Layout.astro        # Main page layout (head, header, page header, footer)
│   │   └── CompetitionLayout.astro # Layout for competition pages (editions + results)
│   ├── lib/                    # Helpers (image lookup, base URL, video type)
│   ├── pages/                  # Site pages (automatic routes)
│   │   ├── index.astro         # Home page
│   │   ├── members.astro       # Members page
│   │   ├── competitions.astro  # Main competitions page
│   │   ├── divisions.astro     # Divisions page
│   │   ├── contact.astro       # Contact page
│   │   └── competitions/       # Competition subpages
│   │       ├── A2RL.astro      # A2RL details
│   │       ├── ICUAS.astro     # ICUAS details
│   │       ├── IMAV.astro      # IMAV details
│   │       ├── MBZIRC.astro    # MBZIRC details
│   │       └── OpenCV.astro    # OpenCV details
│   └── styles/
│       └── global.css          # Tailwind + daisyUI setup and the "cvar" theme
├── astro.config.mjs            # Astro configuration (base path, fonts, Tailwind)
├── package.json                # Project dependencies
└── README.md                   # This file
```

## Technologies Used

- **Astro 7**: Main framework for the static site, with `astro:assets` for image optimisation
- **Tailwind CSS 4**: Utility classes for all styling
- **daisyUI 5**: Component classes (`btn`, `card`, `navbar`, `menu`, `drawer`...) and the theme
- **@tailwindcss/typography**: `prose` styles for long-form text
- **Inter**: Site font, self-hosted through Astro's Fonts API

## Installation and Setup

### Prerequisites

- Node.js 22.12 or higher
- npm (included with Node.js)

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/cvar-upm/drone_team_web.git
cd drone_team_web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321/drone_team_web`

## Available Commands

| Command              | Action                                                                 |
| :------------------- | :----------------------------------------------------                  |
| `npm install`        | Installs all dependencies                                              |
| `npm run dev`        | Starts development server at `localhost:4321/drone_team_web`         |
| `npm run build`      | Builds the site for production in `./dist/`                            |
| `npm run preview`    | Previews the production build locally                                  |
| `npm run astro ...`  | Runs Astro CLI commands                                                |

## Guide to Adding Content

### Adding New Members

1. **Add the member's photo:**
   - Place the image in `/src/assets/members/`
   - Name the file descriptively (e.g., `first_last.jpeg`)

2. **Edit the members file:**
   - Open `/src/pages/members.astro`
   - Add the member to the corresponding section (`firstRow`, `secondRow`, etc.):

```javascript
const firstRow = [
  // ... existing members
  { 
    name: 'Full Name',
    image: '/members/first_last.jpeg',
    github: 'https://github.com/username',  // Optional
    linkedin: 'https://www.linkedin.com/in/username/'  // Optional
  },
];
```

3. **Member categories:**
   - `firstRow` and `secondRow`: Active Members
   - `thirdRow` and `fourthRow`: Collaborators
   - `fifthRow`: Former Members
   - Leave out `image` if there is no photo yet; the card shows the team logo instead.

### Adding New Competitions

#### 1. Create resource folder

Create a folder in `/src/assets/` with the competition name and year:
```
/src/assets/competition_name_year/
```

Image paths in the pages are written relative to `src/assets` (e.g. `/competition_name_year/photo.jpeg`). They are case-sensitive, and the build fails if a path doesn't exist.

#### 2. Add the competition data

Edit `/src/data/competitions.ts` and add an entry. The Competitions page cards, the navigation menu and the edition links at the top of the competition page are all generated from it:

```ts
{
  slug: 'CompetitionName',           // must match the page file name
  name: 'SHORT',
  fullName: 'Full Competition Name',
  logo: '/competition_logo.png',     // in src/assets
  image: '/competition_name_year/photo.jpeg',
  editions: [
    { id: '2024', label: '2024', result: '1st place' },  // result is optional
  ],
},
```

#### 3. Create competition details page

Create `/src/pages/competitions/CompetitionName.astro`. Each edition's `<TextSection id>` must match an `id` in `editions`:

```astro
---
import CompetitionLayout from '../../layouts/CompetitionLayout.astro';
import TextSection from '../../components/TextSection.astro';
import Carousel from '../../components/Carousel.astro';

const items = [
  { type: 'video', src: 'https://player.vimeo.com/video/VIDEO_ID' },
  { type: 'image', src: '/competition_name_year/image1.jpeg' },
];
---

<CompetitionLayout slug="CompetitionName">
  <TextSection id="2024">
    <h2>Competition Name 2024</h2>
    <p>Description of the competition, results and technologies used.</p>
    <p>More details at: <a href="OFFICIAL_URL" target="_blank">Official Website</a></p>
  </TextSection>

  <Carousel items={items} />
</CompetitionLayout>
```

Keep inline links on the same line as the text around them, otherwise the space before the link is lost.

### Adding Images and Videos

#### Local Images

1. Place the image in `/src/assets/` in the corresponding folder
2. Use the `Image` component:

```astro
<Image 
  imageUrl="/folder/image_name.jpg"
  alt="Image description"
/>
```

Astro converts images to WebP and generates several sizes, so originals can stay large. SVGs and videos go in `/public/` instead and are served as-is.

#### Videos

**Vimeo/YouTube videos (iframes):**

```astro
<Video 
  videoUrl="https://player.vimeo.com/video/VIDEO_ID"
  title="Video title"
/>
```

**Local videos:**

```astro
<Video 
  videoUrl="/folder/video.mp4"
  title="Video title"
/>
```

#### Carousel (multiple images/videos)

```astro
const items = [
  { type: 'video', src: 'https://player.vimeo.com/video/ID' },
  { type: 'image', src: '/folder/image1.jpeg', alt: 'Description' },
  { type: 'image', src: '/folder/image2.jpeg', alt: 'Description' },
];

<Carousel items={items} />
```

### Adding New Divisions

Edit `/src/data/divisions.ts` and add an entry. The Divisions page, its side menu, the home page research cards and the navigation menu are all generated from it:

```ts
{
  id: 'division-name',               // used as the #anchor
  title: 'Division Name',
  image: '/divisions/division_image.png',
  summary: 'One line shown on the home page card.',
  description: [
    'First paragraph. Inline <a href="https://...">links</a> are allowed.',
    'Second paragraph.',
  ],
},
```

## Available Components

### Layout.astro
Main layout for all pages. Props:
- `title`: Page title, also used for the browser tab (required)
- `intro`: One sentence shown under the title (optional)
- `description`: Meta description for search engines (optional)
- `breadcrumbs`: Breadcrumb trail (optional, defaults to Home / title)
- `header`: Set to `false` to hide the page header (the home page uses its own hero)

### CompetitionLayout.astro
Layout for competition pages. Prop `slug` looks the competition up in `src/data/competitions.ts` and shows its editions and results at the top.

### PageHeader.astro
Grey band with breadcrumbs, title and intro. Rendered by `Layout` automatically.

### Section.astro
Building block for page sections. Props:
- `eyebrow`, `title`, `intro`: Optional heading content
- `tone`: `base` (white), `muted` (light grey) or `tint` (light blue)
- `width`: `wide` (default) or `text` (reading width)
- `id`: Anchor (optional)

### Header.astro
Sticky header with logo and navigation. Automatically included in the Layout.

### Navigation.astro
Desktop menu with dropdowns and the mobile slide-in drawer, both built from `src/data/navigation.ts`.

### Footer.astro
Footer with:
- Team logo and name
- Social media links (Instagram, LinkedIn, YouTube, Vimeo, GitHub)
- Embedded location map
- Copyright

### Carousel.astro
Image and video carousel. Props:
- `items`: Array of objects with `type`, `src`, `alt` (optional), `title` (optional)

Features:
- Arrow navigation
- Clickable indicators
- Support for videos (iframe and local) and images
- Responsive

### Image.astro
Displays an image with responsive format. Props:
- `imageUrl`: Image path (required)
- `alt`: Alternative text

### Video.astro
Displays videos (iframe or local). Props:
- `videoUrl`: Video URL or local path (required)
- `title`: Video title

Automatically detects if it's an iframe (Vimeo, YouTube) or local video.

### Member.astro
Team member card. Props:
- `name`: Full name (required)
- `image`: Photo path (optional; without a photo the card shows the person's initials)
- `github`: GitHub URL (optional)
- `linkedin`: LinkedIn URL (optional)

### Row.astro
Grid container to display multiple members. Props:
- `members`: Array of member objects

### TextSection.astro
Wraps long-form text. Plain `<h2>`, `<h3>`, `<p>`, `<a>` and `<strong>` inside get the site's type scale automatically. Props:
- `id`: Anchor for menu links (optional)

### AssetImage.astro
Low-level optimised image used by the other components. Props:
- `src`: Path inside `src/assets`, an SVG in `public/`, or a full URL
- `alt`, `class`, `widths`, `sizes`, `loading`

## Styles and Themes

### Tailwind and daisyUI

All styling uses Tailwind utility classes in the markup, plus daisyUI component classes (`btn`, `card`, `navbar`, `menu`, `drawer`...). There are no `<style>` blocks or hardcoded colours in components.

- Tailwind docs: https://tailwindcss.com/docs
- daisyUI components: https://daisyui.com/components/

### Theme colours

The brand palette is the `cvar` daisyUI theme in `/src/styles/global.css`:

```css
@plugin "daisyui/theme" {
  name: "cvar";
  --color-primary: #0064ab;    /* CVAR blue: headings, links, footer */
  --color-secondary: #009bdb;  /* light CVAR blue: eyebrow labels, highlights */
  --color-accent: #009bdb;
  --color-neutral: #3e3c3c;
  --color-base-100: #ffffff;   /* page background */
  ...
}
```

Change a value there and every `bg-primary`, `text-primary`, `btn-primary` etc. updates. Use these colour names in classes (`text-primary`, `bg-base-200`, `text-base-content/80`) rather than hex values.

### Type scale

| Element | Classes |
|---|---|
| Home hero title | `text-4xl md:text-6xl font-bold tracking-tight` |
| Page title (PageHeader) | `text-3xl md:text-5xl font-bold tracking-tight` |
| Section heading | `text-3xl md:text-4xl font-bold tracking-tight` (use `Section`) |
| Eyebrow label | `text-sm font-semibold uppercase tracking-widest text-secondary` |
| Sub-heading | `text-xl md:text-2xl font-semibold` |
| Body text | `text-base md:text-lg` (or use `TextSection`) |

## Deployment

### GitHub Pages

The site is configured to deploy on GitHub Pages:

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://cvar-upm.github.io',
  base: '/drone_team_web',
  output: 'static',
});
```

### Deployment Process

1. Build the site:
```bash
npm run build
```

2. Generated files will be in `/dist/`

3. Configure GitHub Actions or manually deploy the `dist/` folder to the `gh-pages` branch

### Other Platforms

To deploy on Netlify, Vercel, or other platforms:

1. Adjust the configuration in `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  base: '/',
  output: 'static',
});
```

2. Follow the platform's instructions for deploying static sites

## Maintenance

### Dependency Updates

```bash
npm update
```

### Check Build Errors

```bash
npm run build
```

### Preview Before Deploying

```bash
npm run build
npm run preview
```

## Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Team Repository](https://github.com/cvar-upm)
- [Aerostack2](https://github.com/aerostack2/aerostack2)

## Contact

For more information about the CVAR-UPM Drone Team:
- Instagram: [@cvar_upm](https://www.instagram.com/cvar_upm/)
- LinkedIn: [CVAR-UPM](https://www.linkedin.com/company/computer-vision-aerial-robotics/)
- YouTube: [@CVAR-UPM](https://www.youtube.com/@CVAR-UPM)
- GitHub: [aerostack2](https://github.com/aerostack2/aerostack2)