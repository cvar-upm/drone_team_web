# CVAR DRONE RACING Website

Official website for CVAR DRONE RACING team - Computer Vision and Aerial Robotics.
Link: https://cvar-upm.github.io/drone_racing_web/

## Project Structure

```
.
├── astro.config.mjs
├── package.json
├── package-lock.json
├── public/
│   ├── a2rl.jpeg
│   ├── fondo.jpeg
│   ├── imav.jpeg
│   ├── logo-cvar.png
│   └── member.png
├── README.md
└── src/
    ├── assets/
    │   ├── astro.svg
    │   └── background.svg
    ├── components/
    │   ├── Footer.astro
    │   ├── Header.astro
    │   ├── Member.astro
    │   ├── Navigation.astro
    │   ├── Row.astro
    │   ├── SideSection.astro
    │   └── Video.astro
    ├── layouts/
    │   └── Layout.astro
    ├── pages/
    │   ├── competitions/
    │   ├── competitions.astro
    │   ├── contact.astro
    │   ├── divisions.astro
    │   ├── index.astro
    │   └── members.astro
    └── styles/
        └── global.css
```

## Components

### Navigation
Defines the toolbar buttons and dropdown menus.

### Layout
Base template that includes header, hero image with title, and footer.

**Props:**
- `title` - Page title (required)
- `subtitle` - Subtitle text (optional)
- `showJoin` - Show "Join Us" button (optional, default false)
- `heroImage` - Background image path (required)


### SideSection
Two-column layout with image on left and text on right.

**Props:**
- `imageSrc` - Image path
- `title` - Section title
- `description` - Text content
- `reverse` - Set to `true` to swap positions

### Member
Displays team member card with photo, name, and role.

### Video
Embeds a Vimeo video player.

## Working with Images

Place all images in `public/` folder.

## To Do

- [ ] Initial hero photo
- [ ] "Who are we" section text
- [ ] Team group photo
- [ ] Individual member photos
- [ ] IMAV 25 competition video
- [ ] Description for each division and photo
- [ ] Description for each competition


## Style

### Typography
- `h1` : Site title (3rem, blue primary)
- `h2` : Big title for sections (3.2rem, blue secondary)
- `h3` : Subsection titles (3.0rem, blue light)
- `p` : Body text (1.6rem)

### Hero Section
- `.hero-banner` : Full-width banner with background image (80vh)
- `.hero-overlay` : Dark overlay for text readability
- `.hero-title` : Main hero title (4rem, white, with shadow)
- `.hero-subtitle` : Hero subtitle (1.5rem, white)
- `.hero-logo` : CVAR logo with drop shadow (max 300px)

### Buttons
- `.btn-join-us` : Animated "JOIN US" call-to-action button with pulse effect
- `.btn-primary` : Primary action button (blue background)
- `.btn-secondary` : Secondary button (transparent with white border)

### Layout Components
- `.container` : Main content wrapper (max 1200px, centered)
- `.section` : Content section with white background and shadow
- `.section-title` : Centered section heading (2.5rem)

### Cards
- `.card-grid` : Responsive grid for cards (min 280px per card)
- `.card` : Individual card with hover effect (elevates and adds border)

### Split Sections (Image + Text)
- `.split-section` : Two-column layout (45% image, 55% text)
- `.split-section.reverse` : Reversed layout (text left, image right)
- `.split-image img` : Image styling (260px height, rounded corners)
- `.split-content` : Text content wrapper
- `.split-title` : Section title with responsive sizing (1.8-2.6rem)
- `.split-text` : Descriptive text (1.05rem, max 720px width)

### Breakout Sections (Full Width)
Use for content that needs to span the entire page width:
- `.breakout-wrapper` : Full-width container that breaks out of `.container`
- `.breakout-wrapper .split-section` : Full-width split with generous padding
- `.split-title-large` : Extra large title for homepage (3.5-8rem)
- `.split-text-large` : Larger body text for homepage (1.4rem)

### Video Embeds
- `.video-wrapper` : Full-width video container (max 1400px)
- `.video-container` : Responsive 16:9 aspect ratio wrapper for iframes

### Color Variables
```css
--cvar-blue-primary: #0064ab
--cvar-blue-secondary: #007abe
--cvar-blue-light: #009bdb
--cvar-dark-gray: #3e3c3c
--cvar-white: #ffffff
```

### Responsive Breakpoint
Mobile styles apply at `max-width: 768px` - automatically stacks columns, reduces font sizes, and adjusts spacing.