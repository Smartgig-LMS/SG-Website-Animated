#!/bin/bash
sudo rm -rf /var/www/html/*
sudo cp -r /home/ubuntu/sg-website/build/* /var/www/html/
sudo service nginx restart
