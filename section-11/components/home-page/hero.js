import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/IMG_20230907_152223_256.jpg'
          alt='An image showing Tshego'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Tshego</h1>
      <p>
        This is a blog about web development - especially frontend framework like React.
      </p>
    </section>
  );
}

export default Hero;
