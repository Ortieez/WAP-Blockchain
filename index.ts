import { Block } from './class/Block';
import { Chain } from './class/Chain';

const block1 = new Block(1, new Date(), "Hello World", "0");
const block2 = new Block(2, new Date(), "Hello World", block1.generateHash());
const block3 = new Block(3, new Date(), "Hello World", block2.generateHash());

// create chain
const chain = new Chain();
chain.addBlock(block1);
chain.addBlock(block2);
chain.addBlock(block3);

// print chain
console.log(chain);

// print chain validity
console.log("Is chain valid? " + chain.isValid());

// print chain validity after tampering
chain.getBlock(2)?.setContent("Hello World 2");
console.log("Is chain valid? " + chain.isValid());