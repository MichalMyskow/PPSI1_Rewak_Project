import React, { useState, useEffect } from 'react';
import {
	SliderSection,
	SliderWrapper,
	SliderSlide,
	SliderSlider,
	SliderImg,
	SliderContent,
	SliderBtnLink,
	Arrow,
	SliderButtons,
	PrevArrow,
	NextArrow
} from './Slider.elements';

const Slider = () => {
	const [current, setCurrent] = useState(0);
	const [posts, setPosts] = useState([]);
	const length = posts.length;

	useEffect(() => {
		const url1 = 'http://blogapi.local/api/posts?page=1';

		fetch(url1, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			credentials: 'include'
		})
			.then(resp => resp.json())
			.then(resp => setPosts(resp));
	}, []);

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(posts) || posts.length <= 0) {
		return null;
	}


	return (
		<SliderSection>
			<SliderWrapper>
				{posts.map((post, index) => {
					return (
						<SliderSlide key={index}>
							{index === current && (
								<SliderSlider>
									<SliderImg src={post.photoLink} alt='PhotoError' />
									<SliderContent>
										<h1> {post.title} </h1>
										<p> {post.subtitle} </p>
										<SliderBtnLink
											to={'/article' + (current + 1)}
											css={`
												max-width: 160px;
											`}
										>
											Przejdź
											<Arrow />
										</SliderBtnLink>
									</SliderContent>
								</SliderSlider>
							)}
						</SliderSlide>
					);
				})}
				<SliderButtons>
					<PrevArrow onClick={prevSlide} />
					<NextArrow onClick={nextSlide} />
				</SliderButtons>
			</SliderWrapper>
		</SliderSection>
	);
};

export default Slider;
