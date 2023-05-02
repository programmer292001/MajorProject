
async function getCount() {
    const response = await fetch('/api/getAll', {
        method: 'GET'
    })
    let result = await response.json()
    var count = document.getElementById('userCount')
    count.innerHTML = result.count
}

async function PostData(event) {
    event.preventDefault();
    var namecontent = document.getElementById("name");
    var emailcontent = document.getElementById("email");
    if(namecontent.value && emailcontent.value) {
        const data = {name: namecontent.value, email: emailcontent.value };
        console.log('request')
        console.log(data);
        const response = await fetch('/api/post', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        console.log('response')
        console.log(response)
        if(response.status === 200) {
            console.log(document.getElementById('userCount').innerHTML)
            document.getElementById('userCount').innerHTML = parseInt(document.getElementById('userCount').innerHTML) + 1
            console.log(document.getElementById('userCount').innerHTML)
        }
        namecontent.value="";
        emailcontent.value="";
        getCount();
        console.log(namecontent);
        console.log(emailcontent);
    
    
        alert("You have registered successfully!");
    }
    else {
        alert("Please enter details to register!");
    }
}

