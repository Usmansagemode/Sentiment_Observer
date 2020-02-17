import json

# with open('data.txt', 'w') as outfile:
#     json.dump(data, outfile)

with open('test_json.txt') as json_file:
	data = json.load(json_file)
	print(data["sentence"])
	data = json.dumps(data)
	print(data)
