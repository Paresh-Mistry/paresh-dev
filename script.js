var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

document
  .querySelector(".img-thumbnail")
  .classList.add(
    "animate__animated",
    "animate__pulse",
    "animate__infinite",
    "animate__slow"
  );

function date() {
  let date = new Date().getFullYear();
  return date;
}
let year = document.querySelector("footer b").innerHTML;
let new_year = (document.querySelector("footer b").innerHTML = `${year} ${date(
  date
)}`);

let viewBtn = document.querySelectorAll(".card-body a");
viewBtn.forEach((e) => {
  let link = e.getAttribute('href')
  e.addEventListener("click", (e) => {
    if(link){
      console.log(e);
      e.preventDefault()
    }
  });
});
