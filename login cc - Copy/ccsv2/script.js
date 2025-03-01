// Testimonials Carousel Animation (Simple Example)
let testimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial-item");
const totalTestimonials = testimonials.length;

function showNextTestimonial() {
  testimonials[testimonialIndex].style.display = "none"; // Hide current
  testimonialIndex = (testimonialIndex + 1) % totalTestimonials; // Get next index
  testimonials[testimonialIndex].style.display = "block"; // Show next
}

// Initially hide all testimonials except the first one
testimonials.forEach((testimonial, index) => {
  if (index !== 0) testimonial.style.display = "none";
});

setInterval(showNextTestimonial, 3000); // Change testimonial every 3 seconds

const params = new URLSearchParams(window.location.search);
const username = params.get("name");
document.getElementById("displayName").innerText = `${username}!`;
