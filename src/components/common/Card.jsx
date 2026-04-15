const Card = ({ children, className = "", hover = true }) => {
  const hoverClass = hover ? "hover:shadow-xl hover:-translate-y-1" : "";

  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
