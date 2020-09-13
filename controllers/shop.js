const Product = require('../models/product');

exports.getProducts = (req, res, next) => {

    Product.fetchAll(products => {
        res.render('shop/product-list', {prods: products, pageTitle: 'All Products', path: '/products'});
    });
}

exports.getProduct = (req, res, next) => {
    const productId = req.params.id;
    Product.findById(productId, product => {
        res.render('shop/product-detail', 
                    { 
                        product: product, 
                        pageTitle: `Product Detail - ${product.title}`, 
                        path: '/products' 
                    });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {prods: products, pageTitle: 'Shop', path: '/'});
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {cart: [], pageTitle: 'Your Cart', path: '/cart'});
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {cart: [], pageTitle: 'Your Orders', path: '/orders'});
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {pageTitle: 'Checkout', path: '/checkout'});
}
