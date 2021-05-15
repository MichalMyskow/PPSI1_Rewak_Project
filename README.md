# PPSI1_Rewak_Project

> Strona NIE wspiera Internet Explorer'a;

[Dla ułatwienia plik README.md będzie napisany po polsku]

## Cel Projektu

Celem projektu jest stworzenie szkieletu prostej stronki blogowej, której treść/zawartość nie wymaga sprecyzowania. Projekt zakłada stworzenie strony, której zawartość udostępnić może jedynie administrator. W celu ułatwienia pozyskiwania materiału przykładowego, projekt powstanie jako witryna poświęcona filmom i serialom.

## Funkcje strony

* Slajder
* Responsywny Navbar
* Stopka zawierająca "kontakt"
* Specjalną zakładkę dla uprawnionego użytkownika
* Możliwość utworzenia nowego konta
* Możliwość zalogowania się i wylogowania
* Aplikacja identyfikuje zalogowanego użytkownika

## Wybrane technologie:
### FrontEnd
* REACT.js (react-icons, react-router-dom, styled-components, jwt-decode)- JavaScript
### BackEnd
* Symphony - PHP

## Instrukcja 

Do poprawnego działania pobranego projektu wymagane jest posiadanie zainstalowanego na urządzeniu **node.js** i **composer**.

1. Po pobraniu projektu na urządzenie należy w folderze _front_end_ wykonać komednę:
```
npm install
```
2. Następnym krokiem jest zainstalowanie aplikacji ***Laragon***, która umożliwi komunikację front_end'u z back_end'em.
3. Po instalacji ***Laragona*** należy ustawić mu ścieżkę informującą go o lokalizacji folderu projektu.
4. Po wykonaniu tych kroków należy ponownie wejść do terminala w lokalizacji folderu _front_end_ i wykonać komedę, która "włączy" stronę projektu:
```
npm start
```
