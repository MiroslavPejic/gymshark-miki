# gymshark-miki

PREREQUISITES

If you want to run the API via the node app then you'll also need NodeJS.
https://nodejs.org/en

Before you start you will need to have npm installed and Go installed.

To start the app run one of the following scripts:

./go-version.sh start

./node-version.sh start

This will start the go or node API servers and the react app, it should open a window on your default browser.

If for some reason this doesnt work then you can start the API server and app manually, do the following.

GO version:

1: cd backend/go-api-server/

2: ./go-api-server

3: cd frontend/

4: npm start

Node version:

1: cd backend/node-api-server

2: node index.js

3: cd frontend/

4: npm start