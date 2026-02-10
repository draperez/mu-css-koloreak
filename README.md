MU Koloreak
============

Artxibo hau MU koloreak demo txiki bat da — CSS erabiliz kolore-gidak eta aldakorrak definitzen ditu (`oklch` eta CSS aldagaien bidez). Fitxategi nagusiak:

- `index.html` — demo-orri txikia (kolore aukerak eta kontrolak).
- `css/mu-koloreak.css` — kolore-aldagaiak eta kalkuluak.
- `css/style.css` — estilo osagarriak.
- `js/koloreak_aukeratu.js` — erabiltzaile-interakzio txikiak (tema eta secondary-diff eguneratzea).

Nola martxan jarri
-----------
1. Ireki `index.html` zure nabigatzailean (edo zerbitzari lokal baten bidez).
2. Hautatu kolorea (`select`) eta aldatu `Secondary Diff` slider-rarekin kolore-aldaketa.

Nola erabili beste proiektu batean
-----------
- mu-koloreak.css fitxategia (`https://gist.githubusercontent.com/draperez/71d77e483c510084658352f0d88bc5e9/raw/mu-koloreak.css`) gehitu zure html fitxategian
  - `<link rel="stylesheet" href="https://gist.githubusercontent.com/draperez/71d77e483c510084658352f0d88bc5e9/raw/mu-koloreak.css">`.
- HTML etiketan gehitu `data-theme` atributua (`<body data-theme="kolore-izena">`).
- HTML etiketan gehitu `data-secondary-diff` atributua (`<body data-secondary-diff="75">`).

Oharrak
-------
- Aldagaien eta `oklch()`/`from` relatiboen erabilera arte adituagoak dira; ezaugarri batzuk nabigatzailearen bertsioaren arabera kontrastatu beharko dira.

Lizentzia
--------
Proiektua MIT lizentziarekin dago estalita — bere testua `LICENSE` fitxategian dago.

Egileak
-------
- Alain Perez Riaño

Eskerrik asko!
