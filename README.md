# Grocery Shop App 

This is a **full-stack Grocery Shop application** using:
- **Frontend:** Angular 16 + Chart.js
- **Backend:** .NET Core (Mock data in JSON)

## 📌 Setup Instructions

### **Clone the Repository**
git clone https://github.com/KatySpielberg/GroceryShop.git
cd GroceryShop

### **Backend Setup (.NET Core)**
1.Install the .NET SDK from Microsoft's official site https://dotnet.microsoft.com/en-us/download/dotnet/6.0.

2.Verify installation:
* dotnet --version

3.Install required NuGet packages:
* cd GroceryShopAPI
* dotnet restore

4.Ensure the following NuGet packages are installed:
**Newtonsoft.Json**
* dotnet add package Newtonsoft.Json
**Swashbuckle.AspNetCore** (for Swagger, optional)
* dotnet add package Swashbuckle.AspNetCore

5.Run the backend server:
* dotnet run

6.The API should now be running at:
* https://localhost:7103/api/shopdata


### **Frontend Setup (Angular 16)
1.Install Node.js (LTS version) from Node.js official website  https://nodejs.org/en 

2.Verify installation: 
* node -v
* npm -v

3.Install Angular CLI globally:
* npm install -g @angular/cli
  
4.Install Dependencies: 
* cd ../GroceryShopClient
* npm install

5.Install Chart.js and ng2-charts:
* npm install chart.js ng2-charts

6.Run the Angular Application: 
* ng serve                      

7.The application should now be available at:
* http://localhost:4200
