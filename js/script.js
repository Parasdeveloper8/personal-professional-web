const images=[
    "/projects-photos/Screenshot (91).png",
    "/projects-photos/Screenshot (92).png",
    "/projects-photos/Screenshot (93).png",
    "/projects-photos/Screenshot (94).png"
]
let count = 0;
const automaticSlider=()=>{
    const image = document.getElementById("project-image");
    image.src = images[count]
    count++;
    if (count === images.length) {
        count = 0;
    }
}
setInterval(automaticSlider,2000);
