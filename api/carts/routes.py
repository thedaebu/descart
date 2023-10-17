from flask import Blueprint, jsonify, request
from api import db
from api.models import Cart
from api.carts.seeds import cartSeeds

carts = Blueprint('carts', __name__)

# Keep before request in consideration
# @main.before_request
# def before():
#     print("This is executed BEFORE each request.")


@carts.route('/api/carts/index', methods=['GET'])
def cart_index():
    # allCarts = Cart.query.all()
    carts = {cart.id: cart.serialize() for cart in Cart.query.all()}
    return jsonify({'carts': carts})


@carts.route('/api/carts/<int:cart_id>', methods=['GET'])
def cart_show(cart_id):
    cart = Cart.query.get_or_404(cart_id)
    return jsonify(cart.serialize())


@carts.route('/api/carts/reset', methods=['GET', 'POST'])
def cart_reset():
    allCarts = Cart.query.all()
    if len(allCarts) > 0:
        db.session.query(Cart).delete()
        db.session.commit()

    for cartSeed in cartSeeds:
        db.session.add(cartSeed)
    db.session.commit()

    carts = {cart.id: cart.serialize() for cart in Cart.query.all()}
    return jsonify({'carts': carts})
