# Blockchain Project README

This project includes TypeScript classes for Block and Chain implementation of a basic blockchain.

## Block

The `Block` class includes four private properties: `id`, `dttm`, `content`, and `hash`. These properties can be accessed and modified using public getter and setter methods.

### Properties of Block

- `id`: a number representing the id of the block.
- `dttm`: a date representing the time when the block was created.
- `content`: a string representing the content of the block.
- `hash`: a string representing the hash of the block.

### Methods of Block

- `setId(id: number): this`: sets the value of the `id` property and returns the instance of the class.
- `getId(): number`: returns the value of the `id` property.
- `setDttm(dttm: Date): this`: sets the value of the `dttm` property and returns the instance of the class.
- `getDttm(): Date`: returns the value of the `dttm` property.
- `setContent(content: string): this`: sets the value of the `content` property and returns the instance of the class.
- `getContent(): string`: returns the value of the `content` property.
- `setHash(hash: string): this`: sets the value of the `hash` property and returns the instance of the class.
- `getHash(): string`: returns the value of the `hash` property.
- `generateHash(): string`: generates a hash of the block using the `sha256` library from `crypto-js`.

## Chain

The `Chain` class includes an array of `Block` objects. The class provides methods to add a new block to the chain, get a block by its id, get the last block added to the chain, and check the validity of the chain.

### Properties of Chain

- `blocks`: an array of `Block` objects.

### Methods of Chain

- `addBlock(block: Block): this`: adds a new `Block` object to the `blocks` array and returns the instance of the class.
- `getBlock(id: number): Block | null`: returns the `Block` object with the given id if it exists in the `blocks` array. Otherwise, returns `null`.
- `getLastBlock(): Block | null`: returns the last `Block` object added to the `blocks` array. If the array is empty, returns `null`.
- `isValid(): boolean`: checks the validity of the `Chain` object by verifying the hashes of the blocks and the order of the ids. Returns `true` if the chain is valid, and `false` otherwise.

## How to Use for Developers

To use this project in your TypeScript project, follow the steps below:

1. Install `crypto-js` library using npm:

```shell
npm install crypto-js
```

2. Create a new TypeScript file and import the `Block` and `Chain` classes:

```ts
import { Block } from './Block';
import { Chain } from './Chain';
```

3. Create new `Block` objects and a `Chain` object:

```ts
const block1 = new Block(1, new Date(), 'Hello, World!', '');
const block2 = new Block(2, new Date(), 'How are you?', '');
const chain = new Chain([block1, block2]);
```

4. Use the `Chain` methods to add a new block, get a block by its id, get the last block, and check the validity of the chain:

```ts
chain.addBlock(new Block(3, new Date(), 'Nice to meet you!', ''));
const block = chain.getBlock(2);
const lastBlock = chain.getLastBlock();
const isValid = chain.isValid();
```

---

## MIT License

Copyright (c) 2023 Adam Lipert

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
