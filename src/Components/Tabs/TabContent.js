import React from "react";

const TabContent = ({ activeTab, children }) => {
  return <div activeTab={activeTab} className="tab-content">{children}</div>;
};

export default TabContent; 