import { Description, Header, Navbar, Thumbnail } from './_layout';

export const metadata = {
  title: 'Home | Dennis Snellenberg',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Thumbnail />
      </main>
    </>
  );
}
