

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


function areBracketsBalanced(expr) {
    console.log()
    let stack = [];

    for (let i = 0; i < expr.length; i++) {
        let x = expr[i];

        if (x == '(' || x == '[' || x == '{') {
            stack.push(x);
        }

        if (stack.length == 0)
            return false;

        let check;
        switch (x) {
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }
    console.log(expr);
    if (!expr) {
        console.log(!Boolean(expr))
        return false
    } else {
        return (stack.length == 0);
    }
}

let expr = prompt("Satr yaroqli !!!!!")

if (areBracketsBalanced(expr))
    document.write("Yes");
else
    document.write("No");

