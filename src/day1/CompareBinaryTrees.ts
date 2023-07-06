export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    // 1st base case do we have the same structure we both ended to null - structure check
    if (a === null && b === null) {
        return true;
    }
    //2nd we do not have the same structure - structure check
    if (a === null || b === null) {
        return false;
    }
    //3rd we do not have the same value at the same point - value check
    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left,b.left) && compare(a.right, b.right);

}