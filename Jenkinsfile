pipeline {
  agent any
  
  stages {
        stage('test') {
            steps {
            sh "echo The login user is ${USER}"
            sh "echo Welcome to pearlshop website"
            }
        }
     

        stage('deployment') {
            environment { 
                SSH_CRED = credentials('jenkinstest-pem')
            }
            steps{         
                script {
                    sh """
                    #!/bin/bash
		            echo "connecting to remote or deploy server"	
                    ssh -i $SSH_CRED -t -o StrictHostKeyChecking=no ubuntu@15.223.5.96 << EOF
//                     sudo mkdir dummy-blog
                    cd dummy-blog
                    sudo git clone https://github.com/tolaoguntunde/dummy-blog.git .
                    sudo apt install npm -y
                    sudo apt install nodejs -y
                    npm install -y
                    npm i -D --save-exact mini-css-extract-plugin@2.4.5 -y
                    npm build
                    sudo cp -r build /var/www/
                    echo "exiting server terminal"
                    exit
                    << EOF
                    """
                }
            }
        }
    }
}
