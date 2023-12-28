import React, { useState } from 'react';


function Slides({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleRestart = () => {
        setCurrentSlide(0);
    };

    const handleNext = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    className="small outlined restart-button"
                    onClick={handleRestart}
                    disabled={currentSlide === 0}
                >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    className="small prev-button"
                    onClick={handlePrev}
                    disabled={currentSlide === 0}
                >
                    Prev
                </button>
                <button
                    data-testid="button-next"
                    className="small next-button"
                    onClick={handleNext}
                    disabled={currentSlide === slides.length - 1}
                >
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center slide-container">
                <h1 data-testid="title" className="slide-title">
                    {slides[currentSlide].title}
                </h1>
                <p data-testid="text" className="slide-text">
                    {slides[currentSlide].text}
                </p>
            </div>
        </div>
    );
}

export default Slides;


const slides = [
  { title: "Today's Workout Plan", text: "Today we're gonna do three fundamental exercises." },
  { title: "First Exercise: Push-ups", text: "Do 10 push-ups." },
  { title: "Second Exercise: Squats", text: "Do 20 squats." },
  { title: "Third Exercise: Sit-ups", text: "Do 30 sit-ups." },
  { title: "Great Job!", text: "You've completed the workout!" },
];


