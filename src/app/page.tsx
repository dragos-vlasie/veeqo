import { MockData } from "../data";
import { renderComponent } from "@/components/Components";
import { Fragment } from "react";

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
 
