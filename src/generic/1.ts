/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T> (value: T) {
  return new Promise((resolve) => {
    resolve(['Text', 50, value]);
  });
}

getPromise(1)
.then((data) => {
  console.log(data);
});

export {};