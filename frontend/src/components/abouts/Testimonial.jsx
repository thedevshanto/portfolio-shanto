// Import necessary modules and components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
//icons
import { ImQuotesLeft } from 'react-icons/im';

//data
const testimonials = [
  {
    messege:
      'I am not just learning to code — I am building my own door to the future.',
    name: 'A.S. Shanto',
  },
  {
    messege: 'Every line I write brings me closer to the life I’m designing.',
    name: 'A.S. Shanto',
  },
  {
    messege: 'I am not chasing jobs. I’m building proof that I deserve one.',
    name: 'A.S. Shanto',
  },
  {
    messege:
      'I might not know everything, but I’m fearless about learning anything.',
    name: 'A.S. Shanto',
  },
];

const Testimonial = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="w-full max-w-[310px] md:max-w-[520px] bg-secondary ruunded-lg "
    >
      {testimonials.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex gap-8 px-8 py-6">
              <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
              <div className="flex flex-col gap-2">
                <p>{person.messege}</p>
                <p className="self-end text-accent font-semibold">
                  {person.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonial;
