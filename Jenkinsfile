pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Check Node Version') {
            steps {
                bat 'node --version'
            }
        }

        stage('Deploy to Render') {
            steps {
                bat 'curl -X POST "https://api.render.com/deploy/srv-d7vdbireo5us73ejsqp0?key=-JQfye2yAIg"'
            }
        }
    }

    post {

        success {
            echo 'Build and deployment successful'
        }

        failure {
            echo 'Pipeline failed'
        }
    }
}