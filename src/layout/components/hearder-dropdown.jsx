import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeaderDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-black font-medium hover:opacity-80"
      >
        Shop <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-2 text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Category 1
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Category 2
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Category 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
