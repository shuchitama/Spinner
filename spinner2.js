const chars = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];
const spinner = (chars) => {
  let time = 100;
  for (let character of chars) {
    setTimeout(() => {
      process.stdout.write(character + '   ');
    }, time);
    time += 200;
  }
}
spinner(chars);
