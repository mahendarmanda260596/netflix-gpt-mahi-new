# NetFlix GPT
1. Authentication
2. Form Handling
3. Tailwind Css 

# Let' Develop the Project
- using npx create-react-app netfilx-gpt-mahi will provide Folder Structure- Webpack Bundler 
- it will have always jest Testing  
- package.json - have scripts and dependencies

# install & configure the Tailwind Css
- Install Tailwind Css using- npm install -D tailwindcss
                            - npx tailwindcss init 
- configure your template Path add inside tailwind.config.js file 
Module.exports={content:[
    './src/**/*.{js, jsx, ts, tsx}",
],
theme:{
    extend:{},
},
plugins:[]    
}

- Add the Tailwind directive to your css
./src/index.css
@tailwind base;
@tailwind components
@tailwind utilities


- Start your project - npm run start
# Planing Things- Features FIRST CAN DO Building Web site is Very Easy
1. Login / Sign Up 
    - Sign In/ Sign Up 
    -Created Sign In make this use and modify to the Sign Up as well using useState Hook
    -redirect to browse Page 
    
    -- Form Validation inside the Form


    
2. Browse (after authentication)
    -Header
    -Main Movie
        -Tailer In background
        -Title & Description
        - Movie Suggestions
            - movieList * N
            -
3. Folder create like Header, Footer, Body, Article
4. Set Up Routing SPA
    -instal react Router- npm i -D react-router-dom   
    - Routing Configuration With CreateBrowserRouter
    --> Configuration -createBrowserRouter
    --> provide the Router using - RouterProvider
    - Routing Configuration with BrowserRouter
    - differences between CreateBrowserRouter & BrowserRouter   

 --> if your authenticated then move to Browse other wise show log in page   