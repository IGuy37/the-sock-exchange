pipeline {
agent any

    environment {
        NGINX_HTML_DIR = "C:\\Program Files\\nginx-1.25.4\\html\\"
    }

    stages {
        stage('Build') {
            steps {
                // Build placeholder
                echo "Building..."
            }
        }

        stage('Test') {
            steps {
                // Test placeholder
                echo "Running tests..."
            }
        }

        stage('Deploy') {
            steps {
                bat "xcopy client\\* \"${env.NGINX_HTML_DIR}\" /s /y"
            }
        }
    }
}