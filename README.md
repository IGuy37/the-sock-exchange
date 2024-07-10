# The Sock Exchange
This guided project was created for the Travelers Engineering Development Program (EDP) bootcamp.
It was developed in the form of varying labs teaching us how to use JavaScript, Git, GitHub, Agile, the MERN stack, PostgreSQL and more!

## Project Description
Welcome to The Sock Exchange - your one-stop-shop for reuniting lost soles!
Ever find yourself socked with a lonely leftie, or perhaps a solitary rightie, pining for its partner? 
Fear not, for The Sock Exchange is here to save the day (and your feet) from mismatched misery. 
Our innovative platform is dedicated to the noble cause of re-pairing the unpaired, ensuring that every sock finds its soulmate.

## Learning Goals
Throughout this bootcamp, by completing these labs we:
- Modern Web Development
    - Vanilla JavaScript
        - Learned the client/server model for web applications
        - Learned how to perform DOM manipulation using the Document object
        - Used `fetch()` along with other asynchronous functions
    - Cloud Essentials with AWS
        - Created an EC2 instance
        - Created an S3 bucket and used it to host a static website
        - Created a Lambda Function to run the code for the website
- DevOps
    - Used Git to track source code
    - Pushed code to GitHub to share with others
    - Created pull requests to class repositories to experience the open-source workflow model
    - Used Node Package Manager (NPM) to manage dependencies
- CI/CD (Continuous Integration / Continuous Deployment or Delivery)
    - Used GitHub Actions to automatically deploy code to AWS S3 and Lambda Functions
    - Used Jenkins to create builds of code on GitHub
- The MERN stack
    - Created databases using MongoDB
        - Used `MongoDB Compass` to view the database
    - Created a web server using Node.js and Express to fetch data from the MongoDB database
        - Used routing to create an API for the client to use
        - Used a `.env` file to hold information about the database connection
            - Includes sensitive information not uploaded to this GitHub repository to help prevent unauthorized access
        - Used `express-rate-limit` to help prevent Denial of Service (DoS) attacks
        - Sanitized user input using MongoDB's `$eq` operator
    - Created a website using React.js to fetch data from the server and display it to the user
        - Modeled React components to cleanly organize the website
        - Used React Routing to make the website a SPA (Single Page Application)
    - Created a rudimentary authentication server using PostgreSQL
        - Used `pgAdmin 4` to view the PostgreSQL database
- Test-Driven Development (TDD)
    - Used Jest to test React Components
    - Added tests to GitHub Actions & Jenkins Workflow to test automatically upon pushing code to GitHub
- Data Engineering
    - Learned the basics of Python
    - Used DataBricks Community Edition cloud computing to process big data
    - Used Python's `pandas`, `numpy`, and `pyspark` libraries to manipulate data using dataframes
        - Used these dataframes to clean improperly formatted data
    - Used Python's `matplotlib` and `seaborn` libraries to visualize dataframes
- Data Science
    - Used Jupyter Notebooks to develop Python code
    - Used Python's `scikit-learn` library to perform predictive modeling on data
        - Used `LogisticRegression` as the model
        - Used `train-test-split` to split data into training and testing data
    - Used Python's builtin `pickle` library to read/write a trained model to disk

## How to Run The Sock Exchange website locally
Clone the code from this repository. Ensure you have NPM and MongoDB installed and a MongoDB server is running on localhost:27017. Run the following in the root of the project:

```bash
cd server
npm install
npm run start
```

In a separate terminal starting in the root directory, run:
```bash
cd react-client
npm install
npm run dev
```
Note that `npm install` is only necessary the first time as it initializes dependencies.
