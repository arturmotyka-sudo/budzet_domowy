# Budżet domowy – aplikacja na telefon

**Wersja 2.9** · prosta aplikacja do planowania wydatków metodą „kopertową”: wszystkie pieniądze rozdzielasz na kategorie, aż bilans pokaże 0 zł. Działa bez internetu, dane są zapisane **tylko w Twoim telefonie**, chronione PIN-em.

Pełna instrukcja obsługi jest w aplikacji, w zakładce **❓ Pomoc**.

## Pliki w repozytorium

| Plik | Do czego |
|---|---|
| `index.html` | cała aplikacja |
| `sw.js` | działanie bez internetu i aktualizacje |
| `version.json` | numer najnowszej wersji i lista zmian (sprawdzany w Pomoc → Aktualizacja) |
| `manifest.webmanifest` | nazwa, kolory i ikony aplikacji na telefonie |
| `moneta-192.png`, `moneta-512.png`, `moneta-maskable.png` | ikona – złota moneta |
| `xlsx.full.min.js` | eksport do Excela |
| `README.md` | ten opis |

Stare pliki `icon-192.png`, `icon-512.png`, `icon-maskable.png` nie są już używane – można je usunąć.

## Pierwsza instalacja

**Na komputerze (jednorazowo):**
1. Na github.com utwórz **publiczne** repozytorium (np. `budzet_domowy`). Publiczny jest tylko kod – Twoje dane nigdy tam nie trafiają.
2. **Add file → Upload files** → przeciągnij wszystkie pliki z tabeli powyżej → **Commit changes**.
3. **Settings → Pages** → Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)** → **Save**.
4. Po 1–2 minutach aplikacja działa pod adresem `https://TWOJ-LOGIN.github.io/NAZWA-REPOZYTORIUM/`.

**Na telefonie (Android):**
1. Otwórz ten adres w **Chrome** → menu **⋮** → **Zainstaluj aplikację**.
2. Przy pierwszym uruchomieniu ustaw **PIN** (4–6 cyfr), potem konta i kategorie.

## Aktualizacja (dane zostają)

Kwoty są w pamięci telefonu, nie w plikach na GitHubie – podmiana plików ich nie rusza. Warunek: ten sam adres strony (nie zmieniaj nazwy repozytorium ani loginu).

1. Na GitHubie: **Add file → Upload files** → przeciągnij nowe pliki → **Commit changes** (pliki o tych samych nazwach zostaną nadpisane).
2. Odczekaj 2–3 minuty.
3. W aplikacji: zakładka **❓ Pomoc → Aktualizacja** → **Aktualizuj**. Gdy jest nowa wersja, na zakładce Pomoc widać czerwoną kropkę.

Numer wersji jest w trzech miejscach i musi być wszędzie taki sam: `APP_VERSION` w `index.html`, `version` w `version.json`, `CACHE` w `sw.js`.

Ikonę na ekranie głównym Chrome podmienia sam, ale z opóźnieniem (do doby; telefon na ładowarce i w Wi-Fi). Szybciej: wyślij raport (kopię), odinstaluj aplikację, zainstaluj ponownie i w razie potrzeby wczytaj raport.

## Najważniejsze funkcje (skrót)

- **Bilans do zera** – „Pozostało do rozdysponowania” pokazuje, ile pieniędzy nie ma jeszcze przydziału.
- **Wydatki, wpływy, przelewy** – zielony przycisk **+**.
- **Zaplanowane płatności** (czerwone, np. zlecenia stałe) i **spodziewane wpływy** – rezerwują pieniądze w budżecie; na koncie zmieniają stan dopiero po **✓ Zapłacone / ✓ Wpłynęło**.
- **Powtarzanie** co miesiąc / co rok (pensja, czynsz, ubezpieczenie, przegląd) i jednorazowe kopiowanie na następny miesiąc lub za rok.
- **Przenoszenie salda** – stan kont z końca miesiąca (także minus) sam przechodzi na kolejny; możliwa korekta, gdy stan w banku jest inny.
- **Plan na rok do przodu** – jeden przycisk tworzy 12 kolejnych budżetów; zmiany planu i powtarzających się pozycji: tylko ten miesiąc albo ten i kolejne.
- **Ikony kategorii** dobierane automatycznie po nazwie (słownik ~60 ikon), z możliwością zmiany.
- **Raport** – jeden plik HTML do wysłania mailem: na komputerze podgląd całego budżetu, na telefonie kopia zapasowa (**Wczytaj z pliku**).
- **Excel** – podsumowanie miesiąca i lista operacji.
- **Czyszczenie miesiąca** z potwierdzeniem PIN-em.
- **Motyw** jasny / ciemny / automatyczny.

## Ważne

- Dane są tylko w telefonie. **Odinstalowanie aplikacji lub wyczyszczenie danych Chrome może je usunąć** – wysyłaj raport regularnie (aplikacja przypomina po 14 dniach).
- PIN chroni przed podejrzeniem przez osobę z telefonem w ręku, ale nie szyfruje danych. Zapomniany PIN = usunięcie danych z telefonu i wczytanie ostatniego raportu.

## Historia wersji

- **2.9** – napis „Pozostało do rozdysponowania” nad kwotą (zielony), bez powtórzenia pod kwotą.
- **2.8** – żywy zielony kolor kwoty do rozdysponowania, komunikat „Do rozdysponowania pozostało”.
- **2.7** – przenoszenie salda między miesiącami, plan na 12 miesięcy do przodu, korekty „tylko ten / ten i kolejne”, zmiana ikony z kategorii, aktualizacja w zakładce Pomoc.
- **2.6** – automatyczne ikony kategorii i wybór ikony z listy.
- **2.5** – czyszczenie miesiąca z potwierdzeniem PIN-em.
- **2.4** – nowe nazwy plików ikony (złota moneta).
- **2.3** – konta pokazują rzeczywiste pieniądze, linijka „po zaplanowanych”.
- **2.2** – pewniejsze wpisywanie PIN-u.
- **2.1** – zakładka Pomoc z instrukcją.
- **2.0** – motyw, zaplanowane płatności, powtarzanie, PIN, ikona monety, aktualizacje.
- **1.0** – pierwsza wersja: budżet kopertowy, raport, Excel, działanie offline.
