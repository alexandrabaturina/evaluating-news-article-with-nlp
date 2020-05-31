const divPolarity = document.getElementById('polarity');
const divSubjectivity = document.getElementById('subjectivity');
const divPolarityConfidence = document.getElementById('polarity-confidence');
const divSubjectivityConfidence = document.getElementById('subjectivity-confidence');
const results = document.getElementById('results');


const handleSubmit = async (event) => {
    event.preventDefault();

    results.innerText = '';
    divPolarity.innerText = '';
    divSubjectivity.innerText = '';
    divPolarityConfidence.innerText = '';
    divSubjectivityConfidence.innerText = '';

    // check what text was put into the form field
    let formText = document.getElementById('urlToAnalyze').value;
    const urlError = document.querySelector("#urlError");
    urlError.innerText = '';

    if (!(Client.checkForURL(formText))) {

        urlError.innerText = 'The specified URL is not valid. Pleasy try again.';
        console.error(`You're trying to analyze ${formText}. The specified URL is not valid.`);
        return
    }

    try {
        const apiQuery = await fetch('http://localhost:8081/api', {
            method: 'POST',
            body: JSON.stringify({ urlToAnalyze: formText }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const sentimentAnalysis = await apiQuery.json();

        if (!(jsonCheck(sentimentAnalysis))) {
            console.error('JSON object is invalid.');
            return
        }

        // Update UI
        results.innerText = 'Analysis Results:';

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
if (submitRequest) {
    submitRequest.addEventListener('click', event => {
        handleSubmit(event);
    })
}

// function to be able to test this script
const jsonCheck = (json) => {
    return ('polarity' in json) && ('subjectivity' in json) && ('polarity_confidence' in json) && ('subjectivity_confidence' in json)
}

export { handleSubmit }
export { jsonCheck }