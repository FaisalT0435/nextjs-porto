pipeline {
  agent any

  environment {
    EC2_IP = credentials('ec2-ip-address')                 // IP Public EC2
    EC2_USER         = 'ubuntu'                  // Username EC2
    SSH_CREDENTIALS  = 'AWS-EC2'             // Credentials ID di Jenkins
    APP_DIR          = '/home/ubuntu/web/porto/nextjs-porto'
    PM2_APP_NAME     = 'portofolio'
    RECIPIENT_EMAIL  = 'faisaltsurya@gamil.com'         // Email approval/alert
    BRANCH_MAIN      = 'main'
    BRANCH_DEVELOP   = 'develop'
  }

  triggers {
    githubPush()
  }

  stages {
    stage('Clone Repository') {
      steps {
        checkout scm
      }
    }

    stage('Verifikasi Branch') {
      steps {
        script {
          def currentBranch = sh(
            script: "git rev-parse --abbrev-ref HEAD",
            returnStdout: true
          ).trim()
          echo "Current branch: ${currentBranch}"
          if (currentBranch != env.BRANCH_MAIN && currentBranch != env.BRANCH_DEVELOP) {
            currentBuild.result = 'ABORTED'
            error("Deploy hanya untuk branch main atau develop. Branch saat ini: " + currentBranch)
          }
        }
      }
    }

    stage('Send Email Approval') {
      steps {
        emailext (
          subject: "Approval needed for Jenkins Deploy (${env.BUILD_TAG})",
          body: "Ada request deploy ke branch ${env.GIT_BRANCH} pada Jenkins job: ${env.JOB_NAME} build: #${env.BUILD_NUMBER}. Silakan approve di Jenkins UI.",
          to: "${env.RECIPIENT_EMAIL}"
        )
      }
    }

    stage('Approve Manual di Jenkins') {
      steps {
        script {
          input message: "Approve deployment ke EC2 untuk branch ini?", ok: 'Approve Deploy'
        }
      }
    }

    stage('Deploy ke EC2 - Git Pull ') {
      steps {
        sshagent (credentials: ["${env.SSH_CREDENTIALS}"]) {
          sh """
            ssh -o StrictHostKeyChecking=no ${env.EC2_USER}@${env.EC2_HOST} '
              cd ${env.APP_DIR} && git pull
            '
          """
        }
      }
    }

    stage('Deploy ke EC2 - Install Dependencies') {
      steps {
        sshagent (credentials: ["${env.SSH_CREDENTIALS}"]) {
          sh """
            ssh -o StrictHostKeyChecking=no ${env.EC2_USER}@${env.EC2_HOST} '
              cd ${env.APP_DIR} && npm install
            '
          """
        }
      }
    }

    stage('Deploy ke EC2 - Build App') {
      steps {
        sshagent (credentials: ["${env.SSH_CREDENTIALS}"]) {
          sh """
            ssh -o StrictHostKeyChecking=no ${env.EC2_USER}@${env.EC2_HOST} '
              cd ${env.APP_DIR} && npm run build
            '
          """
        }
      }
    }

    stage('Deploy ke EC2 - Restart PM2') {
      steps {
        sshagent (credentials: ["${env.SSH_CREDENTIALS}"]) {
          sh """
            ssh -o StrictHostKeyChecking=no ${env.EC2_USER}@${env.EC2_HOST} '
              cd ${env.APP_DIR} && pm2 stop ${env.PM2_APP_NAME} || true && pm2 start ${env.PM2_APP_NAME}
            '
          """
        }
      }
    }
  }
}