import DollerIcon from "./asset/icon/doller";

export function maskFirstThree(str) {
  if (str.length < 3) {
    return "***".slice(0, str.length);
  }
  return "***" + str.slice(3);
}

export default function WinerCard({ amount, index, username }) {
  return (
    <div className="w-[85%] h-[50px] mx-auto flex justify-between items-center  border border-[#1AE5A1] rounded-2xl p-4 max-w-xl shadow-[inset_0_0_30px_0_rgba(0,255,128,0.4)] my-3">
      <div className="">
        <p className="border-[2px] flex justify-center items-center border-[#3bffff] rounded-full w-6 h-6 text-[#3bffff]">
          {index}
        </p>
      </div>
      <div className="w-1/2">
        <p className="text-white text-xs font-light">
          {username ? maskFirstThree(username) : "NO_ID"}
        </p>
      </div>
      <div className="">
        <p className="text-white text-xs font-light flex items-center">
          {amount}{" "}
          <span className="text-[#3bffff] ml-1">
            <DollerIcon />
          </span>
        </p>
      </div>
    </div>
  );
}
