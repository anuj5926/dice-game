pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                git 'https://github.com/anuj5926/dice-game.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                // Add build commands here
            }
        }
    }
}
