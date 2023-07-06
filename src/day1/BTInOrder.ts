
function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // no child
    if (!curr) {
        return path;
    }
    //recurse
    //pre
    //recurse
    walk(curr.left, path);
    // in order
    path.push(curr.value); // this is where we visit the Node

    walk(curr.right, path);
    //post
    return path;

}
export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}