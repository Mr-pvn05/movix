import React, { useState } from "react";

const SwitchTabs = ({ data, onTabChange }) => {

  const [selectedTab, setSelectedTab] = useState(data[0]);

  const activeTab = (tab) => {
    setSelectedTab(tab)
    onTabChange(tab)
  }

  return (
    <div className="flex p-[3px] text-xs md:text-lg lg:text-2xl md:p-[4px] gap-1 bg-white rounded-full ">
      {data.map((tab) => {
        return (
          <div onClick={() => activeTab(tab)}  className={`${selectedTab === tab ? "bg-gradient-to-r from-pink to-yellow-500 text-white" : "bg-white text-black font-medium"} px-4 py-1 rounded-full cursor-pointer`} key={tab}>
            <span>{tab}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SwitchTabs;
