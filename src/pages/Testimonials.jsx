import React from 'react';
import { HeroSlider } from '../components';
import { Data } from '../services/index';

const Testimonials = ({ data = Data }) => {
  const [currentSlider, setCurrentSlider] = React.useState(1);

  let number = data.length;

  React.useEffect(() => {
    const autoSlider = setInterval(() => {
      setCurrentSlider(currentSlider === number ? 1 : currentSlider + 1);
    }, 8000);
    return () => clearInterval(autoSlider);
  }, [currentSlider, number]);

  return (
    <React.Fragment>
      <HeroSlider data={data} />
      <section className='w-full bg-blue-600 py-10'>
        <h3 className='text-center text-2xl font-bold text-white uppercase'>
          Testimonials From The People We helped
        </h3>
      </section>
      <section className='w-full h-[70vh] flex flex-col justify-center gap-10'>
        {data?.map((data, index) => {
          const show = data?.id === currentSlider;
          return (
            <React.Fragment key={index}>
              {show && (
                <div className='w-full flex flex-col justify-center items-center'>
                  <img
                    src={data?.image}
                    alt={data?.alt}
                    className='w-[8rem] h-[8rem] object-cover rounded-full shadow-lg '
                  />
                  <span className=''>{data.title}</span>
                  <p className=' w-60 text-black epx-2 py-1 font-medium text-center'>
                    {data?.desc}
                  </p>
                  <p className='inline-flex gap-1 text-yellow-500 text-2xl'>
                    {data.buttonTitle}
                  </p>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </section>
    </React.Fragment>
  );
};
export default Testimonials;
