import React, { useState } from 'react';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';

const HeroSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slides = [
		{
			id: 0,
			image: slide1,
			title: 'Slide 1 Title',
			text: 'Slide 1 Description',
		},
		{
			id: 1,
			image: slide2,

			title: 'Slide 2 Title',
			text: 'Slide 2 Description',
		},
		{
			id: 2,
			image: slide3,

			title: 'Slide 3 Title',
			text: 'Slide 3 Description',
		},
	];
	const nextSlide = () => {
		const current = document.querySelector('.slide.current-slide');
		current.classList.add('prev-slide'); //add prev-slide class to current slide
		current.classList.remove('current-slide'); //remove current-slide class to current slide
		setCurrentSlide((currentSlide + 1) % slides.length);
		const next = document.querySelector('.slide');
		next.classList.add('current-slide'); //add current-slide class to next slide
		next.classList.remove('next-slide'); //remove next-slide class to next slide
		if (currentSlide === slides.length - 1) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};

	const prevSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(slides.length - 1);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
	};

	return (
		<div className="hero-slider">
			<div className="slide">
				<img
					src={slides[currentSlide].image}
					alt={slides[currentSlide].title}
				/>
				<h2>{slides[currentSlide].title}</h2>
				<p>{slides[currentSlide].text}</p>
			</div>
			<div className="slide-nav">
				<button onClick={prevSlide}>Prev</button>
				<button onClick={nextSlide}>Next</button>
			</div>
		</div>
	);
};
export default HeroSlider;
