import { useContext } from "react";
import { CategoryContext } from "../context/context";
import "./../style/ProductCard.css";

export default function ProductCard({ item }) {
  const { categoryData } = useContext(CategoryContext);

  console.log(item);

  return (
    <div className="product-card">
      <img src={item.thumbImage} alt="img" />
      <span className="product-card-category">
        {categoryData?.map((e) => {
          if (e) {
            if (e.id == item.categoryId) {
              return <span>{e.categoryName}</span>;
            }
          }
        })}
      </span>
      <h2 className="product-card-title">{item.productName}</h2>
      <span className="product-card-text">{item.desc}</span>
      <div className="flex flex-row align-items space-between">
        <span className="product-card-price">${item.price}</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-basket3"
            viewBox="0 0 16 16"
          >
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
