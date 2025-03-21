import CloseModal from "../../../icons/change/game/closemodal";

export default function ModalExample({data, isOpen, onClose}) {
    const Data = data
    return (
        <div
            className={`z-30 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            onClick={onClose}
        >
            <div
                className={`bg-[#090b0b] text-white min-h-64 w-[90%] max-w-80 px-6 rounded-[15px] shadow-[inset_0px_4px_30px_-7px_rgba(26,229,161,1.00)] border border-[#1ae5a1]  py-8 transform transition-transform duration-300 ${
                    isOpen ? "scale-100" : "scale-50"
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative flex justify-center items-center">
                    <p className="text-white text-xl font-bold">{Data.title}</p>
                    <span
                        onClick={onClose}
                        className="absolute right-0 top-[-6px]"
                    >
                  <CloseModal onClick={onClose}/>
                </span>
                </div>
                <div className="text-justify mt-7 overflow-y-scroll max-h-[50vh]">
                    {
                        Data.text.map(newdata =>
                            <p className="text-white text-xl font-bold my-[6px]">{newdata}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}