# Insect Hunters Town

Deutsche Website für **Insect Hunters Town** — Lodge und Touren in Mindima, Chimbu Province, Papua-Neuguinea.

Statische Mehrseiten-Site (HTML / CSS / JS). Kein Build-Schritt, kein Booking-Backend. Anfragen laufen über `mailto:`.

## Lokal starten

Im Projektordner:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Dann öffnen: [http://127.0.0.1:8080/](http://127.0.0.1:8080/)

Alternativ jede andere Static-File-Auslieferung (z. B. `npx serve .`).

## Seiten

| Seite | Datei |
| --- | --- |
| Start | `index.html` |
| Lodge | `lodge.html` |
| Touren (inkl. Festivals) | `touren.html` |
| Individuell / Gruppenreisen | `individuell.html` |
| Über uns | `ueber-uns.html` |
| Anfrage / Kontakt | `kontakt.html` |

## Design-Notizen

Siehe [`docs/design-vs-papua-explorer.md`](docs/design-vs-papua-explorer.md).

## Platzhalter (vom Betreiber zu ersetzen)

- Hero- und Tour-/Lodge-Fotos
- Finale Tour- und Lodge-Texte (deutsch)
- Inhaberfoto und -name auf „Über uns“
- Echte Anfrage-E-Mail statt `anfrage@insecthunterstown.example` (in allen Seiten + `data-email` im Formular)

## Regeln der Site

- Keine Preise
- Keine Online-Buchung / Zahlung
- Nur E-Mail-Anfragen
- Disclaimer zu Wetter & Unvorhersehbarem im Footer
