const getPriceBySize = (product, size) => {
    const variant = product.variants.find((item) => item.size === size);
    return variant ? variant.price : product.variants[0].price;
};

export default getPriceBySize;