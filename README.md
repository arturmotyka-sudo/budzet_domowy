# Budżet domowy – aplikacja na telefon

**Wersja 4.3** · prosta aplikacja do planowania wydatków metodą „kopertową”: wszystkie pieniądze rozdzielasz na kategorie, aż bilans pokaże 0 zł. Działa bez internetu, dane są zapisane **tylko w Twoim telefonie**, chronione PIN-em.

Pełna instrukcja obsługi jest w aplikacji, w zakładce **❓ Pomoc**.

## Pliki w repozytorium

| Plik | Do czego |
|---|---|
| `index.html` | cała aplikacja |
| `sw.js` | działanie bez internetu i aktualizacje |
| `version.json` | numer najnowszej wersji i lista zmian (sprawdzany w Pomoc → Aktualizacja) |
| `manifest.webmanifest` | nazwa, kolory i ikony aplikacji na telefonie |
| `coin-192.png`, `coin-512.png`, `coin-maskable.png` | ikona – złota moneta z symbolem $ |
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
2. Przy pierwszym uruchomieniu ustaw **PIN** (4–6 cyfr) albo wybierz „Bez PIN-u” (można go włączyć później w Ustawieniach), potem konta i kategorie, a na koniec utwórz pierwszy miesiąc – kolejne 13 utworzą się same.

## Aktualizacja (dane zostają)

Kwoty są w pamięci telefonu, nie w plikach na GitHubie – podmiana plików ich nie rusza. Warunek: ten sam adres strony (nie zmieniaj nazwy repozytorium ani loginu).

1. Na GitHubie: **Add file → Upload files** → przeciągnij nowe pliki → **Commit changes** (pliki o tych samych nazwach zostaną nadpisane).
2. Odczekaj 2–3 minuty.
3. W aplikacji: zakładka **❓ Pomoc → Aktualizacja** → **Aktualizuj**. Gdy jest nowa wersja, na zakładce Pomoc widać czerwoną kropkę.

Numer wersji jest w trzech miejscach i musi być wszędzie taki sam: `APP_VERSION` w `index.html`, `version` w `version.json`, `CACHE` w `sw.js`.

Ikonę na ekranie głównym Chrome podmienia sam, ale z opóźnieniem (do doby; telefon na ładowarce i w Wi-Fi). Szybciej: wyślij raport (kopię), odinstaluj aplikację, zainstaluj ponownie i w razie potrzeby wczytaj raport.

## Najważniejsze funkcje (skrót)

- **Układ ekranu Budżet** – Na kontach · 💵 Wpływy (spodziewane i otrzymane) · 🧾 Płatności o znanej kwocie (podatek, czynsz, prąd; do zapłaty i zapłacone) · 🛒 Wydatki z limitem (np. Życie 2000 zł, dopisujesz wydatki i widzisz, ile zostało).
- **Bilans do zera** – „Pozostało do rozdysponowania” pokazuje, ile pieniędzy nie ma jeszcze przydziału. Plan kategorii wpisujesz jako limit (np. Życie) albo zostawiasz pusty – wtedy liczy się automatycznie z pozycji (np. podatek, prąd).
- **Wydatki, wpływy, przelewy** – zielony przycisk **+**.
- **Zaplanowane płatności** (czerwone, np. zlecenia stałe) i **spodziewane wpływy** – rezerwują pieniądze w budżecie, ale nie liczą się do „Wydane” ani do stanu konta, dopóki nie stukniesz **✓ Zapłacone / ✓ Wpłynęło**.
- **Powtarzanie** wybierane przy każdej pozycji: co miesiąc, co 2 miesiące, co kwartał, co pół roku, co rok (pensja, czynsz, prąd, ubezpieczenie, przegląd), z korektą kwoty w pojedynczym miesiącu; do tego jednorazowe kopiowanie na następny miesiąc lub za rok.
- **Przenoszenie salda** – stan kont z końca miesiąca (także minus) sam przechodzi na kolejny; możliwa korekta, gdy stan w banku jest inny.
- **Budżety na 13 miesięcy do przodu** – tworzą się same; każdy nowy miesiąc powstaje na wzór tego samego miesiąca rok wcześniej (plan, wpływy, zaplanowane wydatki, poprawki „tylko w tym miesiącu”).
- **Korekty** – zmiany planu i powtarzających się pozycji: tylko ten miesiąc, tu i co rok w tym miesiącu, albo ten i wszystkie kolejne.
- **Ikony kategorii** dobierane automatycznie po nazwie (słownik ~60 ikon), z możliwością zmiany; nową kategorię dodasz też prosto z okienka wydatku.
- **Raport** – jeden plik HTML do wysłania mailem: na komputerze podgląd całego budżetu, na telefonie kopia zapasowa (**Wczytaj z pliku**).
- **Historia** – najnowsze dodane/edytowane na górze; wyszukiwarka po wszystkich miesiącach.
- **Rozliczenie** – stuknij kartę bilansu, żeby zobaczyć, skąd biorą się kwoty.
- **Excel** – podsumowanie miesiąca i lista operacji.
- **Usuwanie pozycji** – przesuń w lewo na ekranie Budżet albo 🗑 w edycji.
- **Czyszczenie miesiąca** z potwierdzeniem PIN-em.
- **Kolory stanu konta** – czerwony do 500 zł, pomarańczowy do 1 500 zł, zielony powyżej (progi w Ustawieniach).
- **Polecanie** – Ustawienia → Poleć aplikację (mail, komunikator, kopiuj link); odbiorca dostaje pustą aplikację, Twoje dane zostają u Ciebie.
- **Motyw** jasny / ciemny – przycisk w prawym górnym rogu.

## Ważne

- Dane są tylko w telefonie. **Odinstalowanie aplikacji lub wyczyszczenie danych Chrome może je usunąć** – wysyłaj raport regularnie (aplikacja przypomina po 7 dniach).
- PIN można wyłączyć i włączyć w Ustawieniach. PIN chroni przed podejrzeniem przez osobę z telefonem w ręku, ale nie szyfruje danych. Zapomniany PIN = usunięcie danych z telefonu i wczytanie ostatniego raportu.

## Historia wersji

- **4.8** – przy „Brakuje …” przycisk „✂️ Zdejmij z zaplanowanej kwoty” (wybierasz płatność albo limit, z którego zdjąć brakującą kwotę, z „Cofnij”); komunikat pod bilansem bez tła; przy nowym wydatku wybór „Zdejmij z zaplanowanej kwoty”.
- **4.7** – stonowany czerwony (bez pomarańczowego odcienia); szybka korekta stanu konta („− Odejmij” / „+ Dodaj”); w polach kwot można wpisać działanie, np. 185,09-9,20.
- **4.6** – żywszy czerwony kolor kwot i oznaczeń; przy „Aktualizacja” w Pomocy widać bez rozwijania, czy jest nowa wersja; sprawdzanie aktualizacji także po powrocie do aplikacji; w kafelku konta lista jego operacji do poprawiania i przycisk „− Wydatek”.
- **4.5** – przypomnienie o kopii (raporcie) po 7 dniach zamiast 14.
- **4.4** – przesunięcie w lewo usuwa od razu (z „Cofnij”), przesunięcie zaplanowanej pozycji w prawo przenosi ją na kolejny miesiąc / za 2–3 miesiące / za rok; nowa ikona – złota moneta z symbolem $.
- **4.3** – polecanie aplikacji: link z instrukcją mailem, komunikatorem lub do skopiowania.
- **4.2** – kolory stanu konta (czerwony / pomarańczowy / zielony) z progami w Ustawieniach.
- **4.1** – wszystkie kwoty z odstępem tysięcy (1 000,00 zł).
- **4.0** – usuwanie przesunięciem w lewo na ekranie Budżet, 🗑 w edycji, „Na kontach” pod bilansem, naprawa porządkowania usuniętych kategorii.
- **3.9** – nowy układ: Wpływy · Płatności (znane kwoty) · Wydatki z limitem; bez dublowania kategorii.
- **3.8** – historia wg kolejności dodania (najnowsze na górze) i wyszukiwarka; osobne listy spodziewanych wpływów i zaplanowanych wydatków; bez dublowania kategorii; rozliczenie „skąd te kwoty”; usuwanie kategorii z przeniesieniem lub usunięciem operacji.
- **3.7** – plan automatyczny: kategoria bez wpisanego planu ma plan równy sumie swoich pozycji.
- **3.6** – czytelny opis kategorii bez planu i „ponad plan o …”; przycisk „Ustaw plan = wydane + zaplanowane”.
- **3.5** – dodawanie nowej kategorii prosto z okienka wydatku.
- **3.4** – motyw tylko jasny/ciemny (przycisk na górze), wyłączanie i włączanie PIN-u w Ustawieniach.
- **3.3** – „Wydane” to tylko zapłacone kwoty; zaplanowane pokazane osobno („do zapłaty”), kreskowany pasek w kategorii.
- **3.2** – budżety na 13 miesięcy do przodu; nowy miesiąc powstaje na wzór tego samego miesiąca rok wcześniej (plan, wpływy, zaplanowane wydatki, poprawki); przy zmianach nowa opcja „tu i co rok w tym miesiącu”.
- **3.1** – budżety tworzą się same na bieżący miesiąc i 12 kolejnych (saldo, plan, powtarzające się pozycje); nowy miesiąc dobudowuje się automatycznie.
- **3.0** – powtarzanie co miesiąc / co 2 miesiące / co kwartał / co pół roku / co rok, podgląd miesięcy, lista pozycji w przyszłym miesiącu; usunięty przycisk „12 miesięcy do przodu”.
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