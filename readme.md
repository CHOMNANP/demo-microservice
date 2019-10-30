- git clone https://github.com/CHOMNANP/demo-microservice.git && cd demo-microservice
- chmod +x kong.sh 
- ./kong.sh 

- cd services/customer && docker-compose up -d && cd ..
- cd services/sale && docker-compose up -d

Then configure Kong