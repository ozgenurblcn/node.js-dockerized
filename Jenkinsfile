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
                bat 'npm install '
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
                bat 'docker build -t dockerrepo .'
            }
        }
        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker_token', passwordVariable: 'Ozgenur.0519', usernameVariable: 'ozgenur19')]) {
                    bat 'docker login ozgenur19'
                    bat 'docker tag dockerrepo ozgenur19/dockerrepo'
                    bat 'docker push ozgenur19/dockerrepo'
                    bat 'docker logout'
                }
            }
        }
    }
}
