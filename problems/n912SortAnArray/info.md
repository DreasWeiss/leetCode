пример [5,3,7,6,2,9]

1. Определить ось как средний элемент. Итак, 7 – это основной элемент.

2. Начните левый и правый указатели как первый и последний элементы массива соответственно. Таким образом, левый указатель указывает на 5 в индексе 0, а правый указатель указывает на 9 в индексе 5.

3. Сравните элемент по левому указателю с элементом поворота. С 5 <6 сдвиньте левый указатель вправо на индекс 1.

4. Теперь все еще 3 <6, поэтому переместите левый указатель на еще один указатель вправо. Так что теперь 7> 6 прекращают увеличивать левый указатель, и теперь левый указатель имеет индекс 2.

5. Теперь сравните значение в правом указателе с элементом pivot. С 9> 6 переместите правый указатель влево. Теперь, когда 2 <6, перестаньте двигать правый указатель.

6. Поменяйте местами оба значения, присутствующие в левом и правом указателях.

7. переместите оба указателя еще на один шаг.

8. так как 6 = 6, переместите указатели на еще один шаг и остановитесь, когда левый указатель пересекает правый указатель и возвращает индекс левого указателя.
Замена двух чисел:
```
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
```
```
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}
```

Как только вы выполните вышеуказанные шаги, будет возвращен индекс левого указателя, и нам нужно использовать его для разделения массива и выполнения быстрой сортировки для этой части. Следовательно, он называется «Разделяй и властвуй».

Таким образом, быстрая сортировка выполняется до тех пор, пока все элементы в левом и правом массивах не будут отсортированы.
```
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var result = quickSort(items, 0, items.length - 1);
```