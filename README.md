# Grocery Shop App 

This is a **full-stack Grocery Shop application** using:
- **Frontend:** Angular 16 + Chart.js
- **Backend:** .NET Core (Mock data in JSON)

## 📌 Setup Instructions

### **Clone the Repository**
```sh
git clone https://github.com/KatySpielberg/GroceryShop.git
cd GroceryShop

##  Backend Setup (.NET Core)
Install .NET SDK from https://dotnet.microsoft.com/en-us/download/dotnet/6.0
Verify installation: dotnet --version
Run the Backend Server: cd GroceryShopAPI
dotnet restore  # Install dependencies
dotnet run      # Start the backend server
The API should now be running at: https://localhost:7103/api/shopdata

##  Frontend Setup (Angular 16)
Install Node.js
Download and install Node.js (LTS) from https://nodejs.org/en
Verify installation: node -v
                     npm -v
Install Angular CLI: npm install -g @angular/cli
Install Dependencies: cd ../GroceryShopClient
                      npm install
Run the Angular Application: ng serve                      


