# Nginx Testing Project

This project demonstrates the setup of two Express.js servers running on different ports. It is designed to test and experiment with Nginx configurations for load balancing, reverse proxying, or other use cases.

## Project Structure

The project consists of a single JavaScript file:

- **index.js**: Contains the code to set up and run two Express.js servers on ports 3000 and 3001.

## Features

### Server 1

- **Port**: 3000
- **Routes**:
  - `/`: Returns a simple greeting message: `Hello from Server 1 running on port 3000!`
  - `/info`: Returns a JSON response with server details:
    ```json
    {
      "server": "Server 1",
      "port": 3000,
      "status": "Running"
    }
    ```

### Server 2

- **Port**: 3001
- **Routes**:
  - `/`: Returns a simple greeting message: `Greetings from Server 2 operating on port 3001!`
  - `/status`: Returns a plain text response indicating the server's status: `Server 2 (Port 3001) is UP!`

## How to Run

1. Ensure you have Node.js installed on your system.
2. Clone this repository or copy the `index.js` file to your local machine.
3. Install the required dependencies by running:
   ```bash
   npm install express
   ```
4. Start the servers by running:
   ```bash
   node index.js
   ```
5. Open your browser or a tool like Postman to test the following URLs:
   - Server 1:
     - [http://localhost:3000/](http://localhost:3000/)
     - [http://localhost:3000/info](http://localhost:3000/info)
   - Server 2:
     - [http://localhost:3001/](http://localhost:3001/)
     - [http://localhost:3001/status](http://localhost:3001/status)

## Graceful Shutdown

The application listens for the `SIGINT` signal (e.g., when pressing `Ctrl+C`) and logs a shutdown message before exiting. You can add additional cleanup logic if needed.

## Use Case

This project is ideal for:

- Testing Nginx configurations for reverse proxying or load balancing.
- Learning how to set up multiple Express.js servers.
- Experimenting with server-side routing and responses.

## License

This project is open-source and available under the MIT License.
