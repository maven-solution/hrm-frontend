const CustomInput = ({ type, placeholder, error, label, ...other }) => {
  return (
    <div className="relative">
      <label htmlFor="" className="text-xs text-slate-400">
        {label}
      </label>
      <input
        {...other}
        type={type}
        className={`border w-full outline-none py-2 px-3 rounded-lg  text-sm text-slate-600 ${
          error ? "border-red-500" : "border-purple-500"
        }`}
        placeholder={placeholder}
      />
      {error ? (
        <small className="text-red-500 absolute top-2 right-5">{error}</small>
      ) : null}
    </div>
  );
};

export default CustomInput;
