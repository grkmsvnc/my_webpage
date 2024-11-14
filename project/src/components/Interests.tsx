import React from 'react';

const Interests = () => {
  return (
    <section id="interests" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
          Beyond Technology
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
          <h3 className="text-xl font-semibold text-white mb-4">Athletics & Sports</h3>
          <p className="text-gray-400 leading-relaxed">
            Active member of the university rugby team with numerous victories.
            Also engaged in orienteering, athletics, and wrestling, demonstrating
            dedication to physical excellence and team collaboration.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
          <h3 className="text-xl font-semibold text-white mb-4">Intellectual Pursuits</h3>
          <p className="text-gray-400 leading-relaxed">
            Passionate about expanding intellectual horizons through extensive reading
            in history and philosophy, connecting technological innovation with
            broader human knowledge and understanding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Interests;