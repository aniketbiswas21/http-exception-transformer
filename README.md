# NodeJS Http Exception Handler

Always wanted to ensure that your express application to have extensive error handling and expose a structured and reliable API at the same time? This package is written to ensure the same.

## **Features**
- Exceptions for commonly encountered problems like NotFound (404), Internal Server Error (500), Conflicts (409), [...more being added]
- **Just throw errors.** No need to wrap codebase into try catch blocks and make codebase redundant.
- CLean and Easy to use API.

## Simple Usage

To add the package to your application, use
```
yarn -> yarn add http-exception-transformer
npm -> npm install http-exception-transformer
```
Now in your express.js application, to trigger an exception, **throw the error anywhere**. This even works when you are calling functions (often called controllers) from the routes handler and throwing exceptions in those functions.

```js
import { HttpExceptionTransformer } from 'http-exception-transformer'
import { BadRequestException } from 'http-exception-transformer/exceptions'

app.get("/id",(req, res)=>{
    if(req.params.id == 0){
        throw new BadRequestException("Only +ve ids accepted")
    }
})
```

Now add this line when you have attached all the route handlers. Notice that it is very important to place these **after adding all routes** as hierarchy in which express.js propagates errors. 
```js
app.use(HttpExceptionTransformer)
```

Now the exceptions will return a response like these
```json
{
  "code": 400,
  "error": true,
  "message": "Only +ve ids accepted",
  "reference":"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400"
}
```
## Usage with user defined callback

```js
import { HttpExceptionTransformer } from 'http-exception-transformer'
import { BadRequestException } from 'http-exception-transformer/exceptions'

app.get("/id",(req, res)=>{
    if(req.params.id == 0){
        throw new BadRequestException("Only +ve ids accepted", {}, () => {
            console.log("This function will run after the error is thrown");
        })
    }
})
```
Optionally, you can configure the error handler to run a **callback function** that runs after the error is thrown. 

Now the exceptions will return a response like these
```json
{
  "code": 400,
  "error": true,
  "message": "Only +ve ids accepted",
  "reference":"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400",
  "payload": {},
}
```
And, will also run the function that you defined earlier.

**Note**: In order to pass in a function, it is **mandatory** to pass a payload along with it. If you don't want to pass in any payload, simply pass `{}` as the payload.

## API Reference
The middleware and exceptions are designed to give user the flexibility to send data alongwith exceptions, and also the option to set a custom error message if required.

The signature of the exception is the following. 
- the message is **optional** : if the message is not supplied, then the error message corresponding to the code is automatically shared.
- the payload is **optional** : just in case you want to send data alongwith the exceptions, simply pass the data to be shared.
- the callback is **optional** : if you want to run a function, simply pass your function to be executed. Defaults to `() => null`.

```js
SomeException(message?: string, payload?: any, callback: () => void = () => null) {}
```

The following are completely valid implementations

```js

app.get(......, ()=>{
    if(...){
        throw new NotFoundException();
    }else if(...){
        throw new BadRequestException("Invalid DATA format !")
    }else {
        throw new UnAuthorizedException("Not allowed !", {userID: 101})
    }
})

```

## Development
Since the codebase is redundant, and almost all derived classes have the same structure, we're geneating the exceptions from a json file. Therefore if you wish to make changes in the exception body, please change the codebase in the generators directory. 

The data source has the following structure. Feel free to send PRs for adding support for more exception types.
```js
[
    {
      code: 400,
      name: 'BadRequestException',
      message: 'The server could not understand the request due to invalid syntax.',
      reference: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400',
    },
    {
      code: 401,
      name: 'UnAuthorizedException',
      message: 'The client must authenticate itself to get the requested response.',
      reference: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401',
    },
    {
      code: 404,
      name: 'NotFoundException',
      message: 'The server can not find the requested resource',
      reference: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404',
    }
]
```
