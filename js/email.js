function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        phone: document.getElementById("Phone Number").value,
        email : document.getElementById("email").value,
        persons : document.getElementById("persons").value,

    }

    emailjs.send("service_f0ll6qh","template_aqbh8yg",parms).then(alert("Email Sent"))
}