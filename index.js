function calculator(string) {

    const regOne = /^[X&V&I][X&V&I]?[V&I&X]?\s[^\d]\s[X&V&I][X&V&I]?[V&I&X]?[I]?$/, 
        regTwo = /^[1-9][0]?\s[^\d]\s[1-9][0]?$/,
        regTree = /^[1-9][0]?\s[^\d]\s[V&X&I][V&X&I]?[V&X&I]?$/,
        regFour = /^[V&X&I][V&X&I]?[V&X&I]?\s[^\d]\s[1-9][0]?$/,
        regFive = /^[1-9][0]?\s[%]\s[1-9][0]?$/,

        romNum = {
            I: 1,
            II: 2,
            III: 3,
            IV: 4,  
            V: 5,
            VI: 6,
            VII: 7,
            VIII: 8,
            IX: 9,
            X: 10,
            XI: 11,
            XII: 12,
            XII: 13,
            XIV: 14,
            XV: 15,
            XVI: 16,
            XVII: 17,
            XVIII: 18,
            XIX: 19,
            XX: 20,
            XXI: 21,
            XXII: 22,
            XXIII: 23,
            XXIV: 24,
            XXV: 25,
            XXVI: 26,
            XXVII: 27,
            XXVIII: 28,
            XXIX: 29,
            XXX: 30,
            XXXI: 31,
            XXXII: 32,
            XXXIII: 33,
            XXXIV: 34,
            XXXVI: 36,
            XXXVII: 37,
            XXXVIII: 38,
            XXXIX: 39,
            XL: 40,
            XLI: 41,
            XLII: 42,
            XLIII: 43,
            XLIV: 44,
            XLV: 45,
            XLVI: 46,
            XLVII: 47,
            XLVIII: 48,
            XLIX: 49,
            L: 50,
            LI: 51,
            LII: 52,
            LIII: 53,
            LIV: 54,
            LV: 55,
            LVI: 56,
            LVII: 57,
            LVIII: 58,
            LIX: 59,
            LX: 60,
            LXI: 61,
            LXII: 62,
            LXIII: 63,
            LXIV: 64,
            LXV: 65,
            LXVI: 66,
            LXVII: 67,
            LXVIII: 68,
            LXIX: 69,
            LXX: 70,
            LXXI: 71,
            LXXII: 72,
            LXXIII: 73,
            LXXIV: 74,
            LXXV: 75,
            LXXVI: 76,
            LXXVII: 77,
            LXXVIII: 78,
            LXXIX: 79,
            LXXX: 80,
            LXXXI: 81,
            LXXXII: 82,
            LXXXIII: 83,
            LXXXIV: 84,
            LXXXV: 85,
            LXXXVI: 86,
            LXXXVII: 87,
            LXXXVIII: 88,
            LXXXIX: 89,
            XC: 90,
            XCI: 91,
            XCII: 92,
            XCIII: 93,
            XCIV: 94,
            XCV: 95,
            XCVI: 96,
            XCVII: 97,
            XCVIII: 98,
            XCIX: 99,
            C: 100,
            D: 500,
            M: 1000,
        };

    // Разбиваем строку на массив и деструктурировано его присваеваем 
    let arrayCalc = string.split(' '), [a, expr, b] = arrayCalc;

    // Функция для реализациия арифмитических операций
    const operation = (rimArray, expr) => {
        if (expr == '+') {
            c = rimArray[0] + rimArray[1];
            return c;
        } else if (expr == '-')  {
            c = rimArray[0] - rimArray[1];
            return c;
        } else if (expr == '*')  {
            c = rimArray[0] * rimArray[1];
            return c;
        } else if (expr == '/') {
            c = rimArray[0] / rimArray[1];
            let divs = (c < 1) ? c = 0 : c = Math.round(c);
            return divs;
        }
    };
    //Проверка на число которое больше 10
    const exp = () => {
        for (let key in romNum) { 

            a = (key === a) ? a = romNum[key] : a = a;

            b = (key === b) ? b = romNum[key] : b = b;
            
        }
        if (a <= 10 && b <= 10) {
            console.log("Good");
        } else {
            throw new Error('something went wrong');
        }
    }
    // Функция для перевода в арабские цифры
    const rimDef = () => {
        for (let key in romNum) { 

            a = (key === a) ? a = romNum[key] : a = a;

            b = (key === b) ? b = romNum[key] : b = b;
            
        }
        // console.log(a, b);

        let rimArray = [a, b]

        return rimArray;
    };
    //Перевод обратно в римские цирфы
    const rimBack = (num) => {
        for (let key in romNum) {

            if (num === romNum[key]) num = key;

         }
         return num;
    }; 
    // Проверка на длину массива и числа 
    if (arrayCalc.length - 1 === 2 || !regTwo.test(string)) {
        // Проверка на римские и арюские и на знак %
        if (!(regTree.test(string) || regFour.test(string) || regFive.test(string))) {
            // Проверка выражения на римские и арабские цифры
            if ((regTwo.test(string) || regOne.test(string))) {
                // выполнение подсчета римских цифр
                if (regOne.test(string)) {
                    //Проверка на число которое больше 10
                    exp();
                    // Присвоение возращенного результата в массив
                    let rimArray = rimDef();
                    // Подсчет
                    let str = operation(rimArray, expr);
                    // Проверка на 0
                    if (str <= 0) {
                            
                        str = '';
                        return str;
                    } else {
                        // Возвращенный результат присваивается в переменную (Возвращает строку )
                        let numRimInit = rimBack(str);
                        let end = numRimInit;
                        // Проверка полученного результата
                        console.log(end);
                        // Вывод 
                        return end;
                    }
                    
                } else {
                    // Выполнение подсчета арабских цифр
                    if (regTwo.test(string)) {
                        // Перевод из string in int
                        let oneParam = Number.parseInt(a), twoParam = Number.parseInt(b);
                        // Присвоение полученых чисел в массив
                        let rimArray = [oneParam, twoParam];
                        // Подсчет
                        let str = operation(rimArray, expr);
                        // Преобразование в строку 
                        let end = String(str);
                        // Проверка полученного результата
                        console.log(end);
                        // Полученный результат
                        return end;
  
                    }
                }

            } else {
                // console.log("Введите правильную строку!");
                console.log("throws Error");
                throw new Error('something went wrong')
                // return;
            }

        } else {
            // console.log("Введите только римские или только латинские числа!");
            console.log("throws Error");
            throw new Error('something went wrong')
            return;
        }

    } else {
        // console.log("Введите 3 символа через пробел!");
        console.log("throws Error");
        throw new Error('something went wrong')
        // return;
    }
}
