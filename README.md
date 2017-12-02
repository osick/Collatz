# Collatz

This small library helps to calculate Collatz sequences with nodejs. 
Using the big-integer nodejs library this computations can be donde for arbitrary large numbers (examples see below)

## Mathematical Definition

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

## Basis syntax

#### Init

```javascript
var Collatz = require('./collatz/collatz.js').Collatz;  
collatz.number("17"); 
//also collatz.number(17) is possible
collatz.init();
```

also big-integer are supported 

```javascript	
//1000 digit number
var Collatz = require('./collatz/collatz.js').Collatz;  
var bigInt = require("big-integer");
collatz.number(bigInt(10).pow(1000).add(5));
collatz.init();
```

#### Get number: 

```javascript
collatz.toString() 
// Output string "17"
```

#### Get length: 

```javascript
collatz.number("17");
collatz.length() 
//Output 12
```

#### Get stopping time:

```javascript
collatz.number("17");
collatz.stoppingTime() 
//Output 3
```

#### Get sequence:
```javascript
collatz.number("17");
collatz.sequence()
//computes the sequence [52,26,13,40,20,10,5,16,8,4,2,1,52,26,13,40,20,10,5,16,8,4,2,1,52,26,13,40,20,10,5,16,8,4,2,1]
```

#### Get array of lengths (20 steps, width 1):
```javascript
collatz.number("17")
collatz.lengths(20,1).toString() 
//Output string "0,20,7,7,15,15,10,23,10,111,18,18,18,106,5,26,13,13,21,21"
```

#### Get array of stopping Times (30 step, width 2):
```javascript
collatz.number("17");
collatz.stoppingTimes(30,2).toString() 
//Output string "6,3,8,3,96,3,91,3,6,3,13,3,8,3,88"
```


## Dependencies
- [big-integer](https://www.npmjs.com/package/big-integer)  NodeJS module

## License
- [MIT](https://github.com/electron/electron/blob/master/LICENSE)
