// sample test case
const url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby"
const parameter = "utm_medium"

const getUrlParameterValue = (url,parameter)=>{
  let paths = url.split("&")
  paths.forEach(path => {
    let pos = path.search(parameter)
    if(pos >= 0){
      let ans = path.slice(pos+parameter.length+1)
      console.log(ans)
    }
  });
}
getUrlParameterValue(url,parameter)