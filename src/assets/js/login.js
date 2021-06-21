const btnSubmit = document.querySelector('.btnSubmit')
async function loginRequest() {
const credential = window.btoa(this.login + ":" + this.password);

await axios
    .get("http://localhost:3002/gsb/login", {
    headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + credential,
    },
    withCredentials: true,
    })
    .catch((e) => {
    if (e.response.status === 401) {
        this.error = "Bad login or password";
        console.log("Unauthorized");
    } else {
        console.log(e);
    }
    });
}

btnSubmit.addEventListener('click',()=>{
    loginRequest()
})
