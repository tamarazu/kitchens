import React, { useEffect, useState } from "react";
import { capitalize } from "helpers/formatString";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getMenuByCategory } from "store/actions/menu";

export default function Categories() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.menuReducers);
  const [activeId, setActiveId] = useState(1);
  useEffect(() => {
    if (categories.length == 0) {
      dispatch(getCategories());
    }
  }, [categories]);
  const filterByCategory = (value) => {
    dispatch(getMenuByCategory(value));
    setActiveId(value);
  };
  return (
    <div className="p-2.5 pt-0 flex overflow-x-auto no-scrollbar gap-2">
      {categories.length &&
        categories.map((value, index) => (
          <p
            className={`whitespace-nowrap px-3 py-2 rounded-md font-semibold  shadow-md ${
              value.id == activeId
                ? `bg-white text-orange-500`
                : `text-white  bg-orange-500`
            }`}
            onClick={() => filterByCategory(value.id)}
            key={index}
          >
            {capitalize(value.name)}
          </p>
        ))}
    </div>
  );
}
