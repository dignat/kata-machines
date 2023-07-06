export default class MinHeap {
    public length: number;
    private data: number[];

    

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;

}
    delete(): number {
        if (this.length === 0) {
            return - 1;
        }
            const out = this.data[0];
            // reduce the length first than start to heapify down, as we can end up with values of the array which parts we are not using
            this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }
       
        // point to the last element
        this.data[0] = this.data[this.length];
        //start from 0 index
        this.heapifyDown(0);
        return out;
}
private heapifyDown(idx: number): void {
    const lIdx = this.leftChild(idx);
    const rIdx = this.rightChild(idx);
    // base case
    if (idx >= this.length || lIdx >= this.length) {
        return
    }
    const lV = this.data[lIdx];
    const rV = this.data[rIdx];
    const v = this.data[idx]
    if (lV > rV && v > rV) {
        this.data[idx] = rV;
        this.data[rIdx] = v;
        this.heapifyDown(rIdx);
    } else if (rV > lV && v > lV) {
        this.data[idx] = lV;
        this.data[lIdx] = v;
        this.heapifyDown(lIdx);
    }
    
}
private heapifyUp(idx: number): void {
    if (idx === 0) {
        return;
    }
    const p = this.parent(idx);
    const parentV = this.data[p];
    const v = this.data[idx];
    if (parentV > v) {
        this.data[idx] = parentV;
        this.data[p] = v;
        this.heapifyUp(p);
    }
}
private parent(idx: number): number {
    return Math.floor((idx -  1) / 2);
}
private leftChild(idx: number): number {
    return (idx * 2 + 1);
}
private rightChild(idx: number): number {
    return (idx * 2 + 2);
}
}