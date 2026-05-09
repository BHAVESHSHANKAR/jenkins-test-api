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

        stage('Run Application Check') {
            steps {
                bat 'npm list'
            }
        }

        stage('Success') {
            steps {
                echo 'Node.js CI pipeline completed successfully'
            }
        }
    }
}