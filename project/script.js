        const slides = document.querySelectorAll('.slides');
        let counter = 0;

        slides.forEach((slide, index) => {
            slide.style.left = `${index * 100}%`;
        });

        function slideImages() {
            counter++;
            if (counter >= slides.length) {
                counter = 0;
            }
            slides.forEach((slide) => {
                slide.style.transform = `translateX(-${counter * 100}%)`;
            });
        }

        // Change slides every 3 seconds
        setInterval(slideImages, 3000);