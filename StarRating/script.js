const stars = document.querySelectorAll(".fa");
// console.log(stars[0])
const selectedRatingValueText = document.querySelector(
  ".selected-rating-value"
);

let currentTotalSelectedStars = -1;

stars.forEach((starItem, index) => {
    
    starItem.addEventListener("mouseover", () => {
        // console.log(index+1);
        updateStarRating(index+1);
  });
    starItem.addEventListener("click", () => {
        currentTotalSelectedStars = index+1;
        updateStarRating(currentTotalSelectedStars);
        selectedRatingValueText.innerText = `${currentTotalSelectedStars}`;
  });
    starItem.addEventListener("mouseleave", () => {
        updateStarRating(currentTotalSelectedStars);
  });
});


function updateStarRating(currSelectedValue) {
    for (let i = 0; i < 5; i++){
        if (i < currSelectedValue) {
            stars[i].classList.add("yellow")
        } else {
            stars[i].classList.remove("yellow")   
        }
    }
}

// updateStarRating(3);

// function handleMouseOver(event) {
//   const currentRatingValue = event.target.dataset.rating;
// //   if (!currentRatingValue) return;
// //   else handleUpdateRatingState(currentRatingValue);
//     handleUpdateRatingState(currentRatingValue);
// }

// function handleUpdateRatingState(getCurrentRatingValue) {
//   for (let i = 0; i < 5; i++) {
//     if (i < getCurrentRatingValue) {
//       stars[i].classList.replace("fa-star-o", "fa-star");
//     } else {
//       stars[i].classList.replace("fa-star", "fa-star-o");
//     }
//   }
// }

// function handleOnClick(event){
//     const currentRatingValue = event.target.dataset.rating;
//     currentTotalSelectedStars = currentRatingValue;
//     handleUpdateRatingState(currentTotalSelectedStars)
//     selectedRatingValueText.textContent = currentTotalSelectedStars
// }

// function handleMouseLeave(){
//   handleUpdateRatingState(currentTotalSelectedStars)
// }