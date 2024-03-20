import React from "react";
import { rupiah } from "helpers/number";
import { capitalize } from "helpers/formatString";

export default function Card({ content }) {
  return (
    <div className="text-start rounded-lg text-current">
      <img
        className="w-full h-48 object-cover rounded-t-md"
        src={content.image}
        alt={content.name}
      />
      <div className="py-2 flex flex-col gap-1">
        <p className="text-xs">{capitalize(content.name)}</p>
        <p className="text-sm font-bold">{rupiah(content.price)}</p>
      </div>
    </div>
  );
}
