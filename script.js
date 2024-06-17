console.log(
  "image n1",
  "https://www.ibs.it/fight-club-libro-chuck-palahniuk/e/9788804508359"
);


const d = document;

d.addEventListener("click", e => {
  if (e.target.matches(".front")) {
    e.target.classList.toggle("activo");
  }
})