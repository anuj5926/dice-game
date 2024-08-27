pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/anuj5926/dice-game.git'
            }
        }
        stage('Build') {
            steps {
                // Add build commands here, if needed
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Add your deployment steps here
                    echo 'Deploying to the cloud server...'
                    // Example deployment command
                    sh 'scp -r ./your-files user@your-cloud-server:/path/to/deploy'
                }
            }
        }
    }
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
