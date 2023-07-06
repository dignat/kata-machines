function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // no child
    if (!curr) {
        return path;
    }
    //recurse
    //pre
    //recurse
    walk(curr.left, path);
    walk(curr.right, path);
    path.push(curr.value); // this is where we visit the Node
    //post
    return path;

}
export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}