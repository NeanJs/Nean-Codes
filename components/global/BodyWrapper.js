function BodyWrapper({ className, background, children }) {
  return (
    <div
      className={`w-screen min-h-screen items-center flex justify-between relative  overflow-hidden  ${className}`}
    >
      {children}
    </div>
  );
}

export default BodyWrapper;
