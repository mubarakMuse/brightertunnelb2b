import React from 'react';

const CTA = () => {
  return (
    <section className="bg-base-200">
      <div className="text-center py-40 px-4"> {/* Reduced vertical padding */}
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 md:mb-8">
            Ready to start hiring the best engineers?
          </h2>
          <p className="text-lg mb-6 md:mb-8">
            Learn more about how we can help you achieve that.
          </p>
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white btn-wide">Learn More <span aria-hidden="true">→</span></button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
