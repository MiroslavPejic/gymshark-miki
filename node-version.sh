#!/bin/bash

# Define paths and commands
EXPRESS_APP_DIR="/home/mikipejic/Gymshark-miki/backend/node-api-server"
REACT_APP_DIR="/home/mikipejic/Gymshark-miki/frontend"
EXPRESS_PORT=3001

start_express_server() {
  echo "Starting Express server..."
  cd "$EXPRESS_APP_DIR" || exit
  # Use nohup to keep the process running in the background
  nohup npm start > express.log 2>&1 &
  echo "Express server started."
}

stop_express_server() {
  echo "Stopping Express server..."
  # Find and kill the process by port number
  pkill -f "node.*$EXPRESS_PORT"
  echo "Express server stopped."
}

start_react_app() {
  echo "Starting React app..."
  cd "$REACT_APP_DIR" || exit
  # Use nohup to keep the process running in the background
  nohup npm start > react.log 2>&1 &
  echo "React app started."
}

stop_react_app() {
  echo "Stopping React app..."
  # Find and kill the process by the name 'react-scripts'
  pkill -f "react-scripts"
  echo "React app stopped."
}

case "$1" in
  start)
    start_express_server
    start_react_app
    ;;
  stop)
    stop_express_server
    stop_react_app
    ;;
  restart)
    $0 stop
    sleep 2
    $0 start
    ;;
  *)
    echo "Usage: $0 {start|stop|restart}"
    exit 1
    ;;
esac