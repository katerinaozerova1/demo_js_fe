Steps to run the app:

Clone the repo:

git clone https://github.com/cypress-io/cypress-example-kitchensink.git
cd cypress-example-kitchensink
``` :contentReference[oaicite:1]{index=1}  


Install dependencies:

npm ci
``` (or `npm install`) :contentReference[oaicite:2]{index=2}  


Start the web server:

PORT=8089 npm start


This will spawn a dev server (for this example it defaults to port 8080) 
GitHub
+1

In your browser go to:

http://localhost:8089


You should see the “Kitchen Sink” application UI of the example repo. 
GitHub

If you want to open the tests (for example if you’re onboarding FE + SeaLights), you can use:

npm run local:open


or headless:

npm run local:run



SL Onboarding Steps:

1. npm i slnodejs
2. npx slnodejs config --tokenfile ./sltoken.txt --appname demo_node_fe --branch master --build `date +"%y%m%d_%H%M"`
3. npx slnodejs scan --tokenfile ./sltoken.txt --buildsessionidfile buildSessionId --labid nodetests --instrumentForBrowsers --workspacepath ./app --outputpath sl_app --scm none --es6Modules

