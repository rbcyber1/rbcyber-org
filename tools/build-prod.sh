#!/bin/bash
set -e

DIR="/git/root/directory/here"

cd $DIR
git fetch origin
git reset --hard origin/main
cd $DIR/client
npm install --omit=dev
npm run build
cd $DIR/src
npm install --omit=dev
