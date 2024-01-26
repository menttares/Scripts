
function is_array(input) {
    console.log(`Является ли input:${input} массивом?`);
    return console.log(Array.isArray() ? 'правда' : 'ложь');
}

is_array([1, 2, 3]);
is_array('resource');

function array_Clone(arr) {
    return arr.map(elem => Array.isArray(elem) ? array_Clone(elem) : elem);
}

console.log("Клонирование массивов:")
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

function первый(arr, n = 1) {
    if (!Array.isArray(arr) || !Number.isInteger(n))
        throw new TypeError();
    if (n > 0)
        return arr.slice(0, n)
    else
        return [];
}

console.log('Проверка функции "первый":');
console.log(первый([7, 9, 0, -2]));
console.log(первый([], 3));
console.log(первый([7, 9, 0, -2], 3));
console.log(первый([7, 9, 0, -2], 6));
console.log(первый([7, 9, 0, -2], - 3));


function последний(arr, n = 1) {
    if (!Array.isArray(arr) || !Number.isInteger(n))
        throw new TypeError();
    if (n > 0)
        return arr.slice(-n)
    else
        return [];
}

console.log('Проверка функции "последний":');
console.log(последний([7, 9, 0, -2]));
console.log(последний([7, 9, 0, -2], 3));
console.log(последний([7, 9, 0, -2], 6));


function JoinString(arr, symbol = " ") {
    return arr.join(symbol);
}

console.log('Проверка фугкции слияния строк:');
console.log(JoinString(['Красный', 'Зеленый', 'Черный']));
console.log(JoinString(['Красный', 'Зеленый', 'Черный'], ','));
console.log(JoinString(['Красный', 'Зеленый', 'Черный'], '+'));

function Sort_arr(arr) {
    console.log(`входные данные ${arr}, сортированный массив:`);
    for (let i = 0; i < arr.length; i++) {
        for (let index = 1; index < arr.length; index++) {

            if (arr[index - 1] > arr[index]) {
                let buf = arr[index - 1];
                arr[index - 1] = arr[index];
                arr[index] = buf;
            }
        }

    }
    return arr;
}


console.log('Функция сортировки:');
console.log(Sort_arr([0, 4, 7, 2, 7, 4, 1, 3, 5, 7, 9, 5, 4, 3, 2, 1]));


function calculateSumAndProduct(arr) {
    console.log(`Начальное значение: ${arr}`);
    let sum = 0;
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        product *= arr[i];
    }

    return { sum, product };
}

console.log("Функция вычисления суммы и произведение массива:");
const numbers = [2, 3, 4, 5];
const result = calculateSumAndProduct(numbers);

console.log(`Сумма: ${result.sum}`);
console.log(`Произведение: ${result.product}`);


console.log('Функция удаления дублирующий значений из массива');

function FilterArr(arr) {
    let newSet = new Set(arr.map(item => item.toLowerCase()));
    return newSet;
}

console.log('Начальное значение:')
const inputArray = ['apple', 'Orange', 'banana', 'orange', 'APPLE'];

console.log(FilterArr(inputArray));



function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Элемент не найден
}

console.log('Функция бинарного поиска:');
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let target = 8;
console.log(`ищем ${target} в массиве ${arr}; Вывод: ${binarySearch(arr, target)}`);


console.log('Вариант 15:')


function create2DArray(arr) {

    const sortedArray = arr.sort((a, b) => a - b);
    console.log("Отсортированный одномерный массив:", sortedArray);
    const twoDArray = [];

    for (let i = 0; i < sortedArray.length; i += 4) {
        twoDArray.push(sortedArray.slice(i, i + 4));
    }

    return twoDArray;
}

{
    let arr = [4, 2, 8, 1, 7, 5, 3, 6, 16, 15, 13, 14, 10, 9, 11, 12];
    const twoDArray = create2DArray(arr);

    console.log("Двухмерный массив 4x4:", twoDArray);
}
