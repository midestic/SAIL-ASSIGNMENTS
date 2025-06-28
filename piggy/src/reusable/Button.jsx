import React from "react";

export default function Button({ title, className }) {
  return <button className={`rounded-[10px]   ${className}`}>{title}</button>;
}
