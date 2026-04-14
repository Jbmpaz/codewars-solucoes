class HTMLGen {
  // Your code here plox!
  div(div){
    return `<div>${div}</div>`
  }
  comment(comment){
    return `<!--${comment}-->`
  }
  title(title){
    return `<title>${title}</title>`
  }
  span(span){
    return `<span>${span}</span>`
  }
  body(body){
    return `<body>${body}</body>`
  }
  p(p){
    return `<p>${p}</p>`
  }
  b(b){
    return `<b>${b}</b>`
  }
  a(a){
    return `<a>${a}</a>`
  }

}

let htmlGen = new HTMLGen()

htmlGen.div("test") === "<div>test</div>"
htmlGen.b("test") === "<b>test</b>"
