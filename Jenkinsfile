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
                    // For example, using SSH to copy files
                    sh 'scp -r ./ubuntu@13.233.223.111:/home/ubuntu/dice'
                    // Or using a deployment tool
                    // e.g., Ansible, Terraform, Docker commands, etc.
                }
            }
        }
    }
    post {
        success {
            echo 'Deployment succeeded!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
