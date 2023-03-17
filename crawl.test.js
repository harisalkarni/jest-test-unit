const { normalizeUrl, getUrlFromHtml} = require('./crawl')
const {test, expect} = require('@jest/globals')

test('normalizeUrl', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeUrl(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeUrl2', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeUrl(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeUrl3 Capitalize', () => {
    const input = 'https://BLOG.boot.dev/path/'
    const actual = normalizeUrl(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeUrl4 with http', () => {
    const input = 'http://blog.boot.dev/path/'
    const actual = normalizeUrl(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeUrl4 with http', () => {
    const input = 'http://blog.boot.dev/path/'
    const actual = normalizeUrl(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('get url from html', () => {
    const inputHtmlBody = `
    <html>  
        <body>
            <a href="https://blog.boot.dev/">Boot.dev BLog</a>
        </body>
    </html>
    `
    const inputBaseUrl = 'https://blog.boot.dev'
    const actual = getUrlFromHtml(inputHtmlBody, inputBaseUrl)
    const expected = ['https://blog.boot.dev/']
    expect(actual).toEqual(expected)
})

test('get url from html relative', () => {
    const inputHtmlBody = `
    <html>  
        <body>
            <a href="/path/">Boot.dev BLog</a>
        </body>
    </html>
    `
    const inputBaseUrl = 'https://blog.boot.dev'
    const actual = getUrlFromHtml(inputHtmlBody, inputBaseUrl)
    const expected = ['https://blog.boot.dev/path/']
    expect(actual).toEqual(expected)
})