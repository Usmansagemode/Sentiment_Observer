from flask import Flask, request
from flask_restful import Resource, Api
from final_sentiment import predict_sentiment
import sys

# sentence_to_classify = sys.argv[1]

app = Flask(__name__)
api = Api(app)

# class HelloWorld(Resource):
# 	def get(self):
# 		return {"about":"Hello World!"}, 200
# 	def post(self):
# 		some_json = request.get_json()
# 		return {"result" : some_json}, 201
# class Multi(Resource):
# 	def get(self, num):
# 		return {"result":num*10}
class classify(Resource):
	def get(self):
		print("Classifying")
		sentence_to_classify = request.data
		predictions = predict_sentiment(sentence_to_classify)
		print("Sentence: ", predictions[0], " Sentiment: ", predictions[1])
		print("Classified")
		return {"Sentiment" : predictions[1]}
# class getstring(Resource):
# 	def get(self, num):
# 		# render_template('home.html')
# 		x = "you sent " + str(num)
# 		return {x: "Sending back a string" }
	# def render_template(self,x):
	# 	return x

# api.add_resource(HelloWorld, '/')
# api.add_resource(Multi, '/multi/<int:num>')
# api.add_resource(getstring, '/getstring/<int:num>')
api.add_resource(classify, '/')
# api.add_resource(classify, '/predict')

if __name__ == '__main__':
	app.run( port=7000,debug=True)

