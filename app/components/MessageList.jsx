import React from "react";

export default function MessageList({ errMsgs }) {
  return (
    <div className="flex flex-col items-center pt-4">
      {errMsgs && (
        <ul className="space-y-2">
          {errMsgs.map((err) => (
            <li
              key={err.message}
              className="bg-white p-2 m-2 text-red-500 font-bold text-center animate-blink"
            >
              {err.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
