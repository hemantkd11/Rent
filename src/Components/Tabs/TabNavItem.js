import React from "react";

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li
      className={`nav-item ${activeTab === id ? "active" : ""}`}
      onClick={handleClick}
    >
      {title}
    </li>
  );
};

export default TabNavItem;