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

## Wykorzystane technologie:
### FrontEnd
* React.js (react-icons, react-router-dom, styled-components, jwt-decode, nelmio/cors)
* Node.js
* ES7
* npm
* Visual Studio Code
### BackEnd
* Symfony (api-platform, doctrine, lexik/jwt-auth, monolog, security, profiler, maker)
* Composer
* Laragon
* PHP w wersji >= 7.4
* PhpStorm 

## Instrukcje uruchamiania systemu

Do poprawnego działania pobranego projektu wymagane jest posiadanie zainstalowanego na urządzeniu **node.js**, **Composer** i **Laragon**.

### Instalacja
1. Po pobraniu projektu na urządzeniu należy w folderze ``front_end`` uruchomić komednę:
```
npm install
```
2. Następnie należy przejść do folderu ``blogApi`` i wykonać następujące komendy.

Pobieranie zależności:
```
composer install
```
Generowanie kluczy:
```
php bin/console lexik:jwt:generate-keypair
```
3. Należy ustawić ścieżkę informującą **Laragon** o lokalizacji folderu projektu.
 
4. Po włączeniu Laragona należy utworzyć pusta bazę danych poprzez zakładkę _Database_.
   - Nazwa użytkownika, nazwa bazy danych oraz hasło są konfigurowalne w pliku ``.env``. 

5. Po stworzeniu bazy danych należy wykonać poniższą komendę w folderze ``blogApi`` w celu stworzenia szkieletu bazy danych.
```
php bin/console doctrine:schema:update --force
```

### Uruchomienie
1. W celu uruchomienia backendu wystarczy uruchomić program Laragon klikając przycisk ***Start All***.

2. W celu uruchomienia lokalnego serwera frontu należy w folderze ''front_end'' wykonać komendę:
```
npm start
```
