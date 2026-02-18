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
├── public/                      # Static files (images, videos, logos)
│   ├── a2rl25/                 # A2RL Season 1 images
│   ├── a2rl26/                 # A2RL Season 2 images
│   ├── icuas22/                # ICUAS 2022 images
│   ├── icuas23/                # ICUAS 2023 images
│   ├── imav19/                 # IMAV 2019 images
│   ├── imav22/                 # IMAV 2022 images
│   ├── imav25/                 # IMAV 2025 images
│   ├── mbzirc/                 # MBZIRC images
│   ├── members/                # Team member photos
│   ├── divisions/              # Division images
│   ├── logo-cvar.png           # Team logo
│   ├── aerostack2.svg          # Aerostack2 logo
│   └── ...                     # Other logos and resources
├── src/
│   ├── assets/                 # Assets processed by Astro
│   ├── components/             # Reusable components
│   │   ├── Carousel.astro      # Image/video carousel
│   │   ├── Footer.astro        # Footer with social media links
│   │   ├── Header.astro        # Header with logo and title
│   │   ├── Image.astro         # Component to display images
│   │   ├── Member.astro        # Team member card
│   │   ├── Navigation.astro    # Navigation menu
│   │   ├── Row.astro           # Grid row for members
│   │   ├── SideImage.astro     # Section with image and side logo
│   │   ├── SideSection.astro   # Section with image and side text
│   │   ├── Social.astro        # Social media links
│   │   └── Video.astro         # Component for videos (iframe or local)
│   ├── layouts/
│   │   └── Layout.astro        # Main page layout
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
│       └── global.css          # Global site styles
├── astro.config.mjs            # Astro configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## Technologies Used

- **Astro 5.17.1**: Main framework for the static site
- **Node.js**: JavaScript runtime environment
- **CSS3**: Custom styles with CSS variables
- **HTML5**: Semantic structure

## Installation and Setup

### Prerequisites

- Node.js (version 18 or higher)
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
   - Place the image in `/public/members/`
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

### Adding New Competitions

#### 1. Create resource folder

Create a folder in `/public/` with the competition name and year:
```
/public/competition_name_year/
```

#### 2. Add competition to main page

Edit `/src/pages/competitions.astro` and add a `SideImage` component:

```astro
<SideImage
  image="/competition_name/main_photo.jpeg"
  logoImage="/competition_logo.png"
  url={`${import.meta.env.BASE_URL}/competitions/CompetitionName`}
  reverse={false}  // Alternate true/false to change side
/>
```

#### 3. Create competition details page

Create a file in `/src/pages/competitions/CompetitionName.astro`:

```astro
---
import Layout from '../../layouts/Layout.astro';
import Carousel from '../../components/Carousel.astro';
import '../../styles/global.css';

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
  <section id="year">
    <h2>Competition Name Year</h2>
    <p>
      Detailed description of the competition, team achievements, 
      technologies used, etc.
    </p>
    <p>
      More details at: <a href="OFFICIAL_URL" target="_blank">Official Website</a>
    </p>
  </section>
  
  <Carousel items={items} />
</Layout>
```

#### 4. Update navigation menu

Edit `/src/components/Navigation.astro` to add the new competition to the dropdown:

```astro
<li class="dropdown-submenu">
  <a href={`${import.meta.env.BASE_URL}/competitions/CompetitionName`}>Competition Name</a>
  <ul class="dropdown-submenu-menu">
    <li><a href={`${import.meta.env.BASE_URL}/competitions/CompetitionName#2024`}>2024</a></li>
    <li><a href={`${import.meta.env.BASE_URL}/competitions/CompetitionName#2023`}>2023</a></li>
  </ul>
</li>
```

### Adding Images and Videos

#### Local Images

1. Place the image in `/public/` in the corresponding folder
2. Use the `Image` component:

```astro
<Image 
  imageUrl="/folder/image_name.jpg"
  alt="Image description"
  title="Optional title"
/>
```

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

Update the navigation menu in `/src/components/Navigation.astro`:

```astro
<li><a href={`${import.meta.env.BASE_URL}/divisions#division-name`}>Division Name</a></li>
```

## Available Components

### Layout.astro
Main layout for all pages. Props:
- `title`: Page title (required)
- `subtitle`: Subtitle (optional)
- `showJoin`: Show "JOIN US" button (boolean)
- `heroImage`: Hero background image (optional)
- `logoImage`: Logo in the hero (optional)

### Header.astro
Fixed header with logo and navigation. Automatically included in the Layout.

### Navigation.astro
Navigation menu with dropdowns. Configured for all site sections.

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
- `title`: Image title

### Video.astro
Displays videos (iframe or local). Props:
- `videoUrl`: Video URL or local path (required)
- `title`: Video title

Automatically detects if it's an iframe (Vimeo, YouTube) or local video.

### Member.astro
Team member card. Props:
- `name`: Full name (required)
- `image`: Photo path (required)
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

### Social.astro
Social media links (simple component). Props:
- `platform`: Platform (e.g., "github")
- `username`: Username

## Styles and Themes

### CSS Variables

The site uses CSS variables defined in `/src/styles/global.css`:

```css
:root {
  --cvar-blue-primary: #0064ab;
  --cvar-blue-secondary: #007abe;
  --cvar-blue-light: #009bdb;
  --cvar-black: #000000;
  --cvar-dark-gray: #3e3c3c;
  --cvar-white: #ffffff;
}
```

### Modifying Colors

Edit the variables in `global.css` to change the color palette globally.

### Custom Styles

Each `.astro` component can have its own `<style>` block with scoped or global styles.

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