pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/Shibil-Basith/car-rental-shop.git
                    ls -l
                    echo Current user:
                    echo $USER
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    rm -rf /var/www/html/*
                    cp -r car-rental-shop/* /var/www/html
                '''
            }
        }
    }
}
