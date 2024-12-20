import React, { useState } from 'react';
import PersonDetailsModal from './PersonDetailsModal';
import TeamData from './TeamData';
const PersonCard = ({ name, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const personDetails = teamData[name] || {};

  return (
    <>
      <div
         className="relative flex flex-col items-center cursor-pointer group"
         onClick={() => setIsModalOpen(true)}
      >
        <div className="relative bg-[#070829] rounded-lg p-3 
          border-2
          border-b-blue-400 
          border-r-blue-400 
          border-t-white/400
          border-l-white/400
          min-w-[120px] 
          z-10 
          group-hover:border-t-blue-300
          group-hover:border-l-blue-300
          group-hover:border-b-blue-300
          group-hover:border-r-blue-300
          transition-all duration-300
          hover:shadow-lg hover:shadow-blue-500/10
          transform group-hover:-translate-y-0.5"
        >
          <div className="flex justify-center mb-8 min-w-[110px] min-h-[50px]">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 ring-2 ring-blue-400/30 group-hover:ring-blue-400/50 transition-all">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/api/placeholder/48/48";
                }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">
              {name}
            </div>
            {personDetails.designation && (
              <div className="text-blue-300/80 text-xs mt-1 font-semibold group-hover:text-blue-200 transition-colors">
                {personDetails.designation}
              </div>
            )}
          </div>
        </div>
      </div>

      <PersonDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        person={{
          name,
          imageUrl,
          ...personDetails
        }}
      />
    </>
  );
};

export default PersonCard;