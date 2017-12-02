'use strict'

var bigInt = require("big-integer");
var Collatz = require('../collatz.js').Collatz;

var collatz = new Collatz("17");
process.stdout.write('1.Number: 17' + "\n");
process.stdout.write("\t"+'Set number: collatz.number("17")' + "\n");
process.stdout.write("\tGet number: collatz.toString() --> " + collatz.toString()+"\n");
process.stdout.write("\tGet length: collatz.length() --> " + collatz.length() +"\n");
process.stdout.write("\tGet stopping time: collatz.stoppingTime() --> " + collatz.stoppingTime() +"\n");
process.stdout.write("\tGet sequence: collatz.sequence() --> " + collatz.sequence() +"\n");
process.stdout.write("\tGet array of lengths (20 steps, width 1): collatz.lengths(20,1).toString() --> "  + collatz.lengths(20,1).toString() + "\n")
process.stdout.write("\tGet array of stopping Times (30 step, width 2): collatz.stoppingTimes(30,2).toString() --> "  + collatz.stoppingTimes(30,2).toString() + "\n")
process.stdout.write("\n2.Number: And now something really big (500 digits...)\n");

var collatz_2 = new Collatz();
collatz_2.number(bigInt(10).pow(500).add(1));
process.stdout.write('\tSet number: collatz.number(bigInt(10).pow(100).add(1))' + "\n");
process.stdout.write("\tGet number: collatz.toString() --> 1000000000000000000.....0001\n");
process.stdout.write("\tGet length: collatz.length() --> " + collatz_2.length() +"\n");
process.stdout.write("\tGet stopping time: collatz.stoppingTime() --> " + collatz_2.stoppingTime() +"\n");