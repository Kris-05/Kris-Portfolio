import React, { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import Toast from "./Toast"

const ProjectsCard = ({
  imgUrl,
  title,
  tech,
  description,
  gitUrl,
  previewUrl,
}) => {

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");

  const handlePreviewClick = (e) => {
    if(previewUrl === "none") {
      e.preventDefault();
      setToastMessage("This project can't be hosted, please see GitHub");
      setToastType("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else if (previewUrl === "yet to be hosted") {
      e.preventDefault();
      setToastMessage("Something is brewing... please wait");
      setToastType("warning");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else if (previewUrl === "current") {
      e.preventDefault();
      setToastMessage("You're looking at it right now!");
      setToastType("info");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    // For hosted URL, normal flow
  }

  return (
    <>
      {showToast && <Toast message={toastMessage} type={toastType} />}

      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div
          className="items-center justify-center rounded-t-xl gap-3 absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 hidden
          group-hover:flex group-hover:opacity-80 transition-all duration-500"
        >
          <a
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <FaCode className="h-6 w-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
          </a>
          <a
            href={previewUrl.startsWith("http") ? previewUrl : "#"}
            target="_blank"
            onClick={handlePreviewClick}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <LuCircleArrowOutUpRight className="h-6 w-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
          </a>
        </div>
      </div>
      <div className="bg-[#181818] text-white rounded-b-xl py-6 px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
          <h5 className="text-xl font-semibold">{title}</h5>
          <div className="flex flex-wrap sm:justify-end gap-1">
            {tech.map((item, index) => (
              <span
                key={index}
                className="text-xs bg-gray-700 px-2 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </>
  );
};

export default ProjectsCard;
