function animateElementOnView(elementClass, animationClass, type = "single") {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);

                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    });

    if (type === "multiple") {
        const elements = document.querySelectorAll(elementClass)
        elements.forEach(function (element) {
            observer.observe(element);
        })
    } else {

        const element = document.querySelector(elementClass)
        observer.observe(element);
    }

}


animateElementOnView(".sections.left-section", "animate__fadeIn")
animateElementOnView(".experience-title", "animate__zoomIn")
animateElementOnView(".experience-content p.experience", "animate__zoomIn", "multiple")
animateElementOnView(".experience-content p.education", "animate__flipInX", "multiple")
animateElementOnView(".card-project", "animate__bounceIn", "multiple")
animateElementOnView(".title-education", "animate__flipInX")
animateElementOnView(".title-skill ", "animate__fadeIn")

