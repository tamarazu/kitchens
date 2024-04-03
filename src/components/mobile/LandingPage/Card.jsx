import React from "react";
import { useNavigate } from 'react-router-dom'
import { rupiah } from "helpers/number";
import { capitalize } from "helpers/formatString";

export default function Card({ content }) {
  const navigate = useNavigate()
  return (
    <div className="text-start rounded-lg text-current">
      <img
        className="w-full h-48 object-cover rounded-t-md cursor-pointer"
        src={content.image}
        alt={content.name}
        onClick={() => navigate('/menu/' + content.id) }
      />
      <div className="py-2 flex flex-col gap-1">
        <p className="text-xs">{capitalize(content.name)}</p>
        <p className="text-sm font-bold">{rupiah(content.price)}</p>
      </div>
    </div>
  );
}
