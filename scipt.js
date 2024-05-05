const champs = document.querySelectorAll('textarea')

for( c of champs){
    c.addEventListener('input', interpreteur)
}

function interpreteur(){
    const codeHTML = document.querySelector('#code-html').value
    const codeCSS = `<style>${document.querySelector('#code-css').value}</style>`
    const codeJS = "<scri"+"pt>" + document.querySelector('#code-js').value + "</scri"+"pt>"
    const page = document.querySelector('#page').contentWindow.document
    page.open()
    page.write(codeHTML + codeCSS + codeJS)
    page.close()
}

