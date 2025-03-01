export default function InfoTable({ history, isTableOpen, onClose }) {
    const tableData = history.map(row => ({
        ...row,
        profitColor: row.win_dots_amount > 0 ? "#1AE521" : "#FF2700",
    }));


    return (
        <div
            className={`z-30 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-all duration-1000 ${
                isTableOpen ? "opacity-100 transition-all pointer-events-auto" : "opacity-0 transition-all pointer-events-none"
            }`}
            onClick={onClose}
        >
            <div className="backdrop-blur-[34px] w-[236px] h-[274px] rounded-[10px] border transition-all border-[rgba(255,255,116,1)] bg-opacity-80 filter">
                <div className="font-light text-[10px] leading-[13.62px] text-white font-sans">
                    <div className="mt-4 mb-4 flex items-center justify-center">
                        <div className="grid grid-cols-3 text-center w-full">
                            <div className="flex justify-center items-center">Bet(DTS)</div>
                            <div className="flex justify-center items-center">Roll</div>
                            <div className="flex justify-center items-center">Profit(DTS)</div>
                        </div>
                    </div>
    
                    <div className="mt-2 grid grid-rows-10 gap-x-1 gap-y-2">
                        {tableData.map((row, index) => (
                            <div key={index} className="flex items-center justify-center">
                                <div className="grid grid-cols-3 text-center w-full">
                                    <div className="flex justify-center items-center">{row.play_dots_amount && row.play_dots_amount.toFixed(4)}</div>
                                    <div className="flex justify-center items-center">{row.details.roll}</div>
                                    <div className="flex justify-center">
                                        <div
                                            className="flex justify-center items-center w-[43.43px] rounded-[7px]"
                                            style={{ backgroundColor: row.profitColor }}
                                        >
                                            {row.win_dots_amount && row.win_dots_amount.toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    
}
