from api import db
from sqlalchemy.dialects.postgresql import JSON


class Cart(db.Model):
    __tablename__ = 'cart'

    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(30), nullable=False)
    areaCode = db.Column(db.String(3), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    phoneNumber = db.Column(db.String(7), nullable=False)
    state = db.Column(db.String(20), nullable=False)
    status = db.Column(db.String(10), nullable=False)
    website = db.Column(db.String(50))
    zipCode = db.Column(db.String(5), nullable=False)

    def __repr__(self):
        return f'{self.name} has id of {self.id}'

    def serialize(self):
        return {
            'id': self.id,
            'address': self.address,
            'areaCode': self.areaCode,
            'city': self.city,
            'name': self.name,
            'phoneNumber': self.phoneNumber,
            'state': self.state,
            'status': self.status,
            'website': self.website,
            'zipCode': self.zipCode
        }
