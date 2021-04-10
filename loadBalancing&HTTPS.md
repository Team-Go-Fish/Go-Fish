## A basic load balancer with nginx ##
A load balancer is a server that runs in front of the application server(s). It runs on the EC2 instance and on the port that all incoming traffic will hit, and then passes that traffic to the actual application server(s). This allows us to run multiple instances of our application server and handle more traffic. It also allows us to set up a secure (https) connection.\
### Installation ###
To install nginx, ssh into your EC2 instance and follow the installation instructions for Ubuntu at [nginx.org](https://nginx.org/en/linux_packages.html#Ubuntu), or use the following commands:\
*Ubuntu*\
Install the prerequisites:\
`sudo apt install curl gnupg2 ca-certificates lsb-release`\
To set up the apt repository for stable nginx packages, run the following command:\
`echo "deb http://nginx.org/packages/ubuntu` `lsb_release -cs` `nginx" \ | sudo tee /etc/apt/sources.list.d/nginx.list`\
Next, import an official nginx signing key so apt could verify the packages authenticity. Fetch the key:\
`curl -o /tmp/nginx_signing.key https://nginx.org/keys/nginx_signing.key`\
Finally, move the key to apt trusted key storage (note the "asc" file extension change):\
`sudo mv /tmp/nginx_signing.key /etc/apt/trusted.gpg.d/nginx_signing.asc`\
To install nginx, run the following commands:\
`sudo apt update`\
`sudo apt install nginx`
### Configuration ###
nginx runs a server (or servers) off of a basix config file that tells it what to do. You simply need to edit this file or make a new one for this application.\
`cd /etc/nginx`\
If you're going to edit `nginx.conf`, first make a backup:\
`sudo cp nginx.conf nginx_backup.conf`\
Or you can just create a new config:\
`sudo touch goFish.conf`\
To set up a simple load balancer, see the example at [nginx.com](https://www.nginx.com/resources/wiki/start/topics/examples/loadbalanceexample/), or follow this example:\
Open up the vim editor:\
`sudo vi goFish.conf`\
For a basic, round-robin style load balancer, in which the nginx server just takes turns passing each incoming request to the next application server in the rotation, all your `goFish.conf` needs to contain is:\
#Note: I don't actually undertand this first few settings. They are required, and the load balancer should work fine with these numbers, which are just the defaults
```
worker_processes 5;
worker_rlimit_nofile 8192;
events {
  worker_connections  4096;
}
#These are the actual server settings
http {
  upstream goFish {
    #This is where to list all instances of the application server
    server 3.136.112.63:3005;
    #...
  }
  server {
    #Set the nginx server to run on the port exposed for incoming traffic
    listen 80;
    #All request to the nginx server...
    location / {
      #...will be passed to the upstream application servers
      proxy_pass http://qaAPI;
    }
  }
}
```
### Running ###
Make sure the application server(s) is/are running at the ips and on the ports listed in the config file. To run the nginx load balancer:\
If you edited `nginx.conf` nginx runs with that file by default:\
`sudo nginx`\
If you created a new `goFish.conf`, run nginx with that file:\
`sudo nginx -c goFish.conf`\
To stop nginx:\
`sudo nginx -s quit` - graceful shutdown\
`sudo nginx -s stop` - fast shutdown\
To reload the config file without shutting down:\
`sudo nginx -s reload`

## HTTPS ##
### Requirements ###
- A proxy server or load balancer, in this case nginx
- An SSL certificate and private key

### Option 1: self-signed SSL certificate ###
To be legit, SSL certificates need to by signed by a verified 3rd party. However, for development and testing purposes, you may want to just have the load balancer serve up a self-signed certificate. The post I used is [How to enable SSL on NGINX](https://www.techrepublic.com/article/how-to-enable-ssl-on-nginx/), or follow these steps:\
The first step is to generate a self-signed certificate using openssl. To do this, ssh into the EC2 where the nginx load balancer runs and run the following command:\
`sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt`\
You will be asked a few questions (such as country name, state, locality, etc.). The most important answer is the Common Name. For this question, answer with the server's IP Address:\
`Common Name (e.g. server FQDN or YOUR name) []:3.136.112.63`\
Next, create a configuation snippet file:\
`cd /etc/nginx`\
`sudo mkdir snippets`\
`cd snippets`\
`sudo touch self-signed.conf`\
Open that file...\
`sudo vi self-signed.cong`\
...and add these two lines:\
`ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;`\
`ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;`\
Next, create a second configuration snippet:\
`sudo touch ssl-params.conf`\
`sudo vi ssl-params.conf`\
and add these contents:\
*Note: I don't know what all of these settings are, but this worked for me so I'm passing it along. The two lines to pay attention to are the ones commented out with #. For using a self-signed certificate leave those commented out. For a legit certificate, remove the # from those two lines*
```
ssl_protocols TLSv1.2;
ssl_prefer_server_ciphers on;
ssl_dhparam /etc/ssl/certs/dhparam.pem;
ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
ssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0
ssl_session_timeout  10m;
ssl_session_cache shared:SSL:10m;
ssl_session_tickets off; # Requires nginx >= 1.5.9
# ssl_stapling on; # Requires nginx >= 1.3.7
# ssl_stapling_verify on; # Requires nginx => 1.3.7
resolver 8.8.8.8 8.8.4.4 valid=300s;
resolver_timeout 5s;
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
add_header X-XSS-Protection "1; mode=block";
```
Next, generate the file dhparam.pem with openssl:\
`sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048`\
Great! Now:\
`cd /etc/nginx`\
Edit the load balancer config file that you are using:\
`sudo vi nginx.conf` or `sudo vi goFish.conf`\
Change the `server block` to the following:
```
  server {
    #Set the nginx server to run on the port exposed for https traffic
    listen 443 ssl;
    listen [::]:443 ssl;
    #Create a secure connection using the certificate, key, and parameters you set up
    include snippets/self-signed.conf;
    include snippets/ssl-params.conf;
    #All request to the nginx server...
    location / {
      #...will be passed to the upstream application servers
      proxy_pass http://goFish;
    }
  }
```
Great! Now restart the load balancer with this updated config file.\
The browser will yell at you and tell you that this is not a trusted/secure connection. But its ok, you signed the certificate yourself! When you get this message from the browser, click on Advanced and Proceed to your application.
### Option 2: 3rd party signed SSL certificate ###
From what I can tell, SSL certificates go with domains, not ip addresses, so the first thing to do is register a domain name, or just make me an offer for `gofishmovies.com`.\
In the account you create with whomever for managing your domain, go to the `DNS` settings and add or edit the following rules:\
*Type A is ipv4, this value should be the EC2 instance where the nginx load balancer runs*
| TYPE | HOST NAME | VALUE |
| ---- | ---- | ---- |
| A | @ | 3.136.112.63 |
| A | www | 3.136.112.63 |

Great, now your domain is connected to the ip address where the app receives incoming traffic!\
Next, back to the app server. ssh into the EC2 where the nginx load balancer runs. You can find instruction for generating keys and a certificate signing request at [Enabling HTTPS on Your Servers](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/enable-https), or follow these steps:\
Generate the public/private key pair with openssl:\
`openssl genrsa -out gofishmovies.com.key 2048`\
Then generate a certificate signing request:\
`openssl req -new -sha256 -key gofishmovies.com.key -out gofishmovies.com.csr`\
Follow the prompts as with the self-signed version, but note that Common Name should NOT be an ip address but should be your domain name:\
`Common Name (e.g. server FQDN or YOUR name) []:gofishmovies.com`\
This is what will be submitted to the certificate authority to recieve a legitimate SSL certificate.\
Based on a search for `free ssl certificate`, I ended up at [https://www.ssl.com/certificates/free/](https://www.ssl.com/certificates/free/). Purchase the free 90 certificate, and create an account. Follow the steps to submit your csr. For this site, just\
`vi gofishmovies.com.csr`\
and copy and paste the contents into the submission field.\
Upon success, download the Nginx version of the certificate (using nginx requires a couple pieces of information to be bundled in the same file, by downloading this version of the certificate that bundling has already been done).\
Now, back in the EC2 shell, move the key file:\
`sudo mv gofishmovies.com.key /etc/ssl/private`\
Then create the certificate file:\
`cd /etc/ssl/certs`\
`sudo touch gofishmovies_com.chained.crt`\
`sudo vi gofishmovies_com.chained.crt`\
Now back on your machine, open up the `gofishmovies_com.chained.crt` that you just downloaded with your text editor, and copy and paste the contents into the `gofishmovies_com.chained.crt` you are currently editing on the EC2.\
Great! Now just follow the steps above from using a self-signed certificate:\
`cd /etc/nginx/snippets`\
`sudo touch gofishmovies.com.conf`\
`sudo vi gofishmovies.com.conf`\
This file should contain these two lines:\
`ssl_certificate /etc/ssl/certs/gofishmovies_com.chained.crt;`\
`ssl_certificate_key /etc/ssl/private/gofishmovies.com.key;`\
Then:\
`sudo touch ssl-params.conf` - *If it doesn't exist*\
`sudo vi ssl-params.conf`\
This file should contain:
```
ssl_protocols TLSv1.2;
ssl_prefer_server_ciphers on;
ssl_dhparam /etc/ssl/certs/dhparam.pem;
ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
ssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0
ssl_session_timeout  10m;
ssl_session_cache shared:SSL:10m;
ssl_session_tickets off; # Requires nginx >= 1.5.9
ssl_stapling on; # Requires nginx >= 1.3.7
ssl_stapling_verify on; # Requires nginx => 1.3.7
resolver 8.8.8.8 8.8.4.4 valid=300s;
resolver_timeout 5s;
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
add_header X-XSS-Protection "1; mode=block";
```
*Note that the `#` has been removed from `ssl_stapling on;` and `ssl_stapling_verify on;`*\
Then just include the legit certificate in the nginx config file:\
`cd /etc/nginx`\
`sudo vi goFish.conf`\
The `server` block should now look like:
```
  server {
    listen 443 ssl;
    listen [::]:443 ssl;
    #Point to the snippet that includes directions to the legit certificate and key
    include snippets/gofishmovies.com.conf;
    include snippets/ssl-params.conf;

    location / {
      proxy_pass http://goFish;
    }
  }
```
That's it!
### Alternative ###
Try [**certbot**](https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx). Once you have your domain connected to the correct ip address, see if **certbot** really does streamline the above process like it claims.
### Final notes ###
The final step in setting up HTTPS is to redirect HTTP (port 80) traffic to HTTPS (port 443). As of this writing I have not been able to make this work. In theory, and based on my research, it should be as simple as editing your nginx config file by adding another server block like so:
```
http {
  upstream goFish {
     #your app express server(s)
    server 3.136.112.63:3005;`
  }

  server {
    listen 443 ssl;
    listen [::]:443 ssl;
     #your domain name
    server_name gofishmovies.com;
    #your ssl certificate and parameters
    include snippets/self-signed.conf;
    include snippets/ssl-params.conf;

    location / {
      proxy_pass http://goFish;
    }
  }
  #run another nginx server
  server {
    #listen on port exposed for http traffic
    listen 80;
    listen [::]:80;
    #your domain name
    server_name gofishmovies.com;
    #redirect with code 301 - permanent redirect - to https://your_domain
    return 301 https://$server_name$request_uri;
 }
}
```
If anyone figures out what I am doing wrong and can successfully redirect http traffic to https, please let me know!

***Kevin Pierce - April 2021***