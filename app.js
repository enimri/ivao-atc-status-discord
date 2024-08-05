pipeline {
  agent any

  tools {nodejs "node"}

  stages {
      stage('start node') {
        steps {
            sh 'npm --prefix ./src install ./src'
            sh 'JENKINS_NODE_COOKIE=dontKillMe forever stop ./src/app.js || true'
            sh 'JENKINS_NODE_COOKIE=dontKillMe forever start ./src/app.js'
        }
     }
  }
}