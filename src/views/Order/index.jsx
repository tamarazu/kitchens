import React, { useState } from "react";
import LogoIcon from "assets/logo.png";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { set_table_number } from "store/actions/menu";

export default function Order() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [tableNumber, setTableNumber] = useState("");
  const onChangeInput = (e) => {
    setTableNumber(e.target.value);
  };

  const orderContinue = () => {
    dispatch(set_table_number(tableNumber))
    navigate('/')
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <img src={LogoIcon} className="h-20 w-20 " />
      <span className="font-display text-3xl text-orange-400 tracking-tight">
        Lapau Andung
      </span>
      <input
        className="border-2 rounded-lg h-11 w-3/4 px-4 mt-4 text-center text-xl"
        type="text"
        value={tableNumber}
        onChange={onChangeInput}
        placeholder="Nomor meja"
      />
      <button onClick={orderContinue} className="bg-orange-500 w-3/4 py-2 rounded-lg text-xl text-white  font-semibold">
        Order
      </button>
    </div>
  );
}
