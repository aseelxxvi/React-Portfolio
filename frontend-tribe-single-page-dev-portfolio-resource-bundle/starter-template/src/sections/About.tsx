import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

import bookImage from '@/assets/images/book-cover.jpeg';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';

import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType:  ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  
]

export const AboutSection = () => {
  return (
    <div id="about" className=" scroll-mt-28 py-20 lg:py-28">
      <div className="container">
  <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do and what inspires me." />
  <div className="mt-20 flex flex-col gap-8">
    <div className="grid  grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
    <Card className="h-[320px] md:col-span-2 lg:col-span-1">
      <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
      <div className="w-40 mx-auto mt-2 md:mt-0">
      <Image src={bookImage} alt="Book Cover" />
      </div>

    </Card>
    <Card className="h-[320px] md:col-span-3 lg:col-span-2">
      <CardHeader title="My Toolbox" description="Explore the technologies and tool I use to craft exceptional digital experiences. " className="" />
      <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
      <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>

      </Card>
      </div>
      
    <Card className="h-[320px] p-0 relative">
      <Image src={mapImage} alt="map" className="h-full w-full  object-cover object-left-top" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
      <Image src={smileMemoji} alt="smiling emoji" className="size-20" />
      </div>
    </Card>
  </div>

  </div>
  </div>
  );
};
