# Prisca 22 Birthday Website 🎉

A beautiful, interactive birthday website for Prisca's 22nd birthday, converted from the iOS app.

## Features

- 🔒 Security question authentication
- 🎂 Animated birthday celebration
- 💝 Personal messages
- 🎬 Photo memories gallery
- 🎵 Music player with audio files
- 💭 Inspirational quotes
- 🎟️ Special voucher
- 👨‍👦 Personal message from brother

## Setup Instructions

### 1. Install Dependencies

```bash
cd prisca22-website
npm install
```

### 2. Copy Media Assets

You need to copy the media files from the iOS app to the website:

#### Images
Copy all images from `prisca22/prisca22_app/memories/` to `prisca22-website/public/images/memories/`

```bash
mkdir -p public/images/memories
cp ../prisca22/prisca22_app/memories/*.JPG public/images/memories/
cp ../prisca22/prisca22_app/memories/*.jpg public/images/memories/
```

#### Audio Files
Copy audio files from `prisca22/prisca22_app/` to `prisca22-website/public/audio/`

```bash
mkdir -p public/audio
cp ../prisca22/prisca22_app/song1.mp3 public/audio/
cp ../prisca22/prisca22_app/song2.mp3 public/audio/
cp ../prisca22/prisca22_app/voice_memo.m4a public/audio/
cp ../prisca22/prisca22_app/voice_memo2.m4a public/audio/
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
prisca22-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page with navigation logic
│   └── globals.css         # Global styles
├── components/
│   ├── LoadingScreen.tsx
│   ├── SecurityQuestionView.tsx
│   ├── StartScreen.tsx
│   ├── MessageScreen.tsx
│   ├── MenuScreen.tsx
│   ├── DetailScreen.tsx
│   ├── MemoriesDetailScreen.tsx
│   └── MusicDetailScreen.tsx
├── public/
│   ├── images/memories/    # Photo gallery images
│   └── audio/              # Music and voice memos
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Security Question

Answer: **Holz**

## Notes

- The website maintains all the functionality from the iOS app
- Smooth animations and transitions throughout
- Responsive design works on all devices
- Audio autoplay may be blocked by browsers - users will need to interact with the page first
