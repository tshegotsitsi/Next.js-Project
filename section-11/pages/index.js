import { Fragment } from "react";

import Hero from "../component/home-page/hero";
import FeaturedPosts from "../component/home-page/featured-post";

const DUMMY_POSTS = [
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a the React framework for production",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs1",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a the React framework for production",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a the React framework for production",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a the React framework for production",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs4",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
