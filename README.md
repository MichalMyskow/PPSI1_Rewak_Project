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

## Realizacja wymagań

1. **HTML** - realizowany przy użyciu biblioteki React. Większość projektu jest zakodowana z wykorzystniem ``styled-components``.
2. **CSS** - realizowany przy pomocy biblioteki React w plikach ``*.elements.js`` (paczka ``styled-components``).
![image](https://user-images.githubusercontent.com/72625642/118408780-4e928f00-b687-11eb-8541-989b33cd7d81.png)
3. **Formularze** - przekazanie informacji do aplikacji zostało zrealizowane poprzez zamieszczenie w aplikacji możliwości stworzenia nowego użytkownika wraz z zamieszczeniem go na liście użytkowników w bazie danych.
![image](https://user-images.githubusercontent.com/72625642/118408618-ada3d400-b686-11eb-91de-2900de7eaf7e.png)

4. **Baza danych** - Symfony zapewnia wszystkie narzędzia do korzystania z baz danych dzięki zestawowi bibliotek Doctrine. Aplikacja umożliwia połączenie z zewnętrzną bazą danych MySQL, dzięki programowi Laragon, konfiguracji pliku .env oraz instalacji pakietu Doctrine. 

5. **Router** - routing został zostosowany przy pomocy reactowej biblioteki ``react-router-dom``; jest to bibliotek zawierająca zbiór komponentów nawigacyjnych, dzięki którym jest możliwe ustawienie routingu.

![image](https://user-images.githubusercontent.com/72625642/118409624-a16e4580-b68b-11eb-9cde-96080b7be678.png)

6. **Uwierzytelnianie** - w celu uwierzytenienia skorzystaliśmy ze standardu JWT(JSON Web Token) opartym o tokeny. Po akcji logowania po stronie serwera sprawdzane są dane użytkownika i jeśli są poprawne tworzony jest token. Token zostaje zwrócony do klienta i umożliwia akcje wymagające posiadania tokenu. W wykonanym przez nas projekcie skorzystaliśmy z pakietu "LexikJWTAuthenticationBundle". Pozwala on na konfigurację danych wymaganych do uwierzytelnienia, czasu wygaśnięcia tokenów oraz ustawienia ścieżek kontroli dostępu. Drugim zabezpieczeniem naszej aplikacji są role przyznawane przy rejestracji użytkownika lub przydzielane przez administratora. Umożliwiają one dostęp do konkretych działań na danych obiektach oraz blokują dostęp do wybranych danych użytkownikom bez roli administratora [ROLE_AUTHOR]. Każdy zarejestrowany użytkownik otrzymuje role '[ROLE_USER]'.

7. **MVC** - Symfony opiera się na klasycznym wzorcu projektowania znanym jako MVC, który składa się z trzech poziomów: 
   - Modelu który reprezentuje informacje, na których działa aplikacja.
   - Widoku który renderuje model na stronę internetową odpowiednią do interakcji z użytkownikiem.
   - Kontrolerze który reaguje na działania użytkownika i wywołuje odpowiednie zmiany w modelu lub widoku.

W wykonanym przez nas projekcie za kontroler uznajemy wewnętrzne mechanizmy zawarte w API Platform, które korzystają z modelu do pobrania lub zapisu danych w bazie danych poprzez ORM. Za model uznajemy encje zawierające wszystkie dane oraz informacje o zapisie ich w bazie danych. Za widok uznajemy dane w formacie np.JSON stworzone poprzez serializację (normalizację) które następnie przesyłane są do klientów poprzez odpowiedź HTTP.

8. **CRUD** - Do udostępnienia operacji dodawania, edycji i usuwania rekordów z bazy danych skorzystalismy z biblioteki API Platform Core zintegrowanym z frameworkiem Symfony. API Platform Core opiera się na koncepcji operacji. Operacje można zastosować do uwidocznienia zasobów poprzez interfejs API. API Platform automatycznie rejestruje typowe operacje CRUD i opisuje je w udostępnionej dokumentacji(Hydra i Swagger). Operacje podzielone są na dwie grupy: kolekcji oraz pojedynczego zasobu i można je konfigurować w encji danego zasobu.

9. **ORM** - system mapowania relacyjno-obiektowego dostarczył nam zestaw bibliotek PHP do pracy z bazami danych o nazwie Doctrine. Jest to model typu "Data mapper" w którym encje są po prostu zwykłymi obiektami PHP zawierającymi adnotacje będące prostymi znacznikami dostarczającymi Doctrine danych o klasie.

10. **Wystawienie API** - do wystawienia i opisu udokumentowanych adresów URL użytych w API wykorzystalismy zestaw narzędzi o nazwie Swagger(OpenAPI), który jest częścią biblioteki API Platform Core. Swagger to ekosystem narzędzi służący do tworzenia interfejsów API ze specyfikacją OpenAPI oraz wizualizację zasobów aplikacji.

11. **Konsumowanie API** - konsumowanie API jest realizowane przy pomocy komendy fetch biblioteki React. W naszym projekcie wykorzystujemy ja przy, miedzy innymi, wylkistowaniu zawartoścci artykułów i, w przypadku konta admina, do wyświetlenia wszystkich obecnych w bazie danych użytkowników.

![image](https://user-images.githubusercontent.com/72625642/118409212-88fd2b80-b689-11eb-99b6-8940b92866ad.png)

12. **AJAX** - realizowany przy pomocy biblioteki React

![image](https://user-images.githubusercontent.com/72625642/118409662-e09c9680-b68b-11eb-98f1-7bd88a94d17d.png)

13. **Nieobecny**

14. **Nieobecny**

15. **RWD** - (responsywność/responsivity) - realizowane przy pomocy odpowiednich znaczników w plikach ``*.elements.js`` odpowiadających za stylizowanie CSS.

![image](https://user-images.githubusercontent.com/72625642/118408825-7aae1000-b687-11eb-949e-bc2e19160be4.png)

16. **Logger** - W celu umożliwienia logowania akcji w aplikacji skorzystalismy z biblioteki PHP o nazwie "Monolog". Umożliwia ona tworzenie i przechowywanie komunikatów dziennika na przykład w pliku ``var/log``.

17. **Nieobecny**

18. **System zażądzania zależnościami** - w części Front_end zań odpowiada program node.js (npm oraz npx), po stronie BackEndu użyliśmy narzędzia o nazwie "Composer". Pozwala on na deklaracje bibliotek, które są potrzebne w danym projekcie i pozwala na zarządzanie nimi (instalowanie / aktualizowanie) automatycznie. 

19. **Automatyzacja** - zrealizowana przy pomocy React; React używa “pod maską” kilku sprytnych sztuczek, dzięki którym może zminimalizować liczbę kosztownych operacji na modelu DOM potrzebnych do zaktualizowania interfejsu. W wielu aplikacjach użycie Reacta powinno zapewnić satysfakcjonującą szybkość interfejsu bez stosowania wielu skomplikowanych optymalizacji wydajnościowych.

20. **SEO** - ideologia SEO jest realizowana poprzez zastosowanie odpowiedniej treści, linków oraz technologii. Zastosowane zostały także tagi <meta> z wartościami: author, keywords oraz description. 

![image](https://user-images.githubusercontent.com/72625642/118409420-9961d600-b68a-11eb-9e86-8cc5e0959421.png)
 
