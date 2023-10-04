from api import db
from sqlalchemy.dialects.postgresql import JSON


class Cart(db.Model):
    __tablename__ = 'cart'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return f'{self.name} has id of {self.id}'

    def serialize(self):
        return {'id': self.id,
                'name': self.name
                }
