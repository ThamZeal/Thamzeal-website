"use client";

import { Recognition } from "../../sanity/lib/data";

interface RecognitionsFooterProps {
  recognitions: Recognition[];
}

export default function RecognitionsFooter({ recognitions }: RecognitionsFooterProps) {
  if (!recognitions || recognitions.length === 0) {
    return null;
  }

  return (
    <div className="md:col-span-1">
      <h3 className="text-lg font-semibold mb-4">Recognized by</h3>
      <div className="flex flex-row space-x-3">
        {recognitions.map((recognition, index) => (
          <div 
            key={recognition._id} 
            className={`${index === 0 ? 'bg-white p-1 rounded-lg' : ''} w-fit`}
          >
            <img 
              src={recognition.logo} 
              alt={recognition.logoAlt} 
              className="h-10 w-auto max-w-[120px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
