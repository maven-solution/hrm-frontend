import Link from "next/link";

const SearchButton = ({ icon, title }) => {
  return (
    <button
      type="submit"
      className="items-center text-sm py-2 px-4 bg-cyan-500 inline-block rounded-md shadow-lg text-white hover:bg-cyan-600 dark:bg-slate-800"
    >
      <div className="flex items-center">
        {icon}
        {/* <span className="ml-3">{title}</span> */}
      </div>
    </button>
  );
};

export default SearchButton;
