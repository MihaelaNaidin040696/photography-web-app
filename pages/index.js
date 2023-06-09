import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import Head from "next/head";
import Image from "next/image";
import { SliderData } from "@/components/SliderData";
import Instagram from "@/components/Instagram";

export default function Home() {
  return (
    <>
      <Head>
        <title>Photograpy App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive."
      />
      <Slider slides={SliderData} />
      <Instagram />
    </>
  );
}
