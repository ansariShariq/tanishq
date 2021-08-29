/** @format */

const express = require('express');

const router = express.Router();

const Product = require('../models/home.model');
const Register = require('../models/register.model');
const Cart = require('../models/cart.model');

router.post('', async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.send(product);
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('/products', async (req, res) => {
	try {
		const cart = await Cart.find().lean().exec();
		const allItems = await Product.find({}).lean().exec();
		res.status(201).render('allitems', {
			allItems: allItems,
			length: cart.length,
		});
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.get('/products/items/:id', async (req, res) => {
	try {
		const item = await Product.find({ _id: `${req.params.id}` })
			.lean()
			.exec();
		const cart = await Cart.find().lean().exec();
		return res.render('item', {
			item: item,
			cart: cart,
			length: cart.length,
		});
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('', async (req, res) => {
	try {
		const cart = await Cart.find().lean().exec();
		const product = await Product.find().lean().exec();
		return res.render('home', {
			product: product,
			length: cart.length,
			user: null,
		});
	} catch (err) {
		return res.send(err.message);
	}
});

router.post('/add', async (req, res) => {
	try {
		const ca = await Cart.find().lean().exec();
		let temp = true;
		if (String(ca) == String([])) {
			const cart = await Cart.create(req.body);
		} else {
			ca.forEach(ele => {
				if (ele.id == req.body.id) {
					temp = false;
				}
			});
			if (temp == true) {
				const cart = await Cart.create(req.body);
			}
		}
		return res.send(cart);
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('/add', async (req, res) => {
	try {
		const cart = await Cart.find().lean().exec();
		res.send(cart);
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('/cart', async (req, res) => {
	const cart = await Cart.find().lean().exec();
	return res.send(cart);
});

router.get('/products/cart', async (req, res) => {
	try {
		const cart = await Cart.find().lean().exec();
		let resu = 0;
		cart.forEach(ele => {
			resu = resu + ele.price;
		});
		return res.render('cart', {
			cart: cart,
			price: resu,
			length: cart.length,
		});
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('/products/cart/:id', async (req, res) => {
	try {
		const cartdelete = await Cart.findByIdAndDelete(req.params.id);
		const cart = await Cart.find().lean().exec();
		let resu = 0;
		cart.forEach(ele => {
			resu = resu + ele.price;
		});
		return res.render('cart', {
			cart: cart,
			price: resu,
			length: cart.length,
		});
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('/products/checkout', async (req, res) => {
	try {
		res = await res;
		res.render('checkout');
	} catch (err) {
		return res.send(err.message);
	}
});
router.get('/products/checkout/thank', async (req, res) => {
	try {
		res = await res;
		res.render('thank');
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('/signUp', async (req, res) => {
	try {
		const product = await Register.find().lean().exec();
		return res.render('signUp', {
			product: product,
		});
	} catch (err) {
		return res.send(err.message);
	}
});

let msg = 'invalid details';

router.post('/signUp', async (req, res) => {
	try {
		const details = await Register.find().lean().exec();
		let temp = true;
		if (String(details) == String([])) {
			const signUp = Register.create(req.body);
			res.render('login', {
				msg: msg,
			});
		} else {
			details.forEach(el => {
				if (el.email == req.body.email && el.password == req.body.password) {
					temp = false;
				}
			});
			if (temp) {
				const signUp = Register.create(req.body);
				msg = 'false';
				res.render('login', {
					msg: msg,
				});
			} else {
				msg = 'false';
				res.render('login', {
					msg: msg,
				});
			}
		}

		msg = 'false';
		res.render('login', {
			msg: msg,
		});
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('/login', async (req, res) => {
	msg = 'false';

	res.render('login', {
		msg: msg,
	});
});

router.post('/login', async (req, res) => {
	try {
		const email = req.body.email;
		const password = req.body.password;
		console.log(email, password);
		const signUp = await Register.find().lean().exec();
		const product = await Product.find().lean().exec();
		const cart = await Cart.find().lean().exec();
		let temp = false;
		if (String(signUp) == String([])) {
			msg = 'invalid details';
			res.render('login', {
				msg: msg,
			});
		} else {
			signUp.forEach(el => {
				if (el.email == email && el.password == password) {
					temp = true;
					res.render('home', {
						product: product,
						length: cart.length,
						user: el.first_name,
					});
				}
			});
			if (temp == false) {
				msg = 'invalid details';
				res.render('login', {
					msg: msg,
				});
			}
		}

		res.send(signUp);
	} catch (err) {
		return res.send(err.message);
	}
});

module.exports = router;
