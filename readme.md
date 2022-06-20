 ### WEBPACK-BABEL-SERVER-TRY-PROJECT-APP

![image](./Img/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202022-06-20%20135128.png)

### Hello everyone, welcome to my project. I mentioned babeljs , webpack and json-server before in this project and I made a project as a summary of these 3 topics. The module I just added is webpack-dev-server . This module creates us a server on localhost and we use it.

### Let me explain my project. First of all, my project is divided into 3 javascript modules and it does 4 different tasks.

#### task 1: pull data from json server
#### task 2: add data to json-server
#### task 3: updating the data we want to change
#### task 4 : delete data
#### In short, this is my project.

## Project Start
###  First we open the terminal and type "npm install".Thus, we collect the modules connected to the project under the node_modules folder. You can visit package.json to learn about the connected modules.

### Npm run build together with webpack and babeljs as it collects all javascript files in one javascript file and as a second feature we convert es6 and later javascript syntax to es5 syntax with babeljs so we have two advantages.

#### 1. Advantage : We make our web application faster and more active.
#### 2. Advantage : We make it work in all browsers

```js
npm run build
```


### Prepare data by starting json-server

```js
npx json-server --watch data/employee.json --port 3250
```

### Starting the project as the last step

```js
npm run start
```

### APP-IMAGES AND VIDEOS

![image](./Img/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202022-06-20%20135128.png)

[![Watch the video](./Img/index.js%20-%20webpack-babel-server%20-%20Visual%20Studio%20Code%202022-06-20%2013-12-30.mp4)]
[![Watch the video](./Img/%C3%87al%C4%B1%C5%9Fanlar%20Projesi%20-%20Google%20Chrome%202022-06-20%2013-10-28.mp4)]


