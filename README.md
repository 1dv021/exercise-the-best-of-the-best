# De bästa av de bästa

- C-nivå
- [GitBook](https://coursepress.gitbooks.io/1dv021/content/ovningsuppgifter/del1/de-basta-av-de-basta/)

>__VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbooks.io/1dv021/content/guider/att-komma-igang-med-en-ovningsuppgift/) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

Hämta hem övningsuppgiftens repo och lägg tillen .gitignore-fil. Öppna filen `winner.js` och komplettera funktionerna `getFrequenciesOfNames`, `getMostFrequentNames` och `sortNamesAscending`.

I denna uppgift finns fyra funktioner varav du ska komplettera tre av dem. Den fjärde är tänkt att i slutändan anropa de tre tidigare för att få ett slutresultat.

Bland kursledarna finns en återkommande tävling där vinnarens namn i varje omgång läggs in i en array.

```js
// Exempel
['mats', 'John', 'john', 'Johan', 'Jacob']
```

Själva applikationen går ut på att utifrån en liknande array avgöra antalet förekomster av varje namn, sedan flitrera ut de namn med flest förekomster för att avgöra vinnaren/vinnarna och presentera dessas namn i en array som sorterats i bokstavsordning.

För att lösa detta problem används alltså fyra olika funktioner, varav tre behöver kompletteras. Samtliga funktionen ska vara så kallade "pure functions", d.v.s. vara helt utan sidoeffekter.

## Funktioner

### getFrequenciesOfNames

Funktionen analyserar en array och försöker avgöra förekomsten av namnen (_"case-insensitiv"_ - d.v.s. stor eller liten bokstav i början av namnet ska inte spela roll). Resultatet ska vara på en viss form vilket framgår av kommentarerna i koden. Uppbyggnaden av objekten kan vara lite konstig då namnen används som nyckel. Det är dock för att förenkla programmeringen i uppgiften då det handlar om hantering av en frekvenstabell.

Du ska även implementera viss felhantering, innebärande att undantag kastas om fel inträffar. Om argumentet som skickas till funktionen inte är av typen Array som enbart innehåller strängar ska ett undantag av typen `TypeError` kastas med meddelandet `The argument passed must be an array of strings.`.

```js
const winner = require('./src/winner')

let obj = winner.getFrequenciesOfNames(['mats', 'John', 'john', 'Johan', 'Jacob'])

// obj should be:
// { mats: 1, john: 2, johan: 1, jacob: 1 }
```

### getMostFrequentNames

Funktionen tar ett objekt i samma form som funktionen `getFrequenciesOfNames` returnerar, sorterar denna och returnerar en array innehållande de namn som förekommer flest gånger.

```js
const winner = require('./src/winner')

let obj = { mats: 1, john: 2, johan: 1, jacob: 1 }

let arr = winner.getMostFrequentNames(obj)

// arr should be:
// ['john']
```

### sortNamesAscending

Tar en array med strängar och sorterar i stigande ordning.

```js
const winner = require('./src/winner')

let source = ['john', 'johan', 'jacob']
let arr = winner.sortNamesAscending(source)

// arr should be:
// ['jacob', 'johan', 'john']
```

### getNamesOfWinners

Funktionen fungerar och kommer att ge gröna tester när du väl implementerat
de tre funktionerna ovan.

## Tips

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).

Funktioner, metoder, etc. som _kan_ komma till användning beroende hur du väljer att lösa uppgiften.

- [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Array.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
- [Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [String.toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

## Lösningsförslag

- [https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/the-best-of-the-best](https://github.com/1dv021/exercise-solution-proposals/tree/master/part-1/the-best-of-the-best)
