const sentence = "hello there from lighthouse labs";
data = sentence + '\n';
let delayTime = 1000;
for (const char of data) {
  delayTime += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, delayTime) 
}
