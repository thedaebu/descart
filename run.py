# modules found in __init__.py file can be imported
from api import create_app

app = create_app()


@app.route("/api/python")
def hello():
    return "Hello World"


# can be used when running file using python command
# automatically updates display when edits are made
if __name__ == '__main__':
    app.run(debug=True)
