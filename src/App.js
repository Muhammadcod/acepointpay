import Modal from "./components/Modal";
import Page from "./components/Page";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Click Me
      </button>

      <Modal isOpen={isOpen} toggle={() => setIsOpen(false)} size="max-w-5xl">
        <Page />
      </Modal>
    </div>
  );
}

export default App;
