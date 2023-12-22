import { InProgress } from '@/app/_components';
import { Transition } from '@/app/_layout';

export const metadata = {
  title: 'Contact',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
};

export default function Contact() {
  return (
    <Transition>
      <InProgress>Contact Page</InProgress>
    </Transition>
  );
}
