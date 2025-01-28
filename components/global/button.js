export const Button = ({
  title,
  className,
  primary,
  rounded,
  children,
  onClick,
  submit,
  props,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type={`${submit ? "submit" : ""}`}
      onClick={onClick}
      className={`w-fit h-fit disabled:pointer-events-none flex items-center justify-center text py-2 px-4 border-2 border-nean_blue min-w-[120px] font-light ${
        primary
          ? "bg-nean_blue text-white hover:bg-transparent hover:text-nean_blue"
          : "text-nean_blue hover:bg-nean_blue hover:text-white"
      } ${className} ${rounded && "rounded-full"} duration-300`}
    >
      {title || children}
    </button>
  );
};
