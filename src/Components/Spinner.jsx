import "./Spinner.css";

 const Spinner = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      <div className="spinner"></div>
      <div>loading...</div>
    </div>
    
  );
}
export default Spinner;