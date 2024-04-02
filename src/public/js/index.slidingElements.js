let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };
  const element1 = document.getElementById('description');

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        element1.classList.add('appear');
      }
      else {
        element1.classList.remove('appear');
      }
    });
  }, options);
  observer.observe(element1);
  