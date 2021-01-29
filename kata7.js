const checkAir = function (samples, threshold) {
  let dirtCount = 0;
  let polPercent = dirtCount / samples.length;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      dirtCount++;
    }
  }
  polPercent = dirtCount / samples.length;
  if (polPercent >= threshold) {
    return "polluted";
  } else {
    return "Clean";
  }
}
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));
console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));