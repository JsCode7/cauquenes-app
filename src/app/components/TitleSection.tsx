import React from "react";

interface TitleProps {
  data:{
    name: String,
    description: String
  }
    
}

export default function TitleSection({data}:TitleProps) {
  return (
    <div className="pl-[1.25rem] mb-2">
      <h1 className="text-white text-2xl font-bold mb-4">
        { data.name }
      </h1>
      <p className="text-white mb-4">
        { data.description }
      </p>
    </div>
  );
}
