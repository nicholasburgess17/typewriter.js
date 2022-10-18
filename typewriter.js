const sentence = "this is a sentence";
const split = sentence.split('')


const timer = function (array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      process.stdout.write(array[i])  
    }, 500)
  }
 }
 console.log('\n')
split.forEach((array, i) => {
  setTimeout(() => {
    timer(array)
  }, i * 500)
});
