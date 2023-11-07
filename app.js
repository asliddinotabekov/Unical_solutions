

// "Unical Solutions" 
// [,],{,},(,) belgilardan iborat 
// start berilgan. 
// satr yaroqli ekanini tekshiring. Satr yaroqli deyiladi:

//    1. Ochiq qavslar bir xil turdagi qavslar bilan yopilishi kerak.
//    2. Ochiq qavslar to‘g‘ri tartibda yopilishi kerak.
//    3. Har bir yopiq qavsda bir xil turdagi mos keladigan ochiq qavs bo‘lishi kerak.

// Kiruvchi parametrlar
// Birinchi qatorda 
// satr. Uzunligi 
// dan oshmaydi. Vaqt limiti 1 sekund.

// Chiquvchi parametrlar
// Agar qavslar to‘g‘ri ochib yopilgan bo‘lsa YES, aks holda NO so‘zlarini chiqaring.

// Na'munalar
// #	Kirish	Chiqish
// 1	()	YES
// 2	()[]{}	YES
// 3	(]	NO


function Brackets(char) {
    console.log()
    let store = [];

    for (let i = 0; i < char.length; i++) {
        let x = char[i];

        if (x == '(' || x == '[' || x == '{') {
            store.push(x);
        }

        if (store.length == 0)
            return false;

        let check;
        switch (x) {
            case ')':
                check = store.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = store.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = store.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }
    console.log(char);
    if (!char) {
        console.log(!Boolean(char))
        return false
    } else {
        return (store.length == 0);
    }
}

let char = prompt("Satr yaroqli !!!!!")

if (Brackets(char))
    document.write("Yes");
else
    document.write("No");

