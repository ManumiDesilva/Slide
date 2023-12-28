import React, { useState, useEffect } from 'react';

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

    useEffect(() => {
        // Reset to first slide when slides change
        setCurrentSlide(0);
    }, [slides]);

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    className="small outlined"
                    onClick={handleRestart}
                    disabled={currentSlide === 0}
                    style={{ backgroundColor: 'green', color: 'white' }}
                >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    className="small"
                    onClick={handlePrev}
                    disabled={currentSlide === 0}
                    style={{ backgroundColor: 'green', color: 'white' }}
                >
                    Prev
                </button>
                <button
                    data-testid="button-next"
                    className="small"
                    onClick={handleNext}
                    disabled={currentSlide === slides.length - 1}
                    style={{ backgroundColor: 'green', color: 'white' }}
                >
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center" style={{ backgroundColor: 'white' }}>
                <h1 data-testid="title">{slides[currentSlide]?.title}</h1>
                <p data-testid="text">{slides[currentSlide]?.text}</p>
            </div>
        </div>
    );
}

export default Slides;
