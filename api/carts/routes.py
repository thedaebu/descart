from flask import Blueprint, jsonify, request
from api import db
from api.models import Cart

carts = Blueprint('carts', __name__)

# Keep before request in consideration
# @main.before_request
# def before():
#     print("This is executed BEFORE each request.")


@carts.route('/api/carts', methods=['GET'])
def cart_index():
    # cart1 = Cart(address='1080 SE Madison St', areaCode='503', city='Portland', name='Pelmeni Pelmeni', phoneNumber='9084570', state='OR', status=True, website='', zipCode='97214')
    # cart2 = Cart(address='1080 SE Madison St', areaCode='503', city='Portland', name='Dae Bap', phoneNumber='9084571', state='OR', status=True, website='', zipCode='97214')
    # db.session.add(cart1)
    # db.session.add(cart2)
    # db.session.commit()
    carts = {cart.id: cart.serialize() for cart in Cart.query.all()}
    return jsonify({'carts': carts})


@carts.route('/api/carts/<int:cart_id>', methods=['GET'])
def cart_show(cart_id):
    cart = Cart.query.get_or_404(cart_id)
    return jsonify(cart.serialize())
