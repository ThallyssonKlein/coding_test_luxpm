from flask import Flask
import json

app = Flask(__name__)

@app.route('/')
def encrypt():
    numbers_list = list(range(1, 20 * 2, 2))
    string = 'LuxPMsoft'

    message = ''

    for i, v in enumerate(string):
        message += v + str(list(reversed(numbers_list))[i])
        if i == 7:
            break
    return json.dumps({
        'message' : message 
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5001)