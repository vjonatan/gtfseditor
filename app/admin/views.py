from flask import Flask, jsonify, request, g, abort, url_for, current_app,render_template, send_from_directory
from . import admin


app = Flask(__name__, static_folder ='/home/mariano/gaston/gtfseditor/client/')

@admin.route('/index')
def root():
	return send_from_directory(app.static_folder, 'index.html')

