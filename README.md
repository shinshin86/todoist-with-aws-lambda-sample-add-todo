# todoist-with-aws-lambda-sample-add-todo

## Build

Make `zip` file.

```sh
yarn build
```

Upload the generated zip file to AWS lambda.

## Environment Variables

- `TOKEN` - Your todoist API token
- `TASK_TEXT` - Task text
- `PROJECT_ID` - Specify project ID
- `DUE_DATE` - Specify the due date of the task( `2022-01-01` )
