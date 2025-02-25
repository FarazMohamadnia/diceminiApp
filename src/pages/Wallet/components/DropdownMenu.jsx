import React, { useState, useEffect, useRef } from "react";

const DropDownMenu = ({
  title = "Select your Currency",
  active = false,
  options = ["TON"],
  pages = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);
  const containerRef = useRef(null);

  const baseClasses = `
    inline-flex items-center justify-center
    rounded-[13px] px-4 py-2 font-medium 
    border transition-colors duration-150 w-full
    focus:outline-none
  `;

  const stateClasses = active
    ? "bg-[#0F2B3E] text-white border-[#3BFFFF]"
    : "bg-transparent text-[#919191] border-[#1AE5A1] hover:bg-[#0F2B3E] hover:text-white";

  const style = !active
    ? {
        boxShadow: "inset 0 0 20px 0 rgba(26,229,161,0.5)",
      }
    : {};

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside of the containerRef element, close the dropdown
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Add a click event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-xs">
      <button
        style={style}
        className={`${baseClasses} ${stateClasses}`}
        onClick={toggleDropdown}
      >
        <span className="text-[13px] w-[90%]">{selectedOption}</span>
        <svg className={`h-4 w-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">

          <g id="vuesax/bold/arrow-down">
          <g id="arrow-down">
          <path id="Vector" d="M8.21334 3.74915H5.35792H2.78667C2.34667 3.74915 2.12667 4.28081 2.43834 4.59248L4.81251 6.96665C5.19292 7.34706 5.81167 7.34706 6.19209 6.96665L7.09501 6.06373L8.56626 4.59248C8.87334 4.28081 8.65334 3.74915 8.21334 3.74915Z" fill="white"/>
          </g>
          </g>
        </svg>
      </button>

      {isOpen && (
        <ul
          className="
            absolute z-10 mt-2 w-full rounded-md bg-[#0F2B3E] 
            border border-[#1AE5A1] text-white
            shadow-[0_0_20px_0_rgba(26,229,161,0.5)]
            overflow-hidden
          "
        >
          {options.map((option) => (
            <li key={option}>
              <button
                className="
                  block w-full text-left px-4 py-2 hover:bg-[#1F4E63] 
                  transition-colors duration-150
                "
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
