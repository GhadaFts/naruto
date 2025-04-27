from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    pfp_url = db.Column(db.String(120), nullable=False)
    status = db.Column(db.String(120), nullable=False)

    __mapper_args__ = {
        'polymorphic_identity': 'user',  # 🛑 default identity
        'polymorphic_on': status  # 🛑 polymorphic based on 'type' field
    }

class Chunin(User):
    __mapper_args__ = {
        'polymorphic_identity': 'chunin',  # 🛑 identify Chunin
    }
    score = db.Column(db.Float, default=0, nullable=False)

    def __repr__(self):
        return '<Chunin %r>' % self.username

class Jonin(User):
    __mapper_args__ = {
        'polymorphic_identity': 'jonin',  # 🛑 identify Jonin
    }
    def __repr__(self):
        return '<Junin %r>' % self.username

class Hukage(User):
    __mapper_args__ = {
        'polymorphic_identity': 'hukage',  # 🛑 identify Hukage
    }
    def __repr__(self):
        return '<Hukage %r>' % self.username


class Mission(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(120), nullable=False)
    title = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f'<Mission {self.name}>'

class Test(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    moves = db.Column(db.String(80), nullable=False, default={})
    description = db.Column(db.String(120), nullable=False)
    title = db.Column(db.String(120), nullable=False)
    def __repr__(self):
        return f'<Test {self.name}>'
