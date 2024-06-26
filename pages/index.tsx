// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

import Head from "next/head";
import { getAllPosts } from "../lib/notionAPI";


/**
 * Retrieves the static props for the index page.
 * @returns {Promise<{ props: { allposts: any[] }, revalidate: number }>} The static props object containing the `allposts` array and the revalidation time.
 */
export const getStaticProps = async () => {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts,
    },
    revalidate: 60 * 60 * 24,
  };
}



export default function Home({ allPosts }) {
  console.log(allPosts);
  return (
    <div>
      <Head>
        <title>Kazuma Notion Blog</title>
        <meta name="description" content="Generated by create-next-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
