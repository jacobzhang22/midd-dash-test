import { CartContext } from "@/components/AppContext";
import { useContext } from "react";
import toast from "react-hot-toast";

export default function MenuItem(menuItem) {
  const { image, name, description, basePrice } = menuItem;
  const { addToCart } = useContext(CartContext);

  function handleAddToCartButtonClick() {
    addToCart(menuItem);
    toast.success("Added to cart!");
  }

  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <img
          src={image}
          className="max-h-auto max-h-24 block mx-auto"
          alt="pizza"
        ></img>
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
      <button
        type="button"
        onClick={handleAddToCartButtonClick}
        className="mt-4 bg-primary text-white rounded-full px-8 py-2"
      >
        Add to cart ${basePrice}
      </button>
    </div>
  );
}
