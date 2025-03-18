# AWS Bedrock AI Lambda Serverless Next.js

This repo builds and deploys a fullstack AWS environment with Next.js on the frontend.

## Technology Stack

- **Frontend:**

  - Next.js (App Router) - https://nextjs.org
  - React - https://react.dev
  - TypeScript - https://www.typescriptlang.org
  - Shadcn UI - https://ui.shadcn.com
  - Radix UI - https://www.radix-ui.com
  - Radix Icons - https://www.radix-ui.com/icons
  - Tailwind CSS - https://tailwindcss.com
  - ...

- **Backend:**

  - AWS Cloud Development Kit (CDK) with Typescript - https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html
  - AWS Bedrock AI Models - https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html
  - AWS CloudFormation - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
  - AWS CloudWatch - https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html
  - AWS Certificate Manager (ACM) - https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html
  - AWS Route 53 - https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html
  - AWS CloudFront CDN -
  - AWS CLI - https://docs.aws.amazon.com/cli/ | https://awscli.amazonaws.com/v2/documentation/api/latest/reference/index.html
  - ...

## First, you will need to boostrap your AWS environment

**How AWS Describes Bootstrapping:**

ref: https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html#bootstrapping-what

> Bootstrapping prepares your AWS environment by provisioning specific AWS resources in your environment that are used by the AWS CDK. These resources are commonly referred to as your bootstrap resources. They include the following:

> Amazon Simple Storage Service (Amazon S3) bucket – Used to store your CDK project files, such as AWS Lambda function code and assets.

> Amazon Elastic Container Registry (Amazon ECR) repository – Used primarily to store Docker images.

> AWS Identity and Access Management (IAM) roles – Configured to grant permissions needed by the AWS CDK to perform deployments. For more information about the IAM roles created during bootstrapping, see IAM roles created during bootstrapping.

## Bootstrap AWS CDK

I prefer AWS CDK over ([AWS Amplify](https://aws.amazon.com/amplify/)). AWS Amplify will allow you to setup your environment quicker by abstacting way some of the underlying AWS Infrastructure and Services. Pick either option you're most comfortable with as getting started is what counts. 😊

In order use AWS CDK in an AWS Region you have to bootstrap your account in that region. This initializes CloudFormation for `us-east-1`. NOTE: If you plan to deploy your application to the Internet via Route 53 to your own website (www.example.com), you will need to deploy your application in the `us-east-1` Region.

Get your AWS account number (copy the `Account` number with no quotes):

```bash
aws sts get-caller-identity --query Account --output text
```

Get your AWS region:

```bash
aws configure get region
```

Bootstrap and provision your CloudFormation ennvironment. NOTE: If you plan to deploy your application to the Internet via Route 53 to your own website (www.example.com), you will need to deploy your application in the `us-east-1` Region.

```bash
cdk bootstrap aws://[***aws-acct***]/us-east-1
```
