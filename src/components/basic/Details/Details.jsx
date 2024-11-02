import React from 'react';
import Grid from '../background/Grid';
import GradientAnimation from '../background/GradientAnimation';
import PersonCard from './PersonCard';
// import teamData from './TeamData';

const ConnectorLine = ({ className }) => (
  <div className={`absolute border-4 border-white-700 ${className}`} />
);

const OrgChart = () => {
  const personImages = {
    'S Md Ishrath': '/images/team/ishrath.jpg',
    'C Samsundar': '/images/team/sam.jpg',
    'N. Pawan': '/images/team/pawan.jpg',
    'R Gnana Prakash': '/images/team/gnana.jpg',
    'B Krishna Arjun': '/images/team/blank.png',
    'G Sudarshan': '/images/team/sudharshan.jpg',
    'Koteswar Mani': '/images/team/koti.jpg',
    'Sainath': '/images/team/sainath.jpg',
    'Teja Kumar': '/images/team/tej .jpg',
    'Nani': '/images/team/nani.jpg',
    'G Ganesh': '/images/team/gani.jpg',
    'Chaitanya': '/images/team/chaithu.jpg',
    'B Ganesh': '/images/team/ganesh.jpg',
    'B Srinu': '/images/team/srinu.jpg',
    'V Phanindra': '/images/team/phani.jpg',
    'Y Santi Kumar': '/images/team/santhi.jpg',
    'G Jayanth Kumar': '/images/team/jayanth.jpg'
  };

  return (
    <div
      className="min-h-screen bg-[#1f0f5e] bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(src/assets/images/grid.png)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-[#0B021C]/80" />
      <GradientAnimation>
        <Grid>
          <div className="w-full min-h-screen p-8 relative">
            <div className="max-w-7xl mx-auto relative">
              {/* Top Section: UI/UX, Founders, DevOps */}
              <div className="grid grid-cols-7 gap-24 mb-20">
                {/* UI/UX Section */}
                <div className="col-span-2 relative">
                  <div className="text-white text-3xl font-bold mb-8">UI UX</div>
                  <div className="space-y-4 flex flex-col items-start mt-4">
                    <PersonCard name="S Md Ishrath" imageUrl={personImages['S Md Ishrath']} />
                    <PersonCard name="C Samsundar" imageUrl={personImages['C Samsundar']} />
                    <PersonCard name="N. Pawan" imageUrl={personImages['N. Pawan']} />
                  </div>
                </div>

                {/* Founders Section */}
                <div className="col-span-3 relative mt-20">
                  <div className="flex justify-between">
                    <PersonCard name="R Gnana Prakash" imageUrl={personImages['R Gnana Prakash']} />
                    <PersonCard name="B Krishna Arjun" imageUrl={personImages['B Krishna Arjun']} />
                    <PersonCard name="G Sudarshan" imageUrl={personImages['G Sudarshan']} />
                  </div>
                  <div className="text-white text-4xl font-bold mt-6 text-center">FOUNDERS</div>
                </div>

                {/* DevOps Section */}
                <div className="col-span-2 relative">
                  <div className="text-white text-3xl font-bold mb-8 text-right">DEVOPS</div>
                  <div className="flex justify-end mt-4">
                    <PersonCard name="Koteswar Mani" imageUrl={personImages['Koteswar Mani']} />
                  </div>
                </div>
              </div>

              {/* Center Logo */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-40">
                <div className="w-32 h-32 rounded-full bg-blue-500/10 border-4 border-white-400 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/team/logo.jpg"
                    alt="Company Logo"
                    className="w-50 h-50 object-contain"
                    onError={(e) => {
                      e.target.insertAdjacentHTML('afterend', `
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" class="w-20 h-20 text-blue-400">
                          <path d="M13 21C13 21 21 14.5 21 9.5C21 4.5 17 2 13 2C9 2 5 4.5 5 9.5C5 14.5 13 21 13 21Z" />
                        </svg>
                      `);
                      e.target.remove();
                    }}
                  />
                </div>

                <ConnectorLine className="w-px h-[6rem] -top-24 left-1/2 -translate-x-1/2" />
                <ConnectorLine className="w-[21rem] h-px left-[calc(45%-24rem)] top-1/4" />
                <ConnectorLine className="w-[21rem] h-px right-[calc(45%-24rem)] top-1/4" />
                <ConnectorLine className="w-px h-[26rem] -top-[24rem] left-[calc(45%-24rem)]" />
                <ConnectorLine className="w-[7rem] h-px -top-[24rem] left-[calc(37%-30rem)]" />
                <ConnectorLine className="w-px h-[26rem] -top-[24rem] right-[calc(45%-24rem)]" />
                <ConnectorLine className="w-[7rem] h-px -top-[24rem] right-[calc(37%-30rem)]" />
                <ConnectorLine className="w-[18rem] h-px left-[calc(40%-21rem)] top-1/2" />
                <ConnectorLine className="w-[18rem] h-px right-[calc(40%-21rem)] top-1/2" />
                <ConnectorLine className="w-px h-[8rem] top-[4rem] left-[calc(40%-21rem)]" />
                <ConnectorLine className="w-px h-[8rem] top-[4rem] right-[calc(40%-21rem)]" />
              </div>

              <div className="mb-32"></div>


              <div className="flex justify-between mb-8 relative">
                <div className="flex w-full">
                  <div className="w-1/2 flex justify-center pr-5">
                    <div className="text-white text-3xl font-bold">FRONTEND</div>
                  </div>
                  <div className="w-1/2 flex justify-center pl-14">
                    <div className="text-white text-3xl font-bold">BACKEND</div>
                  </div>
                </div>
              </div>


              <div className="grid grid-cols-2 gap-16">

                <div className="grid grid-cols-3 gap-6">
                  <PersonCard name="Sainath" imageUrl={personImages['Sainath']} />
                  <PersonCard name="Teja Kumar" imageUrl={personImages['Teja Kumar']} />
                  <PersonCard name="Nani" imageUrl={personImages['Nani']} />
                  <PersonCard name="G Ganesh" imageUrl={personImages['G Ganesh']} />
                  <PersonCard name="Chaitanya" imageUrl={personImages['Chaitanya']} />
                  <PersonCard name="B Ganesh" imageUrl={personImages['B Ganesh']} />
                </div>


                <div className="grid grid-cols-3 gap-6">
                  <PersonCard name="B Srinu" imageUrl={personImages['B Srinu']} />
                  <PersonCard name="V Phanindra" imageUrl={personImages['V Phanindra']} />
                  <PersonCard name="Y Santi Kumar" imageUrl={personImages['Y Santi Kumar']} />
                  <PersonCard name="G Jayanth Kumar" imageUrl={personImages['G Jayanth Kumar']} />
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </GradientAnimation>
    </div>
  );
};

export default OrgChart;
