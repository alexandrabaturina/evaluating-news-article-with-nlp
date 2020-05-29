function checkForURL(inputText) {

    let urlRegExp = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
    return urlRegExp.test(inputText);
}


export { checkForURL }