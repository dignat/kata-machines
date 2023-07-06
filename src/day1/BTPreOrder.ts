function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // no child
    if (!curr) {
        return path;
    }
    //recurse
    //pre
    path.push(curr.value); // this is where we visit the Node
    //recurse
    walk(curr.left, path);
    walk(curr.right, path);
    //post
    return path;

}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}