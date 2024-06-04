import React from "react";

type Props = {
  children: React.ReactNode;
};

const OwnerLayout = async ({ children }: Props) => {
  return (
    <div className="flex h-screen w-full">
      <p>sidebar</p>
      <div className="w-full h-screen flex flex-col pl-20 md:pl-4">
        {children}
      </div>
    </div>
  );
};

export default OwnerLayout;
