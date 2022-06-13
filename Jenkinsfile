pipeline {
    agent any

    tools {nodejs "nodejs"}

    stages {
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    script {
                        def scannerHome = tool 'SonarScanner';
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }

        stage('Clean WS') {
            steps {
                cleanWs()
            }
        }
    }

    post {
        always {
            echo 'One way or another, I have finished'
            cleanWs()
        }
        success {
            withAWS(region:'eu-west-1',credentials:'aws-cred') {
                sh 'aws ses send-email --from cloudamalitech@amalitech.org --to godfred.nsabo@amalitech.com --subject "Deployment Success" --text "Frontend-Challenge-Reuben Deployment Passed"'
            }
        }
        unstable {
            echo 'I am unstable :/'
        }
        failure {
            withAWS(region:'eu-west-1', credentials:'aws-cred') {
                sh 'aws ses send-email --from cloudamalitech@amalitech.org --to godfred.nsabo@amalitech.com --subject "Deployment Failure" --text "Frontend-Challenge-Reuben Deployment Failed"'
            }
        }
        changed {
            echo 'Things were different before ...'
        }
    }
}
