const {
  newProductService,
  allProductsService,
  productByIdService,
} = require("./productService");

const newProduct = async (req, res) => {
  const { name, description, image } = req.body;

  const product = {
    name: name,
    description: description,
    image: image,
  };

  const newProduct = await newProductService(product);

  res.status(newProduct.status).send(newProduct);
};

const allProducts = async (req, res) => {
  const pageNumber = req.query.pageNumber || 1;
  const allProducts = await allProductsService(pageNumber);
  res.status(allProducts.status).send(allProducts);
};

const productById = async (req, res) => {
  const id = req.query.id;
  const product = await productByIdService(id);
  res.status(product.status).send(product);
};

module.exports = {
  newProduct,
  allProducts,
  productById,
};
