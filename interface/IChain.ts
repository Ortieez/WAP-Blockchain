import { Block } from '../class/Block';

export interface IChain
{
    addBlock(block: Block): this;
    getBlock(id: number): Block | null;
    getLastBlock(): Block | null;
    isValid(): boolean;
}