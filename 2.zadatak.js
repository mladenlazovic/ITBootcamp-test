
let N = 5


for(let i = 1; i < N; i++){
    console.log('*'.repeat(i) + ' '.repeat((N - i) * 2) + '*'.repeat(i));
}

console.log('*'.repeat(N * 2));

for(let i = N - 1; i >= 1; i--){
    console.log('*'.repeat(i) + ' '.repeat((N - i) * 2) + '*'.repeat(i));
}