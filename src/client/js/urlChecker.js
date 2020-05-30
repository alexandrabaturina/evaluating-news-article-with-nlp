function checkForURL(inputText) {

    const urlRegExp = '^(https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}((\/|:|\?[!-~]*)(.*?))?$';
    return urlRegExp.test(inputText);
}

export { checkForURL }