"use client";
import { category } from "@/data/listing";
import listingStore from "@/store/listingStore";

export default function CategoryOption1() {
  const getCategory = listingStore((state) => state.getCategory);
  const setCategory = listingStore((state) => state.setCategory);

  // handler
  const categoryHandler = (data) => {
    setCategory(data);
  };

  return (
    <>
      <div className="checkbox-style1 mb15">
        {category.map((item,i) => (
          <label key={ i } className="custom_checkbox">
            {item.title}
            <input
              type="checkbox"
              onChange={() => categoryHandler(item.title)}
              checked={getCategory.includes(item.title)}
            />
            <span className="checkmark" />
            <span className="right-tags">({item.total})</span>
          </label>
        ))}
      </div>
    </>
  );
}
