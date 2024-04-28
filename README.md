# Splinterlands site in Vue
This solution requires a Fontawesome pro license.  

## Features
 * .NET 6 host
 * Content compression using gzip or brotli 
 * Static content caching with custom scheme for assets while not caching html content for passing http://webpagetest.org/ 
 * Strict resource content policy
 * Response caching
 * webpack5
 * babel7
 * bootstrap 4 via cdn


## Building
To build the solution you must build the C# solution and the vue client.  
* C# can be built through visual studio or from the command line with dotnet build --configuration Release
* Vue client from the command line/terminal in the project directory run:
		> npm install
		> npm run dev or npm run build   (development in watch mode/prod build)

* C# Build tested in Visual Studio 2022
* Vue build tested with node.js 13.12.0
