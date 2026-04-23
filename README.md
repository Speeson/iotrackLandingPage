# IoTrack Landing Page

Landing page de IoTrack construida con Astro + TypeScript, con:
- estilo visual "Liquid Glass"
- selector de idioma (ES/EN)
- modo claro/oscuro
- animaciones al hacer scroll
- despliegue automatico con GitHub Actions en GitHub Pages

## Requisitos

- Node.js 20+
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Deploy con GitHub Actions

Este repo incluye el workflow `.github/workflows/deploy-astro.yml`.

Pasos:
1. En GitHub, ir a `Settings > Pages`.
2. En `Build and deployment`, seleccionar `Source: GitHub Actions`.
3. Hacer push a `main`.

El workflow construye Astro y publica `dist/` en GitHub Pages.

Nota:
- El workflow define `BASE_PATH=/<nombre-del-repo>` automaticamente para que los assets funcionen bien en Pages.
