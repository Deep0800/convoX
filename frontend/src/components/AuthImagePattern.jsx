const AuthImagePattern = ({subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 mt-7">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <p className="text-base-content/60 mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
