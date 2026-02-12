# CVAR DRONE RACING Website

Official website for CVAR DRONE RACING team - Computer Vision and Aerial Robotics.


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
