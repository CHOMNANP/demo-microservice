- git clone https://github.com/CHOMNANP/demo-microservice.git && cd demo-microservice


- cd services/customer && docker-compose up -d --build
- cd services/sale && docker-compose up -d  --build
- docker ps

Kong
- chmod +x kong.sh 
- ./kong.sh 
- connection http://kong:8001