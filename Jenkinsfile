pipeline{
    agent none
    stages{
        stage('build'){
            agent{
                label 'build-agent'
            }
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/Shibil-Basith/car-rental-shop.git
                    ls -l
                '''
                stash name: 'website', includes: 'car-rental-shop/**'
            }
        }
        stage('deploy'){
            agent{
                label 'deploy-agent'
            }
            steps{
                deleteDir()
                unstash 'website'
                sh '''
                    sudo cp -r car-rental-shop/* /var/www/html
                '''
            }
        }
    }
}
