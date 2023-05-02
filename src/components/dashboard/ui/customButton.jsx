const CustomButton = ({ title, type, icon, ...other }) => {
  return (
    <>
      <button
        {...other}
        type={type}
        className="py-2 px-3 bg-pink-500 text-slate-100 rounded-md text-sm shadow-md flex items-center justify-between"
      >
        <div> {icon}</div>
        <div className="ml-3"> {title}</div>
      </button>
    </>
  );
};
export default CustomButton;
