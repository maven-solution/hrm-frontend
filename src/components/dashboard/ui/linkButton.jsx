import Link from "next/link";

const LinkButton = ({ icon, title, link }) => {
  return (
    <Link
      href={link}
      className="items-center text-sm py-2 px-4 bg-purple-500 inline-block rounded-md shadow-lg text-white hover:bg-purple-600 dark:bg-slate-800"
    >
      <div className="flex items-center">
        {icon}
        <span className="ml-3">{title}</span>
      </div>
    </Link>
  );
};

export default LinkButton;
