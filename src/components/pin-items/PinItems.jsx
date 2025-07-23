import React, { useState } from "react";

import "./styles.css";

export default function PinItems() {
  const [items, setItems] = useState([
    { id: 1, text: "Buy groceries", pinned: false },
    { id: 2, text: "Call Alice", pinned: false },
    { id: 3, text: "Meeting with Bob", pinned: false },
    { id: 4, text: "Pay electricity bill", pinned: false },
    { id: 5, text: "Read a book", pinned: false },
    { id: 6, text: "Go for a walk", pinned: false },
    { id: 7, text: "Fix bug #234", pinned: false },
    { id: 8, text: "Review pull requests", pinned: false },
  ]);

  const togglePin = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, pinned: !item.pinned } : item
      )
    );
  };

  const sortedItems = [
    ...items.filter((item) => item.pinned),
    ...items.filter((item) => !item.pinned),
  ];

  return (
    <div
      className="container bg-gray-50 p-6 rounded-lg max-w-md mx-auto mt-8"
      data-testid="app-container"
    >
      <ul className="space-y-2" data-testid="item-list">
        {sortedItems.map((item) => (
          <li
            key={item.id}
            className={`p-3 rounded border transition-all duration-200 ${
              item.pinned
                ? "bg-blue-100 border-blue-300 shadow-sm"
                : "bg-white border-gray-200 hover:bg-gray-50"
            }`}
          >
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={item.pinned}
                onChange={() => togglePin(item.id)}
                className="mr-3 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                data-testid={`pin-checkbox-${item.id}`}
              />
              <span
                className={
                  item.pinned ? "font-medium text-blue-800" : "text-gray-700"
                }
              >
                {item.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
