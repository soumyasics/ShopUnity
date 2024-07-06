const Product = require("../Model/ProductSchema");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("productimage");

const addProduct = (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.status(500).json({
        status: 500,
        message: "Failed to upload image",
        error: err.message,
      });
    }

    const {
      category,
      productname,
      brand,
      expirydate,
      description,
      quantity,
      price,
    } = req.body;

    const product = new Product({
      category,
      productname,
      brand,
      expirydate,
      description,
      productimage: req.file ? req.file.path : null,
      quantity,
      price,
    });

    product
      .save()
      .then((result) => {
        res.status(200).json({
          status: 200,
          message: "Product added successfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: 500,
          message: "Failed to add product",
          error: err.message,
        });
      });
  });
};

const editProduct = (req, res) => {
  const productId = req.params.productId;

  upload(req, res, function (err) {
    if (err) {
      return res.status(500).json({
        status: 500,
        message: "Failed to upload image",
        error: err.message,
      });
    }

    const {
      category,
      productname,
      brand,
      expirydate,
      description,
      quantity,
      price,
    } = req.body;
    const updateData = {
      category,
      productname,
      brand,
      expirydate,
      description,
      quantity,
      price,
    };

    if (req.file) {
      updateData.productimage = req.file.path;
    }

    Product.findByIdAndUpdate(productId, updateData, { new: true })
      .then((result) => {
        res.status(200).json({
          status: 200,
          message: "Product updated successfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: 500,
          message: "Failed to update product",
          error: err.message,
        });
      });
  });
};

const viewProduct = (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({
          status: 404,
          message: "Product not found",
        });
      }
      res.status(200).json({
        status: 200,
        data: product,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to retrieve product",
        error: err.message,
      });
    });
};

const viewAllProducts = (req, res) => {
  Product.find()
    .then((products) => {
      res.status(200).json({
        status: 200,
        data: products,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to retrieve products",
        error: err.message,
      });
    });
};

const deleteProduct = (req, res) => {
  const productId = req.params.productId;
  Product.findByIdAndDelete(productId)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          status: 404,
          message: "Product not found",
        });
      }
      res.status(200).json({
        status: 200,
        message: "Product deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to delete product",
        error: err.message,
      });
    });
};

module.exports = {
  addProduct,
  editProduct,
  viewProduct,
  viewAllProducts,
  deleteProduct,
};
