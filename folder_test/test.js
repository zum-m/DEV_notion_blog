// queueMicrotask(((a, b) => { console.log(a + b) })(1, 2));

// queueMicrotask((x) => {console.log(x)(3)});



setTimeout(() => { console.log('timeout') });

queueMicrotask(() => { console.log('microtask') });

new Promise((resolve) => {
    console.log('promise');
    resolve();
}).then(() => { console.log('then') });

console.log('sync_end');