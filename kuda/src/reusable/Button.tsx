import React from "react";

export default function Button({ title, className }) {
  return (
    <button className={`rounded-[5px]  border-0 ${className}`}>{title}</button>
  );
}
