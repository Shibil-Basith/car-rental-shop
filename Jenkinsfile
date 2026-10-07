pipeline{
    agent any
    stages{
        stage('checkout'){
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
                    cp -r car-rental-shop/* /var/www/html
                    ls -l /var/www/html
                '''
                    
            }
        }
        
    }
}
