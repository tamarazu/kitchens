import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getAllMenu, getMenuSearch } from "store/actions/menu";
import { debounce } from "lodash";

export default function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
    changeFilterDebounced(event.target.value);
  };

  const changeFilterDebounced = useCallback(
    debounce(
      (value) => {
        if (value.length) {
          dispatch(getMenuSearch(value));
        } else {
          dispatch(getAllMenu());
        }
      },
      500,
      true
    ),
    []
  );

  return (
    <div className="w-full px-2.5 pb-3">
      <label className="w-full relative items-center">
        <input
          placeholder="Search..."
          type="text"
          className="border w-full py-1.5 px-3 rounded-md"
          onChange={handleInputChange}
        />
        <i className="absolute right-3 top-0 fi fi-br-search text-orange-500"></i>
      </label>
    </div>
  );
}
