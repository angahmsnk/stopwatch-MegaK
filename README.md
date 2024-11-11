# Projekt Stopwatch

Założenia:
- [x] przygotować repo na github
- [x] stworzyć nowy projekt przy pomocy Vite korzystając z TypeScript
- [x] Przygotować komponent odpowiadający za wyświetlanie czasu sformatowanego w sposób mm:ss:ms
- [x] Strona ma zawierać dwa liczniki - jeden odpowiadający za łączny liczony czas, a drugi odmierzający czas
aktualnego okrążenia
- Cztery przyciski
  - [x] Start - rozpoczyna odliczanie w obydwu licznikach - każdy zwiększa swoją wartość co 0,1 sekundy - zdecydowałem, że czas będzie podawany z dokładnością do 0,01s - tak jak reprezentuje to prawdziwy stoper (aplikacja jest mała, nie ma problemów z wydajnością)
  - [x] Stop:
    - [x] zatrzymuje działanie liczników
    - [x] po naciśnięciu na stop liczniki oraz tabela zostają ukryte, zamiast nich pojawia się podsumowanie z łącznym czasem, średnim czasem okrążenia, najszybszym okrążeniem, najwolniejszym okrążeniem i łączną liczbą okrążeń
  - [x] Reset - Resetuje cały proces - resetuje stan liczników do 0 bez zatrzymywania - cały czas odliczają, czyszczona jest również tablica okrążeń
  - [x] Lap - resetuje licznik określający czas okrążenia i dodaje informację o numerze okrążenia i jego czasie do tabeli wyników, główny licznik cały czas liczy!
- [x] Przyciski powinny mieć różne kolory - w zależności od istotności danej akcji którą przycisk wykonuje
- [x] Aplikacja powinna być podzielona na komponenty (przykład komponentów został podany w dokumentacji do ćwiczenia, jednak wykonałem nieco inny podział)
- [x] Strona powinna być ostylowana w dowolny sposób - wykorzystano SCSS
- [x] Aplikacja powinna działać dobrze z włączonym StrictMode