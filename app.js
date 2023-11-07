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

let expr = "()";

if (areBracketsBalanced(expr))
    document.write("Yes");
else
    document.write("No");

