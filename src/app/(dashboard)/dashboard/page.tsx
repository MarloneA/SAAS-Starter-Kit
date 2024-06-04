import { TypographyDemo } from "@/components/_typography";
import React from "react";

type Props = {};

const Page = async (props: Props) => {
  return (
    <div className="p-20">
      <TypographyDemo />
    </div>
  );
};

export default Page;
