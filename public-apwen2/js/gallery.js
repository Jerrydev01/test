// filterable image gallery

const filterContainer = document.querySelector('.gallery-filter');
console.log(filterContainer);

const galleryItems = document.querySelectorAll('.gallery-item');
console.log(galleryItems);

filterContainer.addEventListener("click", (event) =>{
    if(event.target.classList.contains("filter-item")){
 
      // deactivate existing active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");
 
      // activate new 'filter-item'
        event.target.classList.add("active");
 
        const filterValue = event.target.getAttribute("data-filter");
 
        galleryItems.forEach((item) =>{
 
        if(item.classList.contains(filterValue) || filterValue === 'all'){
            item.classList.remove("hide");
             item.classList.add("show");
        }
 
        else{
            item.classList.remove("show");
            item.classList.add("hide");
        }
 
         });
    }
  });

/*============== end of image gallery =========== */


let fullImgBox = document.getElementById('fullImgBox');
console.log(fullImgBox);
let fullImg = document.getElementById('fullImg');
console.log(fullImg);

function openFullImg(pic) {
  fullImgBox.style.display = 'flex';
  fullImg.src = pic;
}

function closeFullImg() {
  fullImgBox.style.display = 'none';
  
}

