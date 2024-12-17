import React from "react";

const AddressDisplay = ({ address = "KSDJFGNHBIBUEJDNBF34897FIU", onCopy }) => {
  const style = {
    background: "radial-gradient(circle at center, #0F2B3E 40%, #000000 90%)",
    boxShadow: "inset 0 0 20px 0 rgba(26,229,161,0.5)",
  };

  const handleCopy = () => {
    if (onCopy) {
      onCopy(address);
    } else {
      navigator.clipboard.writeText(address).then(() => {
        console.log("Address copied to clipboard!");
      });
    }
  };

  return (
    <div
      style={style}
      className="
        flex items-center justify-between 
        rounded-full px-4 py-2 font-medium 
        border border-[#1AE5A1] w-full max-w-md
      "
    >
      <span className="text-[#3BFFFF]">Address</span>
      <span className="text-[#919191] whitespace-nowrap overflow-hidden text-sm overflow-ellipsis">
        {address}
      </span>
      <button className="text-[#3BFFFF] hover:underline" onClick={handleCopy}>
        Copy
      </button>
    </div>
  );
};

export default AddressDisplay;
