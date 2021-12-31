from gevent import monkey; monkey.patch_all()
from flask import Flask
import views
import models
import config
from gevent.pywsgi import WSGIServer

app = Flask(__name__)
app.config.from_object(config)
app.register_blueprint(views.view, url_prefix='/')
models.db.init_app(app)


if __name__ == '__main__':
    # models.db.create_all(app=app)
    http_server = WSGIServer(('0.0.0.0', 8010), app)
    print('start')
    http_server.serve_forever()
