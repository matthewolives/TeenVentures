# website — CLAUDE.md

Sito pubblico di TeenVentures. Contesto generale: @CLAUDE.md. PRD: @prd.md.

## Stack

Next.js 14 (App Router) + TypeScript + Tailwind CSS

## Design system

- Sfondo: `#000000` | Testo: `#FFFFFF`
- Font titoli: **Bryndan Write** — file atteso in `public/fonts/BryndanWrite.woff2`; classe Tailwind `font-bryndan`
- Font corpo: monospace — classe `font-mono`
- Bottoni: `border border-white bg-transparent text-white hover:bg-white hover:text-black`
- Separatori: `border-t border-white/20`

## Struttura pagine

| Route | File |
|---|---|
| `/` | `src/app/page.tsx` |
| `/competizione/vol1` | `src/app/competizione/vol1/page.tsx` |
| `/after-hours` | `src/app/after-hours/page.tsx` |
| `/manifesto` | `src/app/manifesto/page.tsx` |
| `/sponsor-partner` | `src/app/sponsor-partner/page.tsx` |
| `/media` | `src/app/media/page.tsx` |
| `/contatti` | `src/app/contatti/page.tsx` |

## Componenti condivisi

- `src/components/Navbar.tsx` — sticky top, logo a sinistra, menu + dropdown Competizione a destra
- `src/components/Footer.tsx` — logo small a sinistra, copyright a destra

## Note

- After Hours page: fetch eventi da Luma API; fallback banner "Gli After Hours torneranno presto" se nessun evento futuro
- Navbar dropdown Competizione è espandibile: aggiungere voci in `NAV_EDITIONS` array in `Navbar.tsx`
- Logo: `public/Logo.png` (copiato da root del repo)
- Tutto il sito è in italiano
