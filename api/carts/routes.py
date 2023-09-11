from flask import Blueprint, jsonify, request
from api.models import Cart

carts = Blueprint('carts', __name__)


# Keep before request in consideration
# @main.before_request
# def before():
#     print("This is executed BEFORE each request.")

@carts.route('/cart/<int:cart_id>', methods=['GET'])
def cart_show(cart_id):
    cart = Cart.query.get_or_404(cart_id)
    return jsonify(cart.serialize())
