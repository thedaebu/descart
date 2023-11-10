from flask import Blueprint, jsonify, request
from api import db
from api.models import Cart
from api.carts.seeds import cartSeeds
from sqlalchemy import func

carts = Blueprint('carts', __name__)

# Keep before request in consideration
# @main.before_request
# def before():
#     print("This is executed BEFORE each request.")


@carts.route('/api/carts/all', methods=['GET'])
def cart_all():
    carts = {cart.id: cart.serialize() for cart in Cart.query.all()}
    return jsonify({'carts': carts})


@carts.route('/api/carts/index', methods=['GET', 'POST'])
def cart_index():
    search = '%' + eval(request.data.decode('utf-8'))['search'] + '%'
    carts = {cart.id: cart.serialize() for cart in
             Cart.query.filter(func.lower(Cart.city).like(search)).all()}
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


@carts.route('/api/carts/delete', methods=['GET', 'POST'])
def cart_delete():
    allCarts = Cart.query.all()
    if len(allCarts) > 0:
        db.session.query(Cart).delete()
        db.session.commit()

    return jsonify({'message': 'All carts deleted'})
