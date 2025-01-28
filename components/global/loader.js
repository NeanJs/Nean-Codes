function Loader() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col relative  bg-gray">
      <div className="loader flex items-center justify-center flex-col">
        <svg
          width="134"
          height="122"
          viewBox="0 0 134 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="path"
            className="path"
            d="M67.9993 2.5H3.5M67.9993 61H3.5M67.9993 119.652H3.36517M132 121V1L67.9993 118.5M67.9993 1L67.9993 121M2 1V121M66.4479 119.652L2.44702 5.65222"
            stroke="black"
            stroke-width="3"
          />
        </svg>
      </div>
    </div>
  );
}

export default Loader;
