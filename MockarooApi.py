import requests
import os
import json

URL = "https://my.api.mockaroo.com/test1.json?key=cba867b0"

r = requests.get(url = URL) 

data = r.json()

with open("cypress/fixtures/datos.json","r+") as file:
    json.dump(data,file)
