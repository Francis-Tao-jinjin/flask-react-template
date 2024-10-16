## How to Run:

### Backend

Make sure you have `poetry` installed, then enter the 'backend' directory.

1. `poetry config virtualenvs.in-project true`
This let poetry know that you would like to create '.venv' under './backend/' instead of some where in your system directory.

2. `poetry install`
Install all the dependencies for the flask app

3. `poetry run flask-run`
This will start the flask server, you shoudld be able to see these information in the terminal:
```
 * Serving Flask app 'backend:create_app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
```
To test if the server is working, open 'http://127.0.0.1:5000/hello' in the browser, you should see a '- Hello, World! -' response:
![Hello Response](./images/hello.png)

4. Open a tab in the terminal, then run `source .venv/bin/activate`

5. `poetry run flask-init-db`
This will initialize the database for the flask app

### Frontend

Enter the 'frontend' directory

1. `npm install`

2. `npm start`


## Developement Detail:

### Backend: 

Basic code structure:
```
.
├── backend
│   ├── __init__.py
│   ├── api
│   │   ├── auth.py
│   │   └── utils
│   │       └── exceptions.py
│   ├── contanst.py
│   ├── db.py
│   └── schema.sql
├── env.json
```

### Frontend:

Basic code structure:
```
.
├── App.css
├── App.tsx
├── components
│   ├── add-stock-input
│   ├── carousels
│   ├── default-landing-page
│   │   ├── ...
│   │   └── index.tsx
│   ├── header
│   ├── loading-skeleton
│   ├── stock-graph
│   └── user-dashboard
├── index.tsx
├── pages
│   ├── home
│   ├── login
│   └── register
├── service
│   ├── api.tsx
│   └── interface.ts
```
