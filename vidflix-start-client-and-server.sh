#! /bin/bash

# start back-end
gnome-terminal --tab -- sh -c  "cd server && npm start"

# start front-end
npm start
    
