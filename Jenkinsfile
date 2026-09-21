pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                echo "Checkout Started"
                deleteDir()
                sh '''
                    git clone https://github.com/Shibil-Basith/car-rental-shop.git
                    ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                echo "Deployment Started"
                sh '''
                    rm -rf /var/www/html/*
                    cp -r car-rental-shop/* /var/www/html
                '''
            }
        }
    }
}
