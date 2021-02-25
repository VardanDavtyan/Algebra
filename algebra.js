function f(x, formule) {
   return eval(formule)
}

function generate(min, max, func, formule) {
   let object = []
   let index = 0;
   for (let x = min; x <= max; x += 0.125) {
       object[index] = {
           x: x,
           y: func(x, formule)
       }
       index++;
   }
   return object
}
