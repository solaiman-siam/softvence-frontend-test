import SoftvenceImage from "./assets/softvence.jpg";

function App() {
  return (
    <div className="font-poppins min-h-screen w-full items-center flex flex-col">
      <div>
        <img src={SoftvenceImage} alt="softvence-logo" />
      </div>
      <div className="flex items-center gap-2">
        <h4 className="text-2xl font-bold"> Figma Test Link - 1 : </h4>
        <a
          className="text-2xl font-bold text-green-600 hover:underline"
          href="https://www.figma.com/design/zz2aTM8GGp7q69okFGpW2V/Tast--Copy-?node-id=0-1&p=f&t=5LzHewJDrA6x3bCT-0"
        >
          File Link
        </a>
      </div>
    </div>
  );
}

export default App;
