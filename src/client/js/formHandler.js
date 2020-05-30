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
        const sentimentAnalysis = await apiQuery.json();
        console.log(sentimentAnalysis);

        // Update UI
        const results = document.querySelector('#results');

        const divPolarity = document.querySelector('#polarity');
        const divSubjectivity = document.querySelector('#subjectivity');
        const divPolarityConfidence = document.querySelector('#polarity-confidence');
        const divSubjectivityConfidence = document.querySelector('#subjectivity-confidence');

        const {
            polarity,
            subjectivity,
            polarity_confidence: polarityConfidence,
            subjectivity_confidence: subjectivityConfidence
        } = sentimentAnalysis;

        divPolarity.innerText = `Polarity: ${polarity}`;
        divSubjectivity.innerText = `Subjectivity: ${subjectivity}`;
        divPolarityConfidence.innerText = `Polarity Confidence: ${polarityConfidence}`;
        divSubjectivityConfidence.innerText = `Subjectivity Confidence: ${subjectivityConfidence}`;

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