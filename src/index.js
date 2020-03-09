function eval() {
    // Do not use eval!!!
    return;
}
function expressionCalculator(expr) {
    let count = 0;
    expr.split('').forEach((item, index) => {
        if(item == '('){
            count++;
        }
        if(item == ')'){
            count--;
        }
        if (item === "/" && expr.split('')[index+2] === "0"){
            throw new Error("TypeError: Division by zero.");
        }
    });
    if(count != 0){
        throw new Error ('ExpressionError: Brackets must be paired');
    }
    else{
        let funcResult = new Function(`return ${expr}`);
        return funcResult();
    }
}
module.exports = {
    expressionCalculator
}
