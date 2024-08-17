const testimonials = ["Jeramy and his team at the Lorem Ipsum Company whipped my website into shape just in time for tax season. I was excited by the results and am proud to direct clients to my website once again.","My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.","Jeramy and his team at the Lorem Ipsum Company whipped my website into shape just in time for tax season. I was excited by the results and am proud to direct clients to my website once again"]
const authors = [" Seth Gewirtz", "Kelsi Gordon","Roland Weedon"];
const imgurl = "https://source.unsplash.com/random/50x50/?face";
const author = document.querySelector("#author");
const testimonial= document.querySelector("#testimonial");
const image = document.querySelector(".image_container")
const imagearr = [
    "https://source.unsplash.com/random/50x50/?face",
    "https://source.unsplash.com/random/50x50/?face white",
    "https://source.unsplash.com/random/50x50/?face black"
]


let count = 0
// setTimeout(()=>{
 
// }, 3000);

function changeTes(){
    console.log("change")
    author.textContent= authors[count]
    testimonial.textContent = testimonials[count]
    image.innerHTML=`<img src="${imagearr[count]}" alt="Person Image />`
    count ++
    if(count > author.length)
count = 0
}

// changeTes()
setInterval(changeTes, 4000)