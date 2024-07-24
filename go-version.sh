#!/bin/bash

# Define paths and commands
BASE_DIR=$(pwd)
GO_SERVER_DIR="$BASE_DIR/backend/go-api-server"
REACT_APP_DIR="$BASE_DIR/frontend"
GO_SERVER_EXEC="$GO_SERVER_DIR/go-api-server"

start_go_server() {
  echo "Starting Go server..."
  cd "$GO_SERVER_DIR" || exit
  # Use nohup to keep the process running in the background
  nohup "$GO_SERVER_EXEC" > go-server.log 2>&1 &
  echo "Go server started."
}

stop_go_server() {
  echo "Stopping Go server..."
  # Find and kill the process by port number
  pkill -f "$GO_SERVER_EXEC"
  echo "Go server stopped."
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
    start_go_server
    start_react_app
    ;;
  stop)
    stop_go_server
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