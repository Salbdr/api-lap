let userName = document.getElementById("userName")
let password = document.getElementById("passord")
let btn = document.getElementById("btn")
let img = document.getElementById("img")
let img1 = document.getElementById("img1")
console.log(userName + password + btn );

// document.addEventListener("click", logIn)
async function logIn(){

    // let yName = document.getElementById("username")
    let rec = await fetch("https://665736e39f970b3b36c86772.mockapi.io/img",{
    method: 'POST',
    body : JSON.stringify({
userName:userName.value,
img:img.value
// password:password.value

    }),
    headers: {

        'Content-type': 'application/json; charset=UTF-8',

    }
})
let data= await rec.json()
// console.log(data);
yName.textContent=data.userName
}


logIn()

async function getimage(){
let res= await fetch("https://665736e39f970b3b36c86772.mockapi.io/img");
let photo= await res.json()
console.log(photo);

photo.forEach(elm=>{
    let text= document.createElement("p")
    let img= document.createElement("img")
    let button= document.createElement("button")
    text.innerText=elm.userName
    img.style.width="200px"
    img.src=elm.img
    button.innerText="delet"

    document.body.append(text)
    document.body.append(img)
    document.body.append(button)

})

}


getimage()
