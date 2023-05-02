const DropFile = ({ error, label, options, ...other }) => {
  return (
    <>
      <div className="flex items-center justify-center w-full relative">
        <label
          htmlFor="dropzone-file"
          className={`flex flex-col mt-5 items-center justify-center w-full h-16 border-2  border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 ${
            error ? "border-red-500" : "border-purple-500"
          }`}
        >
          <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
          <div className="flex items-center justify-center">
            <svg
              aria-hidden="true"
              className="w-6 h-6  text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                rokelinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className=" text-sm ml-5 text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload File</span>
            </p>
          </div>
          <input id="dropzone-file" {...other} type="file" className="hidden" />
        </label>
        {error ? (
          <small className="text-red-500 absolute top-10 right-5">
            {error}
          </small>
        ) : null}
      </div>
    </>
  );
};

export default DropFile;
