const handleSubmit = async (event) => {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('urlToAnalyze').value;

    console.log(`You're trying to analyze ${formText}`);
    console.log(`Regex test results: ${Client.checkForURL(formText)}`);

    try {
        const apiQuery = await fetch('http://localhost:8081/api', {
            method: 'POST',
            body: JSON.stringify({ urlToAnalyze: formText }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await apiQuery.json();
        const sentimentAnalysis = JSON.stringify(json);
    }
    catch (error) {
        console.log("error", error);
    }

}
const submitRequest = document.querySelector('#submitRequest');
submitRequest.addEventListener('click', event => {
    handleSubmit(event);
})

export { handleSubmit }