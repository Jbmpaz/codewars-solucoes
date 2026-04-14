function domainName(url) {
  //your code here
  let urlLimpa = url.replace(/(.*?)www\./, "");
  urlLimpa = urlLimpa.replace(/http(.*?).\/\//, "");
  urlLimpa = urlLimpa.replace(/\..*/i, "");
  console.log(urlLimpa);
  return urlLimpa;
}

domainName("http://github.com/carbonfive/raygun");
domainName("http://www.zombie-bites.com");
domainName("https://www.cnet.com");
domainName("http://google.com");
domainName("http://google.co.jp");
domainName("www.xakep.ru");
domainName("https://youtube.com");
