#void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/kypnt/com.kypnt.rec-tool.ui.git"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}     
pipeline {
    agent any
  
    environment {
        GITHUB_REPO = "https://github.com/kypnt/com.kypnt.rec-tool.ui.git"
        GITHUB_BRANCH = "*/developer"
        REGION = "eu-west-1"
        BUCKET = "app.talrise.com"
        FOLDER = "/var/lib/jenkins/workspace/com.kypnt.rec-tool.ui/build/"
        AWS_CREDENTIALS = "awss3jenkins"
        list = readFile(file: 'frontendmail.txt')
        URL_WEBHOOK = "https://talrise.webhook.office.com/webhookb2/f84d9b97-771b-4334-b574-6a7f3ddd0515@de9825ea-d316-4fbf-8293-d5b704ab826d/JenkinsCI/4fceb59cc164424db2252266818224a5/fa80e1e4-f044-43be-8eee-f2c3cc48fe28"
    }
    stages {
        stage('Clone code from Github') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: GITHUB_BRANCH]], extensions: [], userRemoteConfigs: [[credentialsId: 'omeraritoken', url: GITHUB_REPO]]])
            }
        }
        stage('Get Github Commit ID') {
            steps {
                script {
                    // Checkout the repository and save the resulting metadata
                    def scmVars = checkout([$class: 'GitSCM', branches: [[name: GITHUB_BRANCH]], extensions: [], userRemoteConfigs: [[credentialsId: 'omeraritoken', url: GITHUB_REPO]]])
                    env.commitHash = scmVars.GIT_COMMIT.take(7)
                    echo "commitHash"
                    echo "${commitHash}"
                    echo "scmVars.GIT_COMMIT"
                    echo "${scmVars.GIT_COMMIT}"
                }
            }
        }
        stage("Frontend Build") {
            steps {
                script {
                    nodejs('Node-18.4.0'){
                        sh 'yarn cache clean && yarn install'
                        sh 'yarn build'
                    }
                }
            }
        }
        stage("Upload to AWS S3"){
            steps{
                withAWS(region:"${REGION}", credentials:"${AWS_CREDENTIALS}"){
                    s3Upload(file:"${FOLDER}", bucket:"${BUCKET}", path:'')
                }    
            }
        }
    }
    post {
        always{
            emailext to:"${list}",
                subject:"Jenkins - rec-tool-frontend",
                body:"Github CommitID: ${commitHash}\nJenkins Build Number: ${BUILD_NUMBER}\nBuild Status: ${currentBuild.currentResult}\n${BUILD_URL}",
                attachLog: true
        }
        success {
            setBuildStatus("Build succeeded", "SUCCESS");
        }
        failure {
            setBuildStatus("Build failed", "FAILURE");
        }
    }
}
