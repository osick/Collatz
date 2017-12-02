# Collatz

This small library helps to calculate Collatz sequences with nodejs. Using the big-integer nodejs library this computations can be donde for arbitrary large numbers (examples see below).

---

## Quick start
### Installation


```sh
git clone https://github.com/osick/Collatz
cd Collatz
npm install
```

### First running example

```sh
cd examples
nodejs example.js
```
___

## Mathematical Background

Collatz sequences n<sub>k</sub> are defined for k>=0 as follows:

1. Choose an initial number n<sub>0</sub>&gt;1
2. For k>=0 
  * if n<sub>k</sub> is even then n<sub>k+1</sub>=n<sub>k</sub>/2 
  * else n<sub>k+1</sub>=3*n<sub>k</sub>+1

For example choose 
n<sub>0</sub> = 7 then  
n<sub>1</sub>  = 22  
n<sub>2</sub>  = 11  
n<sub>3</sub>  = 34  
n<sub>4</sub>  = 17  
...  
n<sub>14</sub> =  8  
n<sub>15</sub> =  4  
n<sub>16</sub> =  2  
n<sub>17</sub> =  1  
n<sub>18</sub> =  4    
and so on  

The Collatz Conjecture now is that for any initial number n<sub>0</sub> there is a k>0 s.t. n<sub>k</sub> = 1.
This conjecture is still open for more than 60 years. For more information see the [Wikipedia on Collatz Conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture) .

***

## Usage
### `init()`

```javascript
var Collatz = require('collatz.js').Collatz;  
// integer input is supported
var collatz = new Collatz(17);
collatz.init();
// big-integer is supported
var collatz_2 = new Collatz(bigInt(2).pow(5000).add(1));
collatz_2.init();
// strings of digits are supported, e.g.
var collatz_3 = new Collatz("612736124162374123874373678123461782346187293461782347823645");
collatz_3.init();
```


#### `number()` : Set the initial number
```javascript
var collatz = new Collatz("17");
collatz.number("12");
// Now 12 is the initial number "17"
```

#### `toString()` : Returns the initial number
```javascript
var collatz = new Collatz("17");
collatz.toString();
// Output string "17"
```

####  `length()` : Return the length of the Collatz sequence until reaching 1
```javascript
collatz.number("17");
collatz.length();
//Output 12
```

####  `stoppingTime()` : Return the stopping time
```javascript
collatz.number("17");
collatz.stoppingTime(); 
//Output 3
```

####  `sequence()` : Return the Collatz sequence starting from the initial value
```javascript
collatz.number("17");
collatz.sequence();
//computes the sequence [52,26,13,40,20,10,5,16,8,4,2,1,52,26,13,40,20,10,5,16,8,4,2,1,52,26,13,40,20,10,5,16,8,4,2,1]
```

#### Method `lengths(m,s)` : Return an array of lengths m starting from the initial and with stepsize s
```javascript
collatz.number("17");
collatz.lengths(20,1).toString();
//Output string "0,20,7,7,15,15,10,23,10,111,18,18,18,106,5,26,13,13,21,21"
```

#### Method `stoppingTimes(m,s)` : Return an array of stopping times m starting from the initial and with stepsize s
```javascript
collatz.number("17");
collatz.stoppingTimes(30,2).toString(); 
//Output string "6,3,8,3,96,3,91,3,6,3,13,3,8,3,88"
```

## Dependencies
- [big-integer](https://www.npmjs.com/package/big-integer)  NodeJS module

## License
- [MIT](https://github.com/electron/electron/blob/master/LICENSE)
