/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    // Разделяем строку на отдельные слова, используя пробел как разделитель
  const words = str.split(' ');

  // Преобразуем первую букву каждого слова в верхний регистр
  const capitalizedWords = words.map(word => {
    // Если слово короче двух символов, не изменяем его
    if (word.length < 2) {
      return word;
    }
    // Иначе, преобразуем первую букву в верхний регистр, а остальные - в нижний
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Объединяем преобразованные слова в одну строку, используя пробел как разделитель
  return capitalizedWords.join(' ');
}

// Протестируйте Решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"