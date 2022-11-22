let links=document.querySelectorAll('a')
for (let link of links){
    let href=link.getAttribute('href')
    if (!href) continue
    if (!href.includes('://')) continue
    if (href.startsWith('https://internal.com'))continue
    link.style.color='orange'
}
//=============================//
/*
let selector='a[href*="://"]:not([href^:"http://internal.com"])
    let links=document.querySelectorAll(selector)
links.forEach(link=>link.style.color="orange")*/
