import { useEffect } from "react";

export default function ModalComponent({isOpen , setIsOpen , questionData}) {

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsOpen(false)}
          style={{ transition: "opacity 0.3s ease-in-out" }}
        >
          <div
            className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full opacity-0 transform scale-90"
            style={{
              animation: "fadeIn 0.3s forwards, scaleUp 0.3s forwards"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <p>{questionData[0]}</p>
            <p className="text-gray-600">{questionData[1]}</p>
            <p className="text-gray-600">{questionData[2]}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.9); }
          to { transform: scale(1); }
        }
      `}</style>
    </>
  );
}
