const sentence = "hello there from lighthouse labs";
// --------- using for..of
let counter = 0;
for (let letter of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(letter)
  }, 75 * counter) // <= 1s delay to make it noticeable. Can dial it down later.
  counter++
}
// // --------- using c-style
// for (let i = 0; i < sentence.length; i++) {
//   const lastChar = sentence.length
//   setTimeout(() => {
//     // print the char here
//     process.stdout.write(sentence[i])
//   }, 50 * i) // <= 1s delay to make it noticeable. Can dial it down later.
// }
setTimeout(() => {
  process.stdout.write('\n')
}, 75 * sentence.length)