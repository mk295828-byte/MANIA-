# Łapka — planer badań zwierząt

Polska aplikacja webowa do planowania badań, kosztów i rocznego budżetu wielu zwierząt. Plan roczny, profile zwierząt, statusy badań, porównanie kosztów oraz eksport JSON. Dane są zapisywane w localStorage przeglądarki; aplikacja nie wymaga konta ani backendu danych. Dane nie synchronizują się między urządzeniami. Eksport pozwala wykonać kopię danych; import nie jest obecnie dostępny.

## Uruchomienie

Wymagany Node.js 20 lub nowszy. Bez instalowania zależności.

```sh
npm start
```

Serwer nasłuchuje na porcie 3000 (można ustawić zmienną PORT).

```sh
npm test
```

Testy sprawdzają obliczenia prognozy, saldo budżetu, oszczędności i anulowane badania. W interfejsie dodaj zwierzę, ustaw budżet i zaplanuj badanie. Zaznacz wykonanie, podaj datę i koszt, aby zobaczyć porównanie wyceny.

Czerwony kolor wskazuje przekroczenia, zielony wolny budżet lub oszczędności. Kwoty obliczane są w groszach. Fonty Google są opcjonalne; bez sieci aplikacja używa fontów systemowych.
