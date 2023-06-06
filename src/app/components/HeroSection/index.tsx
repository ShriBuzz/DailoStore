'use client';

import React, { useLayoutEffect, useRef } from 'react';

import { getDirectionKey, directionClasses, directions } from './util';

const MainImage = ({
  title,
  price,
  src,
  className,
}: {
  title: string;
  price: number;
  src: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  function update(ev: MouseEvent, prefix: string) {
    ref.current?.classList.remove(...directionClasses);
    ref.current?.classList.add(
      `${prefix}-${
        directions[getDirectionKey(ev, ref.current) as keyof typeof directions]
      }`
    );
  }

  useLayoutEffect(() => {
    const { current } = ref;
    if (current) {
      current.addEventListener('mouseover', (ev) => update(ev, 'in'));
      current.addEventListener('mouseout', (ev) => update(ev, 'out'));
    }

    return () => {
      if (current) {
        current.removeEventListener('mouseover', (ev) => update(ev, 'in'));
        current.removeEventListener('mouseout', (ev) => update(ev, 'out'));
      }
    };
  }, []);

  return (
    <div
      className={`row-span-4 w-full h-full min-h-[360px] lg:min-h-[auto] relative overflow-hidden
        ${className}
      `}
      ref={ref}
    >
      <span className='info z-10 text-white'>
        <div className='bg-[rgba(0,0,0,0.2)] p-4 w-full'>
          <p className=' text-lg'>{title}</p>
          <p>NRs. {price}</p>
        </div>
      </span>
      <span
        className={`absolute w-full h-full inset-0 
        transition-all duration-300
        bg-cover bg-center bg-no-repeat
        hover:scale-[1.05]`}
        style={{
          backgroundImage: `url(${src})`,
        }}
      ></span>
    </div>
  );
};

const HeroSection = () => {
  return (
    <main
      className={`grid grid-flow-row gap-2 p-3 h-auto
      lg:grid-cols-12 lg:h-[calc(100vh-80px)]
    `}
    >
      <MainImage
        title='Leather Bag'
        price={2300}
        src={
          'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
        className='lg:col-span-7 lg:row-span-full'
      />

      <div
        className={`grid grid-flow-row gap-2
        lg:col-span-5
      `}
      >
        <MainImage
          title='Running Shoes with spikes for men'
          price={2150}
          src={
            'https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          }
          className='lg:row-span-6'
        />
        <MainImage
          title='Vitamin B12 probiotics'
          price={3100}
          src={
            'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          }
          className='lg:row-span-6'
        />
      </div>
    </main>
  );
};

export default HeroSection;
