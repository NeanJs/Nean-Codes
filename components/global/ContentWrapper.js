export default function ContentWrapper({ children, className }) {
  return (
    <div
      className={`w-5/6 items-center lg:w-nean_lg min-h-screen h-full mx-auto grid grid-cols-1 ${className} relative py-8`}
    >
      {children}
    </div>
  );
}
