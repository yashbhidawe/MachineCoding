import React, { useState } from "react";
import "./tabs.css";

const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "active" : ""}
            onClick={() => setActiveTab(tab.id)}
            data-testid={`tab-button-${tab.id}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content" data-testid="tab-content">
        {tabs.find((tab) => tab.id === activeTab).content}
      </div>
    </div>
  );
}
