const elementsL = document.querySelectorAll('.faq-container, .slideanim-left');
const elementsR = document.querySelectorAll('.faq-container, .slideanim-right');

const isInView = (entries, className) => {
  entries.forEach((entry) => {
    const element = entry.target;
    if (entry.isIntersecting) {
      element.classList.add('slide');
    } else {
      element.classList.remove('slide');
    }
  });
};

const observerL = new IntersectionObserver((entries) => isInView(entries, 'slideanim-left'));
const observerR = new IntersectionObserver((entries) => isInView(entries, 'slideanim-right'));

elementsL.forEach((element) => {
  observerL.observe(element);
});

elementsR.forEach((element) => {
  observerR.observe(element);
});

// Trigger initial animation when the page loads
elementsL.forEach((element) => {
  if (observerL) {
    const entry = observerL.takeRecords().find((record) => record.target === element);
    isInView([entry], 'slideanim-left');
  }
});

elementsR.forEach((element) => {
  if (observerR) {
    const entry = observerR.takeRecords().find((record) => record.target === element);
    isInView([entry], 'slideanim-right');
  }
});
