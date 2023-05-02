const CustomCheckbox = ({ children, ...attributes }) => {
  return (
    <>
      <label className="relative inline-flex items-center mx-auto cursor-pointer">
        <input
          type="checkbox"
          defaultChecked=""
          className="sr-only peer"
          {...attributes}
        />
        <div className="w-7 h-4 border border-rose-600 dark:border-slate-200 dark:bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-rose-500 dark:after:bg-slate-200 after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:after:bg-cyan-500 dark:peer-checked:after:bg-slate-200 peer-checked:bg-white peer-checked:border-cyan-500 dark:peer-checked:border-slate-200 dark:peer-checked:bg-slate-700"></div>
      </label>
    </>
  );
};

export default CustomCheckbox;
