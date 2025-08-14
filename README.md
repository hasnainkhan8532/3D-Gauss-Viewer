# RepliVision – 3D Gaussian Splat Viewer

An interactive React + Vite app to view and explore 3D Gaussian Splat models. It ships with a modern UI, an examples gallery, and a powerful in-browser viewer (iframe) that supports keyboard, gamepad, and touch controls. You can also drag-and-drop a `.ply` file to convert it to `.splat` directly in the viewer, and optionally load a `cameras.json` to navigate preset camera paths.

## Quick Start

Requirements:
- Node.js 18+ (Vite 5)

Install and run locally:
```bash
npm install
npm run dev
```
The app starts at `http://localhost:5173` (or the port Vite selects). Use the UI to open the Examples gallery or the How to Use guide.

Build and preview production:
```bash
npm run build
npm run preview
```

## Features
- Examples gallery with multiple `.splat` models (cars, scenes, objects)
- In-app help overlay explaining controls
- Fullscreen embedded viewer located at `public/splat/index.html`
- Drag-and-drop `.ply` to convert to `.splat` in-browser
- Drag-and-drop `cameras.json` to load camera presets
- Save current view to URL with `V`

## Controls

Keyboard (highlights):
- Arrow Keys: Move camera
- W/S: Tilt up/down
- A/D: Turn left/right
- Q/E: Roll counterclockwise/clockwise
- I/K/J/L: Rotate up/down/left/right
- P: Toggle default animation
- H: Toggle carousel mode (when cameras loaded)
- 0–9: Switch to pre-loaded camera views
- +/-: Cycle through loaded cameras

Gamepad (highlights):
- Left Stick: Move camera
- Right Stick: Rotate camera
- L2/R2: Tilt camera
- A/B/X/Y (I/L/K/J): Directional rotation
- L1: Toggle P functionality, R1: Toggle H functionality

Mobile (touch):
- One finger drag: Orbit
- Two finger pinch: Move forward/back
- Two finger rotate: Rotate
- Two finger pan: Strafe/pan

## Adding Your Own Models
There are two convenient paths:
1) Use the viewer’s drag-and-drop: Drop a `.ply` file onto the viewer area to convert it to `.splat` and load it.
2) Place files in `public/examples/` and reference them from the app:
   - Put your `.splat` file in `public/examples/`
   - Optionally add a thumbnail in `public/examples/thumbnails/`
   - Update the examples array in `src/components/SplatViewer.tsx` to list your new model (title, thumbnail path, and model path)

Optional: To load camera presets, drag-and-drop a `cameras.json` onto the viewer or keep one in `public/` and load it via the viewer UI.

## Project Structure
```
public/
  examples/                # Example .splat models + thumbnails
  splat/                   # In-browser viewer + converter
src/
  components/
    SplatViewer.tsx        # Main viewer screen, examples overlay, help
  App.tsx, main.tsx        # App entry
```

Key files:
- `src/components/SplatViewer.tsx` – UI shell around the embedded viewer with Examples and How to Use overlays
- `public/splat/index.html` – The actual interactive Gaussian Splat viewer (loaded in an iframe)

## Scripts
```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## Notes
- Static hosting works out of the box after `npm run build` (serve the `dist/` folder)
- If deploying under a subpath (e.g., GitHub Pages), set `base` in `vite.config.ts` to your repo name

## License
This repository currently does not include a root license file. The viewer under `public/splat/` includes its own license. Add a license at the root if you intend to open-source the entire project.
