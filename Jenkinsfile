pipeline {
    agent any
    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("Test"){
            steps{
                bat 'sudo apt install npm'
                bat'npm test'
            }
        }

        stage("Build"){
            steps{
                bat 'npm run build'
            }
        }

        stage("Build Image"){
            steps{
                bat 'docker build -t my-node-app:1.0 .'
            }
        }
        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                    bat 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
                    bat 'docker tag my-node-app:1.0 bashidkk/my-node-app:1.0'
                    bat 'docker push bashidkk/my-node-app:1.0'
                    bat 'docker logout'
                }
            }
        }
    }
}
