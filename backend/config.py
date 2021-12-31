SECRET_KEY = 'SECRET_KEY'
SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://lab:SECRET_KEY@localhost:3306/lab?charset=utf8'
SQLALCHEMY_TRACK_MODIFICATIONS = True
# SQLALCHEMY_ECHO = True
SESSION_PERMANENT = True  # 如果设置为True，则关闭浏览器session就失效。
SESSION_USE_SIGNER = True  # 是否对发送到浏览器上session的cookie值进行加密
SESSION_KEY_PREFIX = 'session:'
