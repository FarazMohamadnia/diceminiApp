export default function InfoTable({ data, isTableOpen, onClose }) {
    const fakeData = [
        { bet: "5ss", multiplier: "er", game: "ee", roll: "jy", profit: 555 },
        { bet: "52", multiplier: "dddd", game: "Game", roll: "Roll", profit: 22 },
        { bet: "5f", multiplier: "dd", game: "1", roll: "Roll", profit: 0 },
        { bet: "f5", multiplier: "Multiplier", game: "Game", roll: "Roll", profit: -8 },
        { bet: "f5", multiplier: "Multiplier", game: "Game", roll: "Roll", profit: 1 },
        { bet: "5f", multiplier: "Multiplier", game: "jj", roll: "jl", profit: -4 },
        { bet: "5f", multiplier: "Multiplier", game: "Game", roll: "Roll", profit: -9 },
        { bet: "5", multiplier: "Multiplier", game: "Game", roll: "e", profit: 0 },
        { bet: "5", multiplier: "ccc", game: "Game", roll: "j", profit: 4 },
        { bet: "5f", multiplier: "Multiplier", game: "dd", roll: "ss", profit: 4 },
    ];

    const tableData = fakeData.map(row => ({
        ...row,
        profitColor: row.profit >= 0 ? "#1AE521" : "#FF2700",
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
                        <div className="grid grid-cols-5 text-center">
                            <div className="flex justify-center items-center">Bet(DTS)</div>
                            <div className="flex justify-center items-center">Multiplier</div>
                            <div className="flex justify-center items-center">Game</div>
                            <div className="flex justify-center items-center">Roll</div>
                            <div className="flex justify-center items-center">Profit(DTS)</div>
                        </div>
                    </div>

                    <div className="mt-2 grid grid-rows-10 gap-x-1 gap-y-2">
                        {tableData.map((row, index) => (
                            <div key={index} className="flex items-center justify-center">
                                <div className="grid grid-cols-5 text-center">
                                    <div className="flex justify-center items-center">{row.bet}</div>
                                    <div className="flex justify-center items-center">{row.multiplier}</div>
                                    <div className="flex justify-center items-center">{row.game}</div>
                                    <div className="flex justify-center items-center">{row.roll}</div>
                                    <div
                                        className="flex justify-center items-center w-[43.43px] rounded-[7px]"
                                        style={{ backgroundColor: row.profitColor }}
                                    >
                                        {row.profit}
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
