import SoftvenceImage from "./assets/softvence.jpg";
import { MdTask } from "react-icons/md";
function App() {
  return (
    <div className="font-poppins text-black/80 min-h-screen w-full items-center flex flex-col">
      <div>
        <img src={SoftvenceImage} alt="softvence-logo" />
      </div>
      
      <div>
        <h1 className="text-3xl font-bold text-black/80 pb-8 flex items-center gap-2"> <MdTask /> Task Instruction</h1>

        <div className="pb-10">
          <h2 className="text-xl font-bold pb-2">1. Design (Figma)</h2>
          <div>
            <div className=""><span className="list-disc pb-2 font-semibold text-black/80">Figma Link:</span> <a className="underline text-green-600 hover:text-green-400 font-medium" target="_blank" href="https://www.figma.com/design/62tZsHIXm0u11TSoRjsOQN/Frontend-Preictal-Test?node-id=17630-2910&t=gqz714bv574y3gSz-0">Click Here for Open</a></div>
            <h4 className="list-disc font-semibold text-black/80">Task:</h4>
            <div>
              <li className="translate-x-12 text-black/70 font-medium ">Complete the Landing Page design.</li>
              <li className="translate-x-12 text-black/70 font-medium">
                Complete all the Authentication Pages (Login, Register, Forgot
                Password).
              </li>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold pb-2">2. Authentication API</h2>
          <div>
            <h4><span className="list-disc pb-2 font-semibold text-black/80">API Link:</span> <a className="underline text-green-600 font-medium hover:text-green-400" target="_blank" href="https://documenter.getpostman.com/view/42885616/2sB3QCSDqm">Click Here for Open</a></h4>
            <div>
              <h4 className="list-disc font-semibold text-black/80">Task:</h4>
              <li className="translate-x-12 text-black/70 font-medium">Implement all authentication endpoints on the frontend.</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
