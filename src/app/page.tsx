import { MockData } from "../data";
import { renderComponent } from "@/components/Components";
import { Fragment } from "react";
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000/'), //add actual metadata
  title: "Veeqo",
  description: "Interview task",
  openGraph: {
    title: "Veeqo task",
    description: "Social media description",
    images: [
      {
        url: "/assets/featured-image-1.png",
        width: 800,
        height: 600,
        alt: "Featured Image",
      },
    ],
  },
};



export default function Home() {
  return (
    <>
      <main className="bg-[#05192D]">
        {MockData.map((item, index) => (
          <Fragment key={index}>{renderComponent(item)}</Fragment>
        ))}
      </main>
    </>
  );
}
 
