const sha256 = require('crypto-js/sha256')

export class Block {
    private id: number;
    private dttm: Date;
    private content: string;
    private hash: string;
    
    constructor(id = 0, dttm = new Date(), content = "", hash = "") {
        this.id = id;
        this.dttm = dttm;
        this.content = content;
        this.hash = hash;
    }
    
    public setId(id: number): this {
        this.id = id;
        return this;
    }
    
    public getId(): number {
        return this.id;
    }
    
    public setDttm(dttm: Date): this {
        this.dttm = dttm;
        return this;
    }
    
    public getDttm(): Date {
        return this.dttm;
    }
    
    public setContent(content: string): this {
        this.content = content;
        return this;
    }
    
    public getContent(): string {
        return this.content;
    }
    
    public setHash(hash: string): this {
        this.hash = hash;
        return this;
    }
    
    public getHash(): string {
        return this.hash;
    }
    
    public generateHash() {
        return sha256(this.id + this.content + this.dttm + this.hash).toString()
    }
}

