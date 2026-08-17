#!/bin/bash
# This script is used to deploy/start rbcyber-website to a reverse proxy.

RBCYBER_WEBSITE_DIR="/srv/rbcyber-website/rbcyber-org"

cd $RBCYBER_WEBSITE_DIR
git pull
npm install
npm run build
sudo cp -r ./apps/frontend/dist/* /var/www/rbcyber.org/html/
sudo systemctl restart rbcyber-web # Assumes a systemd service is set up for the backend server.
