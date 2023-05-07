import { IChain } from '../interface/IChain';
import { Block } from "./Block";

export class Chain implements IChain {
    private blocks: Block[];
    
    constructor (blocks: Block[] = []) {
        this.blocks = blocks;
    }
    
    public addBlock(block: Block): this {
        this.blocks.push(block);
        return this
    }
    
    public getBlock(id: number): Block | null {
        let returnValue: Block | null = null;
        
        this.blocks.forEach(block => {
            if(block.getId() === id) {
                returnValue = block
            } 
        })
        
        return returnValue;
    }
    
    
    public getLastBlock(): Block | null {
        let blocksLength = this.blocks.length;
            
        if(blocksLength !== 0) {
            return this.blocks[blocksLength - 1];
        }
        
        return null;
    }
    
    public isValid(): boolean {
        for (let i = 1; i < this.blocks.length; i++) {
            const currentBlock = this.blocks[i]
            const previousBlock = this.blocks[i - 1]

            if (currentBlock.getHash() !== currentBlock.generateHash()) {
                return false
            }

            if (currentBlock.getId() !== previousBlock.getId() + 1) {
                return false
            }
        }
        return true
    }
}