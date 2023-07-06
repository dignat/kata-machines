function qs(arr: number[], lo: number, high: number): void  {
    if (lo >= high) {
        return;
    }
    const pivotIdx = partition(arr, lo, high);
    // quick sort of left side not including the pivot
    qs(arr, lo, pivotIdx -1);
    // quik sort of the right side not including the pivot
    qs(arr, pivotIdx + 1, high); 
}
function partition(arr: number[], lo: number, high: number): number {
    const pivot = arr[high];
    let index = lo - 1;
    for (let i = lo; i < high; ++i) {
        if (arr[i] <= pivot) {
            index++;
            const tmp = arr[i];
            arr[i] = arr[index];
            arr[index] = tmp;
        }
    }
    index++;
    arr[high] = arr[index];
    arr[index] = pivot;

    return index;
}
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length -1);
}