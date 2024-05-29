let url="https://fakestoreapi.com/products"
let container = document.getElementById("con");
async function fetchAndDisplayImages() {
    var res= await fetch (url)
    let data= await res.json()
    console.log(data);
    for (const code of data) {
      let img = document.createElement("img");
      img.src = code.image;
      container.appendChild(img);
      let title = document.createElement("p");
      title.innerText = code.title;
      container.appendChild(title);
      let price= document.createElement("p")
      price.innerText= code.price;
      container.appendChild(price);
    }
  }
  
fetchAndDisplayImages();
  