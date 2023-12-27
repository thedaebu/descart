from api import db
from sqlalchemy.dialects.postgresql import JSON


class Cart(db.Model):
    __tablename__ = 'cart'

    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(50), nullable=False)
    area_code = db.Column(db.String(3), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    google_id = db.Column(db.String(50), nullable=False)
    instagram = db.Column(db.String(100), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(7), nullable=False)
    state = db.Column(db.String(20), nullable=False)
    status = db.Column(db.String(10), nullable=False)
    website = db.Column(db.String(50), nullable=False)
    zip_code = db.Column(db.String(5), nullable=False)

    def __repr__(self):
        return f'{self.name} has id of {self.id}'

    def serialize(self):
        return {
            'id': self.id,
            'address': self.address,
            'area_code': self.area_code,
            'city': self.city,
            'google_id': self.google_id,
            'instagram': self.instagram,
            'name': self.name,
            'phone_number': self.phone_number,
            'state': self.state,
            'status': self.status,
            'website': self.website,
            'zip_code': self.zip_code
        }
