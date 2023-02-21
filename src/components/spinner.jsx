const Spinner = () => {
  return (
    <div className="w-full">
      <div className="w-[100px] my-40 md:my-56 mx-auto h-[100px] relative">
        <div className="absolute w-full h-full border-[10px] border-transparent border-t-black rounded-full animate-spinnerOne"></div>
        <div className="absolute w-full h-full border-[10px] border-transparent border-b-black rounded-full animate-spinnerTwo"></div>
      </div>
    </div>
  );
};

export default Spinner;
