const SectionWrapper = ({ children, className, alternate }) => {
  return (
    <section className={`
      py-20 
      ${alternate ? 'bg-gradient-to-b from-blue-100/50 to-blue-50/30' : 'bg-white'}
      transition-colors duration-300
      ${className}
    `}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper; 