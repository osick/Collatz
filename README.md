# Collatz


## Mathematical Definition

Collatz sequences n_k are defined for k>=0 as following:

1. k=0: Choose an initial number n_0
2. k>=0: If n_k is even then n_{k+1}=n_k/2 else we set n_{k+1}=3*n_{k}+1

For example choose 
n_0 = 7 
n_1  = 22
n_2  = 11
n_3  = 34
n_4  = 17
n_5  = 52
n_6  = 26
n_7  = 13
n_8  = 40
n_10 = 20
n_11 = 10
n_12 =  5
n_13 = 16
n_14 =  8
n_15 =  4
n_16 =  2
n_17 =  1
n_18 =  4
n_19 =  2
n_20 =  1

and so on

The Collatz Conjecture now is that for any initial number n_0 there is a k>0 s.t. n_k = 1.
This conjecture is unproven for more than 60 years. For more information see the [Wikipedia on Collatz Conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture)


##Basis syntax

```javascript
var bigInt = require("big-integer");

var Collatz = require('./collatz/collatz.js').Collatz;

var collatz = new Collatz(bigInt(10).pow(100).add(1));

var bigInt = require("big-integer");

var Collatz = function(n){
  this._number
  this._stoppingTime 
  this._length 
  this.number(n);
}


/* Collatz.prototype.lengths */ 
Collatz.prototype.lengths  = function(m,s) 
//returns the lengths of the 
  if (typeof m === "undefined") { throw new Error("offset is needed")}
  if (!/^\+?(0|[1-9]\d*)$/.test(m)) { throw new Error(m+"as offset is not a positive number")}
  var offset = bigInt(m);
  var lengths=[];
  var orig_number=this._number.toString();
  var max_number=this._number.add(offset);
  var iter = bigInt(this._number);
  while (iter.lt(max_number)){
    iter=iter.add(s);
    this.number(iter);
    lengths.push(this.length());
  } 
  this.number(orig_number);
  return lengths;
}

/* Collatz.prototype.stoppingTimes */ 
Collatz.prototype.stoppingTimes  = function(m,s){
  if (typeof m === "undefined") { 
	throw new Error("offset is needed")
  }
  if (!/^\+?(0|[1-9]\d*)$/.test(m)) { 
	throw new Error(m+"as offset is not a positive number")
  }
  var offset = bigInt(m);
  var times=[];
  var orig_number=this._number.toString();
  var max_number=this._number.add(offset);
  var iter = bigInt(this._number);
  while (iter.lt(max_number)){
    iter=iter.add(s);
    this.number(iter);
    times.push(this.stoppingTime());
  } 
  this.number(orig_number);
  return times;
}
    
/* Collatz.prototype.iterNumber */ 
Collatz.prototype.iterNumber = function(){this.number(getNextCollatz(this._number)); return this.number();}
  

  
/* Collatz.prototype.stoppingTime */ 
Collatz.prototype.stoppingTime = function(m){if (this._stoppingTime==-1) this.sequence(); return this._stoppingTime;}
  
/* Collatz.prototype.length */ 
Collatz.prototype.length = function(m){if (this._length==-1) this.sequence(); return this._length;}
  
/* Collatz.prototype.sequence */ 
Collatz.prototype.sequence = function(){
  var sequence =[];  
  var i=bigInt(this._number);
  while(!i.equals(1)){
    i=getNextCollatz(i);
    sequence.push(i.toString());  
    if (i<this._number && this._stoppingTime==-1) this._stoppingTime=sequence.length;
  }
  this._length=sequence.length;
  return sequence;
}
