pipeline{
    agent any
    stages{
        stage('code checkout'){
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/Shibil-Basith/car-rental-shop.git
                    ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    rm -rf /var/www/html/*
                    cp -r car-rental-shop/* /var/www/html
                    ls -l
                '''
            }
        }
    }
}
