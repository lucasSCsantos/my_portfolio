const generateRandomArr = length => {
  const arr = Array.from({ length }, (v, k) => k);
  let n;
  let save;
  let i;
  for (i = arr.length; i; ) {
    n = Math.round(Math.random() * (i -= 1));
    save = arr[n];
    arr[n] = arr[i];
    arr[i] = save;
  }
  return arr;
};

export default generateRandomArr;
