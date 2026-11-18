# Insect Hunters Town

Deutsche Website für **Insect Hunters Town** — Lodge und Touren in Mindima, Chimbu Province, Papua-Neuguinea.

Statische Mehrseiten-Site (HTML / CSS / JS) unter `public/`, deploybar als Cloudflare Worker (`wrangler.jsonc`). Kein Booking-Backend. Anfragen laufen über `mailto:`.

## Lokal starten

Im Projektordner:

```bash
python3 -m http.server 8080 --bind 127.0.0.1 --directory public
```

oder:

```bash
npm start
```

Dann öffnen: [http://127.0.0.1:8080/](http://127.0.0.1:8080/)

Mit Wrangler: `npm install && npm run dev`

## Seiten

| Seite | Datei |
| --- | --- |
| Start | `public/index.html` |
| Lodge | `public/lodge.html` |
| Touren (inkl. Festivals) | `public/touren.html` |
| Individuell / Gruppenreisen | `public/individuell.html` |
| Über uns | `public/ueber-uns.html` |
| Anfrage / Kontakt | `public/kontakt.html` |

## Design-Notizen

Siehe [`docs/design-vs-papua-explorer.md`](docs/design-vs-papua-explorer.md).

## Platzhalter (vom Betreiber zu ersetzen)

- Hero-, Tour- und Lodge-Fotos (Interieurs nach Twin/Double/Single + Bäder; Außenansichten)
- Finale Tour-Texte (deutsch)
- Inhaberfoto und -name auf „Über uns“
- Echte Anfrage-E-Mail statt `anfrage@insecthunterstown.example` (in allen Seiten + `data-email` im Formular)

Lodge-Beschreibungstext ist bereits aus Betreiber-Notizen eingepflegt.

## Regeln der Site

- Keine Preise
- Keine Online-Buchung / Zahlung
- Nur E-Mail-Anfragen
- Disclaimer zu Wetter & Unvorhersehbarem im Footer
