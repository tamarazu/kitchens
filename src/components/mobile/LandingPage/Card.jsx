import React from "react";

export default function Card() {
  return (
    <div className="text-start rounded-lg text-current">
      <img
        className="w-full h-48 object-cover rounded-t-md"
        src="https://media.istockphoto.com/id/1376368822/id/foto/rendang-padang-rebusan-daging-sapi-pedas-dari-padang-indonesia-makanan-tradisional-indonesia.jpg?s=612x612&w=0&k=20&c=LvLI9MXJjFWpCWlkutgmL12rexMdFo8rSwRQYRd2o_U="
        alt="rendang"
      />
      <div className="py-2 flex flex-col gap-1">
        <p className="text-xs">Rendang Daging</p>
        <p className="text-sm font-bold">Rp97.000</p>
      </div>
    </div>
  );
}
