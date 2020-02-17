import json
import requests
import sys
url = 'http://127.0.0.1:7000'
# sentence_to_classify = sys.argv[1]
while True:
	sentence_to_classify = 	input("Enter sentence to classify or enter to quit: ")
	if(sentence_to_classify == ""):
		break
	# doubleQString = "{0}".format(sentence_to_classify)
	# with open('sampledict.json','w') as f:
	#     json.dump(doubleQString ,f)

	# sentence_to_classify = sentence_to_classify.replace('\'', '"')
	data = json.loads(sentence_to_classify)
	headers = {'Content-Type': 'application/json'}
	response = requests.get(url, data=data,headers=headers)
	print(response.json()['Sentiment'])