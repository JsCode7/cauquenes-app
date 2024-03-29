import React from "react";

interface TitleProps {
  data:{
    name: String,
    description: String
  }
    
}

export default function TitleSection({data}:TitleProps) {
  return (
    <div className="pl-[1.25rem] mb-2 ">
      <h1 className="dark:text-white">
        { data.name }
      </h1>
      <p className="mb-4 dark:text-white">
        { data.description }
      </p>
    </div>
  );
}
