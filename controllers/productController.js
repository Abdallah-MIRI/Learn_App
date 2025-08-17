const productModel = require("../models/productModel");

exports.getPaginatedProducts = async (req, res) => {
  try {
    const products = await productModel.readProductsFromCSV();

    const page = parseInt(req.query.page) || 1; // الصفحة الحالية
    const perPage = 10; // عدد المنتجات لكل صفحة
    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / perPage);

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    const paginatedProducts = products.slice(startIndex, endIndex);

    res.render("products", {
      products: paginatedProducts,
      currentPage: page,
      totalPages: totalPages,
    });
  } catch (err) {
    res.status(500).send("Error loading products");
  }
};

exports.getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const products = await productModel.readProductsFromCSV();
    const product = products.find((p) => p.Index === id);
    if (!product) return res.status(404).send("Product not found");

    res.render("product", { product });
  } catch (err) {
    res.status(500).send("Error loading product");
  }
};
