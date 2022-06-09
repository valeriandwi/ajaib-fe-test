# Ajaib Web Frontend Personal Project Test

This project was created to show the table of random user datas. The random of user datas is getting from 
[Random User API](https://randomuser.me).

## Built With

- [React](https://reactjs.org)
- [Redux](https://redux.js.org)
- [Axios](https://axios-http.com/docs/intro)
- [Redux-Toolkit](https://redux-toolkit.js.org)     
- [Firebase Hosting](https://firebase.google.com)
- [Ant Design](https://ant.design)

## Getting Started
### Prerequisites
#### Make you sure have installed all of the following prerequisites on your machine :
- Git - [Download & Install Git.](https://git-scm.com/downloads). 
- Node.JS - [Download & Install Node.JS](https://nodejs.org/en/download/)
- NPM - [Download & Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installation
1. Clone the repo <br/>
    ```
        git clone https://github.com/valeriandwi/ajaib-fe-test.git
    ```
2. Move to repo root directory <br/>
    ```
        cd ajaib-fe-test
    ```
3. Install NPM packages, this command is similar to ``npm install``<br/>
    ```
        npm install
    ```
4. Run in development <br/>
    ```
        npm start
    ```
5. Violla, your application is now running on your browser through this link [http://localhost:3000](http://localhost:3000)
6. For production environment you can build it with this command <br/>
    ```
        npm run build
    ```

## Usage
#### Search Random User Datas
You can try to search the random user datas on this application by enter keyword search and clicking or hit "Enter" the Search Button, so the application will re-fetching data from API with additional keyword parameter on the API URL.
```
https://randomuser.me/api/?page=1&pageSize=5&results=10&keyword=test
```

### Filtering Random User Data
Now the application has only features to filter gender. You can try it by select the gender filter in the provided selector. Once is done, the application will re-fetching data from API with additional gender parameter on the API URL. If you want to reset the filtering, just clicking the "Reset Filter" button and the filter will be removed. 
```
    https://randomuser.me/api/?page=1&pageSize=5&results=10&gender=male
```
### Sorting
When you click the header of table, the datas will be sorting by the selected row which the application will be re-fetching data too from API with additional sortBy and sortOrder parameter on the API URL.
```
    https://randomuser.me/api/?page=1&pageSize=5&results=10&gender=male&keyword=test&sortBy=name&sortOrder=ascend
```

### Pagination
To prevent the UI load the big datas, it must provide the pagination on the table. On this application, I have already provided it. While the page of pagination is changed, the application will be re-fetching data from API with additional page, pageSize and results parameter on the API URL.
```
    https://randomuser.me/api/?page=1&pageSize=5&results=10
```

## Support
Reach out the maintainer at one of the following places :
- [Github Profile](https://github.com/valeriandwi)
- valerian.dwi.p@gmail.com