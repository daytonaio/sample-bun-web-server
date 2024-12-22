# Sample JavaScript/Bun

Sample Bun, HTTP server that demonstrates routing, template rendering using EJS, and static file handling. 
# Sample JavaScript/Bun

Sample Bun, HTTP server that demonstrates routing, template rendering using EJS, and static file handling. 
---

## 🚀 Getting Started  

### Open Using Daytona  

1. **Install Daytona**: Follow the [Daytona installation guide](https://www.daytona.io/docs/installation/installation/).  
2. **Create the Workspace**:  
   ```bash  
   daytona create https://github.com/daytonaio/sample-bun-web-server
   ```  
<!-- 3. **Install Bun**:  
   Follow the [Bun installation guide](https://bun.sh/docs/installation) to install Bun on your system.   -->
<!-- 4. **Install Dependencies**:  
   Run the following command to install the project dependencies:  
   ```bash  
   bun install  
   ```   -->
3. **Start the Application**:  
   Use the following command to start the server:  
   ```bash  
   bun run server.js  
   ```  

4. **Access the Application**:  
   Open your browser and navigate to:  
   ```
   http://localhost:3000
   ```

---

## ✨ Features  

- **Dynamic Routing**: Includes routes for home, about, and API data endpoints.  
- **Template Rendering**: Uses EJS templates for rendering dynamic HTML pages.  
- **Static File Handling**: Serves CSS, JS, images, and other assets from the `public` directory.  
- **Middleware**: Implements request logging into an `access.log` file.  
- **Error Handling**: Custom 404 error page for undefined routes.  
- **Modular Design**: Clean separation of routes and utilities.  

---

## 📂 File Structure  

```
.
├── routes/
│   ├── about.js       # Handler for the /about route
│   ├── apiData.js     # API route returning JSON data
│   ├── home.js        # Handler for the home route
├── views/
│   ├── about.ejs      # About page template
│   ├── index.ejs      # Home page template
│   ├── error.ejs      # Error page template
├── public/
│   ├── css/           # Static CSS files
│   ├── js/            # Static JavaScript files
├── server.js          # Main Bun server script
├── README.md          # Project documentation
└── access.log         # Log file (generated dynamically)
```

---

## 🤝 Contribution  

Feel free to open issues or submit pull requests to improve this sample.

---

## 📝 License  

This project is licensed under the MIT License. See the `LICENSE` file for more details.
