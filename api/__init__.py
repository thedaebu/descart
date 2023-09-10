from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
from api.config import Config

# db = SQLAlchemy()


def create_app(config=Config):
    # configure flask app
    app = Flask(__name__)
    # configure database for flask app
    app.config.from_object(Config)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # db.init_app(app)

    return app
