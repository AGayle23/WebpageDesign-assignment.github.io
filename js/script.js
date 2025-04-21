//FACULTY PAGE
//ANIMATION
AOS.init({
  duration: 1000, // animation lasts 1000 milliseconds (3 second) 
  once: true      // Animations only play once when scrolled into view
});
// DEAN PHOTO ANIMATION ON LOAD
window.addEventListener('load', () => {
  const deanPhoto = document.querySelector('.dean-photo');
  if (deanPhoto) {
    deanPhoto.style.transform = 'scale(1.05)';
    deanPhoto.style.transition = 'transform 1s ease';
  }
});
//PROGRAMME SECTION
//pop-up button
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; //Disable page scroll
    }
  }
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; //Re-enable page scroll
  }
}
// Close modal when clicking outside of it
window.addEventListener("click", function (event) {
  const modals = document.querySelectorAll(".programme-modal");
  modals.forEach(function (modal) {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
