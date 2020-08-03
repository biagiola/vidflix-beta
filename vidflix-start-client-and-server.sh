#! /bin/bash

cd codes/vidflix-beta-2

# open vs code here
code .

# start back-end
gnome-terminal --tab -- sh -c  "cd server && npm start"

# start front-end
npm start
    
