var bigInt = require("big-integer");

/*******************************************************************************************************/
/*DEFINITION AND ELEMENTARY METHODS*/
/*******************************************************************************************************/
var Collatz = function(n){
  /* private */
  this._number = new bigInt(n);
  this._stoppingTime = -1;
  this._length = -1;
  this._sequence=[];
  this._initObj=function(){
    this._stoppingTime=-1;
    this._length=-1;
	this._sequence=[];
  }  
  this.number = function(m){
	if (typeof m === "undefined") return this._number.toString();
	if (!/^\+?(0|[1-9]\d*)$/.test(m)) { throw new Error(m+" is not a positive number"); }
	this._number=bigInt(m);
	this._initObj(); 
  }
  this.number(n);
}

/* Collatz.prototype.init */ 
Collatz.prototype.init = function(){
  var i=bigInt(this._number);
  while(!i.equals(1)){
    i=getNextCollatz(i);
    this._sequence.push(i.toString());  
    if (i<this._number && this._stoppingTime==-1){
		this._stoppingTime=this._sequence.length;	
	}
  }
}

/* Collatz.prototype.stoppingTime */ 
Collatz.prototype.stoppingTime = function(m){if (this._length==-1) this.init(); return this._stoppingTime;}

/* Collatz.prototype.length */ 
Collatz.prototype.length = function(m){if (this._length==-1) this.init(); return this._sequence.length;}

/* Collatz.prototype.sequence */ 
Collatz.prototype.sequence = function(m){if (this._length==-1) this.init(); return this._sequence;}

/* Collatz.prototype.toString */ 
Collatz.prototype.toString = function(){return this._number.toString()};

/*******************************************************************************************************/
/* ITERATOR METHODS */
/*******************************************************************************************************/
/* Collatz.prototype.iterNumber */ 
Collatz.prototype.iterNumber = function(){this.number(getNextCollatz(this._number)); return this.number();}

/* Collatz.prototype.isOne */ 
Collatz.prototype.isOne = function(){ return this._number.equals(bigInt.one);}


/*******************************************************************************************************/
/* ARRAY FUNCTIONS*/
/*******************************************************************************************************/

/* Collatz.prototype.lengths */ 
/*for an array starting from this._number to this._number */
Collatz.prototype.lengths  = function(m,s){
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
  
/*******************************************************************************************************/
module.exports = {Collatz: Collatz};

/*******************************************************************************************************/
function getNextCollatz(n){var m=bigInt(n); return (m.mod(2).equals(0) ? m.divide(2) : m.times(3).add(1));}
