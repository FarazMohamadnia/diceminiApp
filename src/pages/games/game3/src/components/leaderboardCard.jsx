import StarIcon from "./asset/star";

export default function LeaderBoardCard({first_name , point , index}) {
  return (
      <div className="w-[85%] h-[50px] mx-auto flex justify-between items-center  border border-[#FFDE7B] rounded-2xl p-4 max-w-xl shadow-[inset_0px_4px_15px_-7px_#FFDE7B] my-3">
        <p className="border-[2px] flex justify-center items-center border-[#3bffff] rounded-full w-6 h-6 text-[#3bffff]">
          {index}
        </p>
        <p className="text-white w-[65%] h-[30px] overflow-hidden flex items-center">{first_name}</p>
        <p className="text-white flex items-center">{point}<span className="ml-[2px]"><StarIcon /></span></p>
      </div>
  );
}
