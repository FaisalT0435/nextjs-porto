pipeline {
  agent any

  environment {
    EC2_HOST         = '16.78.148.238'                 // IP Public EC2
    EC2_USER         = 'ubuntu'                  // Username EC2
    SSH_CREDENTIALS  = 'ec2-ssh-key'             // Credentials ID di Jenkins
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
    stage('Verifikasi Branch') {
      steps {
        script {
          // Cek branch yang sedang jalan (env.GIT_BRANCH bisa saja kosong, jadi safer pakai git command)
          def currentBranch = sh(
            script: "git rev-parse --abbrev-ref HEAD",
            returnStdout: true
          ).trim()
          if (currentBranch != env.BRANCH_MAIN && currentBranch != env.BRANCH_DEVELOP) {
            currentBuild.result = 'ABORTED'
            error("Deploy hanya untuk branch main atau develop. Branch saat ini: " + currentBranch)
          }
        }
      }
    }

    stage('Kirim Email Approval') {
      steps {
        emailext (
          subject: "Approval needed for Jenkins Deploy (${env.BUILD_TAG})",
          body: "Ada request deploy ke branch ${env.GIT_BRANCH} pada Jenkins job: ${env.JOB_NAME} build: #${env.BUILD_NUMBER}. Silakan approve di Jenkins UI.",
          to: "${env.RECIPIENT_EMAIL}"
        )
      }
    }

    stage('Approval Manual di Jenkins') {
      steps {
        script {
          input message: "Approve deployment ke EC2 untuk branch ini?", ok: 'Approve Deploy'
        }
      }
    }

    stage('Deploy ke EC2') {
      steps {
        sshagent (credentials: ["${env.SSH_CREDENTIALS}"]) {
          sh """
            ssh -o StrictHostKeyChecking=no ${env.EC2_USER}@${env.EC2_HOST} '
              cd ${env.APP_DIR} && \
              git pull && \
              pm2 stop ${env.PM2_APP_NAME} || true && \
              npm install && \
              npm run build && \
              pm2 start ${env.PM2_APP_NAME}
            '
          """
        }
      }
    }
  }
}
