# EatAndGoTorii 
Torii Academy Team Project - Eat&amp;Go App using Foursquare and Google Maps APIs

## Konfiguracja deweloperska (localhost)
Na początku musimy postawić node.js https://nodejs.org/en/, jeśli go jeszcze nie mamy. 

otwieramy konsole na folderze repo (Shift + right click) i wpisujemy polecenia: 
```
npm install 
```
zaciągnie nam wszystkie paczki które mamy w pliku package.json

następnie należy dodać wpis eatandgo.localhost w pliku hosts
```
127.0.0.1  eatandgo.localhost
```

```
npm run develop
```
uruchamia stronę pod adresem http://eatandgo.localhost:9000/. Jeśli jest potrzeba zmiany portu, to mamy taką możliwość modyfikując EatAndGoTorii\config\webpack.config.dev.js

```
const PORT = 9000;
```

# Zasady korzystania z GIT w repozytorium EatAndGoTorii 

### Na branchu MASTER mogą znajdować się jedynie zmiany przeznaczone do bieżącego deploymentu

1. Pracę zaczynamy od stworzenia Brancha z ficzerem.
2. Przed commitem i pushem należy wykonać pull na branchu.
3. Opis commita powinien zawierać w treści zawartość zmian jakie  wrzucamy.
4. Nie wkomitowujemy plików automatycznie generowanych przez webpacka z podkatalogu /dist.
5. Przed pushem do brancha develop lub master należy wykonać pull request.
6. W nazwie pull requestu wpisujemy nazwę ficzera, który chcemy merge'ować.
7. Osoba akceptująca pull requestu odpowiedzialna jest za wykonanie code review zmian.
8. W przypadku konfliktów uzgadniamy ostateczną wersję z członkami zespołu.
