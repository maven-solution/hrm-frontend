const CustomSelect = ({ error, label, options, ...other }) => {
  return (
    <>
      <div className="relative">
        <label htmlFor="" className="text-xs text-slate-400">
          {label}
        </label>
        <select
          name=""
          id=""
          className={`border w-full outline-none py-2 px-3 rounded-lg  text-sm text-slate-600 ${
            error ? "border-red-500" : "border-purple-500"
          }`}
          {...other}
        >
          <option>Select Item</option>
          {options?.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
        {error ? (
          <small className="text-red-500 absolute top-2 right-5">{error}</small>
        ) : null}
      </div>
    </>
  );
};

export default CustomSelect;
