num = 12
const reverse = (num)=>{
  let rnum = 0;
  while(num > 0)
  {
      rnum = rnum * 10 + num % 10;
      num = Math.floor(num / 10);
  }
  return rnum;
}
console.log(reverse(num));