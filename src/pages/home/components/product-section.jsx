import React from "react";
import ProductCard from "./product-card";
import Button from "../../../components/button";
import { Link } from "react-router-dom";

const ProductSection = ({ className, title, data }) => {
  return (
    <section className={`pt-[72px]`}>
      <div className={`container ${className} pb-[64px]`}>
        <h2 className="text-primary mb-[55px] text-[48px] font-extrabold text-center">
          {title}
        </h2>
        <div className="flex items-center justify-between mb-[36px]">
          {data.map((item) => (
            <Link to={`/product-detail/${item.id}`}>
              <ProductCard key={item.id} item={item} />
            </Link>
          ))}
        </div>
        <Button className="block mx-auto" variant="outline">
          View All
        </Button>
      </div>
    </section>
  );
};

export default ProductSection;
