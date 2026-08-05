import React from 'react';

interface Planet {
  tech: string;
  icon: string;
  orbit: string;
}

const planets: Planet[] = [
  { tech: 'Flutter', icon: '/icons/flutter.svg', orbit: 'orbit-1' },
  { tech: 'Dart', icon: '/icons/dart.svg', orbit: 'orbit-2' },
  { tech: 'Java', icon: '/icons/java.svg', orbit: 'orbit-3' },
  { tech: 'Python', icon: '/icons/python.svg', orbit: 'orbit-4' },
  { tech: 'C#', icon: '/icons/csharp.svg', orbit: 'orbit-5' },
  { tech: 'HTML', icon: '/icons/html.svg', orbit: 'orbit-6' },
  { tech: 'CSS', icon: '/icons/css.svg', orbit: 'orbit-7' },
  { tech: 'TypeScript', icon: '/icons/tp.svg', orbit: 'orbit-8' },
];

const SolarSystem: React.FC = () => {
  return (
    <div className="solar-system relative w-[500px] h-[500px] mx-auto max-md:w-[300px] max-md:h-[300px]">
      {/* Sun */}
      <div className="sun absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] z-10 max-md:w-[120px] max-md:h-[120px]">
        <img
          src="/face.jpg"
          alt="Ezequiel Salazar"
          className="profile-img w-full h-full rounded-full object-cover border-4 border-orange-500/50 shadow-[0_0_40px_rgba(255,165,0,0.6)]"
        />
        <div className="sun-glow absolute -top-5 -left-5 w-[140%] h-[140%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.8),transparent_70%)] blur-[20px] -z-10 animate-[pulse_3s_ease-in-out_infinite_alternate]"></div>
      </div>

      {/* Orbits */}
      {planets.map((planet, index) => (
        <div
          key={planet.tech}
          className={`orbit ${planet.orbit} absolute top-1/2 left-1/2 border border-dashed border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-[orbit_${20 + index * 5}s_linear_infinite]`}
          style={{
            width: `${220 + index * 40}px`,
            height: `${220 + index * 40}px`,
          }}
        >
          <div
            className="planet absolute top-0 left-1/2 w-[60px] h-[60px] max-md:w-[40px] max-md:h-[40px] rounded-full flex items-center justify-center bg-gray-800/80 backdrop-blur-sm border border-white/20 shadow-lg -translate-x-1/2 transition-all duration-300 hover:scale-120 hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] hover:z-20 group"
            data-tech={planet.tech}
          >
            <img
              src={planet.icon}
              alt={planet.tech}
              className="w-10 h-10 max-md:w-7 max-md:h-7 animate-[spin_10s_linear_infinite] group-hover:animate-none"
            />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900/90 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {planet.tech}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SolarSystem;