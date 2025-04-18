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

## Updating the Nginx Configuration File on Linux

1. **Access the Nginx Configuration File**:
   - Open a terminal and use a text editor to edit the Nginx configuration file. The default location is `/etc/nginx/nginx.conf`.
   - Run the following command to open the file with `nano` (or replace `nano` with your preferred editor):
     ```bash
     sudo nano /etc/nginx/nginx.conf
     ```

2. **Modify the Configuration**:
   - Make the necessary changes to the configuration file. For example, you might update server blocks, add reverse proxy settings, or configure load balancing.

3. **Save and Exit**:
   - After making changes, save the file and exit the editor. In `nano`, press `Ctrl+O` to save and `Ctrl+X` to exit.

4. **Test the Configuration**:
   - Before restarting Nginx, test the configuration for syntax errors by running:
     ```bash
     sudo nginx -t
     ```
   - If there are any errors, the output will indicate what needs to be fixed.

5. **Restart Nginx**:
   - Apply the changes by restarting the Nginx service:
     ```bash
     sudo systemctl restart nginx
     ```

## Starting the Nginx Server

1. **Ensure Nginx is Installed**:
   - If Nginx is not already installed, you can install it using your package manager. For example, on Ubuntu:
     ```bash
     sudo apt update
     sudo apt install nginx
     ```

2. **Start the Nginx Service**:
   - To start the Nginx server, run:
     ```bash
     sudo systemctl start nginx
     ```

3. **Enable Nginx to Start on Boot**:
   - To ensure Nginx starts automatically when the system boots, enable the service:
     ```bash
     sudo systemctl enable nginx
     ```

4. **Check the Status of Nginx**:
   - Verify that Nginx is running by checking its status:
     ```bash
     sudo systemctl status nginx
     ```

5. **Access the Server**:
   - Open a web browser and navigate to `http://localhost` or the server's IP address to confirm that Nginx is running.

## Use Case

This project is ideal for:

- Testing Nginx configurations for reverse proxying or load balancing.
- Learning how to set up multiple Express.js servers.
- Experimenting with server-side routing and responses.

## License

This project is open-source and available under the MIT License.
