# Budżet domowy – aplikacja na telefon

Prosta aplikacja do planowania wydatków metodą „kopertową”: wszystkie pieniądze rozdzielasz na kategorie, aż bilans pokaże 0 zł. Działa bez internetu, a dane są zapisane **tylko w Twoim telefonie**.

## Instalacja (jednorazowo, ok. 10 minut, na komputerze)

1. Rozpakuj `budzet-app.zip`.
2. Zaloguj się na github.com i kliknij **New repository** (zielony przycisk lub „+” w prawym górnym rogu).
   - Nazwa: `budzet`
   - Zaznacz **Public** (darmowe GitHub Pages wymaga publicznego repozytorium; publiczny jest tylko kod aplikacji, Twoje dane nigdy tam nie trafiają)
   - Kliknij **Create repository**.
3. Na stronie nowego repozytorium kliknij **uploading an existing file** (albo **Add file → Upload files**).
4. Przeciągnij **wszystkie pliki** z rozpakowanego folderu (nie sam folder):
   `index.html`, `manifest.webmanifest`, `sw.js`, `xlsx.full.min.js`, `icon-192.png`, `icon-512.png`, `icon-maskable.png` (README.md opcjonalnie).
   Kliknij **Commit changes**.
5. Wejdź w **Settings → Pages**. W „Build and deployment” ustaw:
   Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)** → **Save**.
6. Po 1–2 minutach aplikacja będzie pod adresem:
   `https://TWOJ-LOGIN.github.io/budzet/`

## Instalacja na telefonie (Android)

1. Otwórz ten adres w **Chrome** na telefonie.
2. Menu **⋮** → **Zainstaluj aplikację** (lub **Dodaj do ekranu głównego**).
3. Na ekranie pojawi się ikona „zł”. Od teraz aplikacja działa także bez internetu.

## Codzienne używanie

- **Początek miesiąca:** „Utwórz budżet” → wpisz, ile pieniędzy jest na każdym koncie (Ja / Żona) → stuknij kategorię i wpisz plan. Gdy „Do rozdysponowania” pokazuje 0 zł, wszystko jest rozdzielone.
- **Wydatek:** zielony przycisk **+** → kwota → kategoria → czyje pieniądze → Dodaj. Kwota schodzi z kategorii i z konta naraz.
- **Wpływ / Przelew:** w tym samym okienku (zakładki u góry) albo po stuknięciu konta.
- **Kolejny miesiąc:** strzałka **›** → „Utwórz budżet” – stan kont przechodzi automatycznie, plan można skopiować.

## Raport dla żony / kopia zapasowa

- **📤 Wyślij raport** (Historia lub Ustawienia) tworzy jeden plik `.html`. Wybierz Gmail/pocztę i wyślij sobie.
- Na komputerze otwórz załącznik dwuklikiem – w przeglądarce zobaczysz cały budżet (wszystkie miesiące) w trybie podglądu.
- Ten sam plik to **kopia zapasowa**: na nowym telefonie zainstaluj aplikację i wybierz „Wczytaj z pliku”.
- **📊 Excel** – plik .xlsx z podsumowaniem miesiąca i listą operacji.

## Ważne

- Dane są tylko w telefonie. **Odinstalowanie aplikacji lub wyczyszczenie danych Chrome usuwa je** – dlatego wysyłaj raport co jakiś czas (aplikacja przypomni po 14 dniach).
- Aktualizacja aplikacji: podmień pliki w repozytorium i w `sw.js` zmień `budzet-v1` na `budzet-v2`. Telefon pobierze nową wersję przy kolejnym uruchomieniu (dane zostają).
