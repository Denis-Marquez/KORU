const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'foo');
});

// Promise.all - espera todas resolverem
Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log("Promise.all:", values); // [3, 42, "foo"]
    });

// Promise.race - retorna a primeira que resolver
const promise4 = new Promise((resolve) => setTimeout(resolve, 500, 'mais rápido'));
const promise5 = new Promise((resolve) => setTimeout(resolve, 100, 'mais lento'));

Promise.race([promise4, promise5])
    .then(value => {
        console.log("Promise.race:", value); // "mais lento"
    });