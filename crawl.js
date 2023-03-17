const {JSDOM} = require('jsdom')

function getUrlFromHtml(htmlBody, baseUrl){
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linksElement = dom.window.document.querySelectorAll('a')
    for(const linkElement of linksElement){
        if(linkElement.href.slice(0, 1) === '/'){
            // relative URL
            urls.push(`${baseUrl}${linkElement.href}`)
        }else{
            urls.push(linkElement.href)
        }
        
    }
    return urls
}

function normalizeUrl (urlString){
    const urlObj = new URL(urlString)
    const domainPath = `${urlObj.hostname}${urlObj.pathname}`
    if(domainPath.length > 0 && domainPath.slice(-1) === '/'){
        return domainPath.slice(0, -1)
    }
    return domainPath
}

module.exports ={
    normalizeUrl,
    getUrlFromHtml
}