const CustomCard = ({ children }) => {
  return (
    <div className="p-4 bg-cyan-50 shadow-md rounded-md border-l-4 border-cyan-500 dark:bg-slate-600">
      {children}
    </div>
  );
};

export default CustomCard;
