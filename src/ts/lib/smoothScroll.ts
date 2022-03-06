import SmoothScroll from 'smooth-scroll';

const smoothScroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

export { smoothScroll };
