from flask import Flask, render_template, request, make_response, jsonify
from flask_cors import CORS, cross_origin
from models import db, User, Mission, Jonin

#import tensorflow as tf
#from tensorflow.keras.preprocessing import image
#import numpy as np
#from werkzeug.utils import secure_filename
#import warnings
#warnings.filterwarnings("ignore", category=DeprecationWarning)
#warnings.filterwarnings("ignore", category=UserWarning)

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/naruto'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#model = tf.keras.models.load_model('jutsu_classifier_final.keras')
db.init_app(app)  # Very

with app.app_context():    # <--- important!!
     db.create_all()

#@app.route('/predict', methods=['POST'])
#def predict():
#    try:
#        # Debug: Print request data
#        print("Request files:", request.files)
#        print("Request form:", request.form)
#
#        if 'image' not in request.files:
#            print("Debug: No 'image' field in request.files")
#            return jsonify({'error': 'No image file provided', 'details': 'Missing image field'}), 400#
#
#        file = request.files['image']
#        print("Debug: Received file:", file.filename)

 #       if file.filename == '':
  #          print("Debug: Empty filename")
    #        return jsonify({'error': 'No selected file', 'details': 'Empty filename'}), 400

#        allowed_extensions = {'png', 'jpg', 'jpeg'}
 #       file_ext = file.filename.rsplit('.', 1)[1].lower() if '.' in file.filename else ''
  #      if not ('.' in file.filename and file_ext in allowed_extensions):
   #         print(f"Debug: Invalid extension: {file_ext}")
    #        return jsonify({
     #           'error': 'Invalid file type',
      #          'details': f'Allowed: {allowed_extensions}, got: {file_ext}'
      #      }), 400

 #       filename = secure_filename(file.filename)
  #      if not filename:
   #         print("Debug: secure_filename returned empty")
    #        return jsonify({
     #           'error': 'Invalid filename',
      #          'details': f'Original: {file.filename}, secured: {filename}'
      #      }), 400

        # Rest of your prediction code...

    # except Exception as e:
      #  print("Debug: Unexpected error:", str(e))
       # return jsonify({'error': 'Server error', 'details': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
