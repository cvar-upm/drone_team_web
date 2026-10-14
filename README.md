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
│   │   ├── Row.astro           # Grid of member cards
│   │   ├── SideImage.astro     # Section with image and side logo
│   │   ├── SideSection.astro   # Section with image and side text
│   │   ├── TextSection.astro   # Long-form text block (headings, paragraphs, links)
│   │   └── Video.astro         # Component for videos (iframe or local)
│   ├── data/
│   │   ├── navigation.ts       # Menu links (desktop and mobile)
│   │   ├── social.ts           # Social media links and map
│   │   └── icons.ts            # Icon SVG paths
│   ├── layouts/
│   │   └── Layout.astro        # Main page layout (head, header, hero, footer)
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

#### 2. Add competition to main page

Edit `/src/pages/competitions.astro` and add a `SideImage` component:

```astro
<SideImage
  image="/competition_name/main_photo.jpeg"
  logoImage="/competition_logo.png"
  url={`${import.meta.env.BASE_URL}/competitions/CompetitionName`}
  title="Competition Name"
  reverse={false}  // Alternate true/false to change side
/>
```

#### 3. Create competition details page

Create a file in `/src/pages/competitions/CompetitionName.astro`:

```astro
---
import Layout from '../../layouts/Layout.astro';
import TextSection from '../../components/TextSection.astro';
import Carousel from '../../components/Carousel.astro';

const items = [
  { type: 'video', src: 'https://player.vimeo.com/video/VIDEO_ID' },
  { type: 'image', src: '/competition_name/image1.jpeg' },
  { type: 'image', src: '/competition_name/image2.jpeg' },
];
---

<Layout 
  title="Competition Name" 
  logoImage="/competition_logo.png" 
  showJoin={false} 
  heroImage="/competition_name/hero.jpeg"
>
  <TextSection id="year">
    <h2>Competition Name Year</h2>
    <p>
      Detailed description of the competition, team achievements, 
      technologies used, etc.
    </p>
    <p>
      More details at: <a href="OFFICIAL_URL" target="_blank">Official Website</a>
    </p>
  </TextSection>
  
  <Carousel items={items} />
</Layout>
```

#### 4. Update navigation menu

Edit `/src/data/navigation.ts` and add the competition under `Competitions`. The desktop menu and the mobile drawer are both generated from this list:

```ts
{
  label: 'Competition Name',
  href: '/competitions/CompetitionName',
  children: [
    { label: '2024', href: '/competitions/CompetitionName#2024' },
    { label: '2023', href: '/competitions/CompetitionName#2023' },
  ],
},
```

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

Edit `/src/pages/divisions.astro` and add a new section:

```astro
<section id="division-name">
  <SideSection
    image="/divisions/division_image.png"
    title="Division Name"
    description={`Detailed description of the division, 
    its responsibilities, technologies used, etc.`}
    reverse={false}  // Alternate to change image position
  />
</section>
```

Add it to the `Divisions` entry in `/src/data/navigation.ts`:

```ts
{ label: 'Division Name', href: '/divisions#division-name' },
```

## Available Components

### Layout.astro
Main layout for all pages. Props:
- `title`: Page title, also used for the browser tab (required)
- `subtitle`: Subtitle (optional)
- `description`: Meta description for search engines (optional)
- `showJoin`: Show "Join us" button (boolean)
- `joinLink`: Where the "Join us" button points (optional)
- `heroImage`: Hero background image (optional)
- `logoImage`: Logo in the hero (optional)

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
- `image`: Photo path (optional, defaults to the team logo)
- `github`: GitHub URL (optional)
- `linkedin`: LinkedIn URL (optional)

### Row.astro
Grid container to display multiple members. Props:
- `members`: Array of member objects

### SideImage.astro
Section with image and side logo/title. Props:
- `image`: Background image
- `title`: Title (if no logo)
- `logoImage`: Logo to display (optional)
- `url`: Link (optional)
- `reverse`: Reverse image position (boolean)

### SideSection.astro
Section with image and descriptive side text. Props:
- `image`: Side image
- `title`: Section title
- `description`: Descriptive text
- `url`: Link in the title (optional)
- `reverse`: Reverse image position (boolean)

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
  --color-secondary: #009bdb;  /* light CVAR blue */
  --color-accent: #f7931e;     /* orange: "Join us" and other calls to action */
  --color-neutral: #3e3c3c;
  --color-base-100: #ffffff;   /* page background */
  ...
}
```

Change a value there and every `bg-primary`, `text-primary`, `btn-accent` etc. updates. Use these colour names in classes (`text-primary`, `bg-base-200`, `text-base-content/80`) rather than hex values.

### Type scale

| Element | Classes |
|---|---|
| Page title (hero) | `text-4xl md:text-6xl font-bold` |
| Section heading | `text-3xl md:text-4xl font-bold text-primary` |
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