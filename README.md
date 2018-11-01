# Serverless Example Project

A simple serverless project structure to build  REST API based app on AWS Lambda, Azure etc using [serverless framework](https://github.com/serverless/serverless)
### Project structure

    ├── src                   # Source files(handlers, triggers ...)
    ├── .serverless           # AWS Cloudformation and lambda functions
    ├── routes.yml            # Project routes
    ├── resources             # Additional YML Files
    ├── tools                 # Tools and utilities
    ├── LICENSE
    └── README.md

### Packages Used

 - serverless-offline
 - serverless-webpack

### Local Testing
```sls deploy --stage <your_stage> ```

### Deploying to API Gateway

``` sls deploy --stage <your_stage>```

Read more about serverless framework [here](https://github.com/serverless/serverless)
