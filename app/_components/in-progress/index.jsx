import { Center, ParallaxSlider } from '@/components';

/** @param {import('react').PropsWithChildren<unknown>} */
export function InProgress({ children }) {
  return (
    <Center className='mb-80 h-screen'>
      <div className='select-none'>
        <h1 className='text-[max(10em,18vw)]'>
          <ParallaxSlider repeat={8} baseVelocity={2}>
            <span className='pe-12'>
              {children}
              <span className='spacer'>—</span>
            </span>
          </ParallaxSlider>
        </h1>
      </div>
    </Center>
  );
}
