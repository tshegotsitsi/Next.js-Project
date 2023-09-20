import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="./Image/site/IMG_20230828_141636_250.jpg"
          alt="My Image"
          width={300}
          height={200}
        />
      </div>
      <h1>Hi I'm TMT</h1>
      <p>I Love web development.</p>
    </section>
  );
}

export default Hero;
