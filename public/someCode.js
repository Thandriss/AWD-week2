if(document.readyState !== "loading") {
    console.log("loaded");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("not loaded");
        initializeCode()
    })
}

function initializeCode() {
    const addTextButton = document.getElementById("submit-data");

    addTextButton.addEventListener("click", function() {
        const textInput = document.getElementById("input-text");
        fetch("http://localhost:3000/list", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: '{ "text": "' + textInput.value +'" }'
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
        })
    })
}
