export function hourCurrent() {
  const timer = new Date();

  return console.log(timer.toLocaleTimeString());
}

/*
// Use Mode

setInterval(() => {
    hourCurrent()
}, 1000)
*/
