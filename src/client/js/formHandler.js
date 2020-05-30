const handleSubmit = async (event) => {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('urlToAnalyze').value;

    console.log(`You're trying to analyze ${formText}`);
    console.log(`Regex test results: ${Client.checkForURL(formText)}`);


    // fetch('http://localhost:8081/test', { mode: "no-cors" })
    //     .then(res => {

    //         // return res.json()
    //         return res.json()
    //     })
    //     .then(function (data) {
    //         console.log(data);
    //         document.getElementById('results').innerHTML = data.redirected;
    //     })

    const request = await fetch('http://localhost:8081/test');
    try {
        // Transform into JSON
        const jsonData = await request.json()
        console.log(jsonData);
        return jsonData;
    }
    catch (error) {
        console.log("error", error);
    }

}

const retrieveData = async () => {

}


const submitRequest = document.querySelector('#submitRequest');
submitRequest.addEventListener('click', event => {
    handleSubmit(event);
})



export { handleSubmit }