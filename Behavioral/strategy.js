class SortStrategy{
    sort(array){}
}

class MergeSort extends SortStrategy{
    sort(array){
        console.log("this is mergesort")
    }
}

class QuickSort extends SortStrategy{
    sort(array){
        console.log("this is quicksort")
    }
}

class SelectionSort extends SortStrategy{
    sort(array){
        console.log("this is SelectionSort")
    }
}
class SortedList {
    constructor(item, sortStrategy){
        this.item = item
        this.sortStrategy = sortStrategy
    }
    add(value){
        this.item.push(value)
    }
    sort(){
        return this.sortStrategy.sort()
    }
    
}

let list = SortedList(list, new QuickSort())
list.add(2)
list.add(1)
list.add(7)
list = list.sort()

