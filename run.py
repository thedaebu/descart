# modules found in __init__.py file can be imported
from api import create_app, db
from flask_migrate import Migrate

app = create_app()
migrate = Migrate(app, db)


# can be used when running file using python command
# automatically updates display when edits are made
if __name__ == '__main__':
    app.run(debug=True)
