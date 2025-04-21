import Carousel from 'react-bootstrap/Carousel';
import signupImage from "../assets/image/image1.jpg";


// Replace with actual blog images and captions as needed
type CarouselItem = {
  image: string;
  title: string;
  description: string;
};

const carouselItems: CarouselItem[] = [
  {
    image: signupImage,
    title: 'Welcome to Mini Blogs',
    description: 'Share your thoughts, read stories, and connect with others!'
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    title: 'Discover New Blogs',
    description: 'Explore trending posts and find your inspiration.'
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    title: 'Write & Publish',
    description: 'Start your blogging journey today!'
  }
];

export default function BlogCarousel() {
  return (
    <Carousel
      fade
      className="shadow rounded overflow-hidden"
      style={{ width: 1366, height: 600, maxWidth: '100%', margin: '0 auto' }}
    >
      {carouselItems.map((item, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={typeof item.image === 'string' ? item.image : ''}
            alt={item.title}
            style={{ width: '100%', height: 600, objectFit: 'cover' }}
          />
          <Carousel.Caption className="d-flex flex-column align-items-start justify-content-center h-100 text-start" style={{ left: 0, right: 'auto', top: 0, bottom: 0, width: '50%', padding: '2rem' }}>
            <div className="p-3 w-100">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
