import fetch from "node-fetch";

const TASK_API_ENDPOINT = "https://api.todoist.com/rest/v1/tasks";

export async function handler() {
  console.log("todoist-with-aws-lambda-sample-add-todo: START");

  try {
    const response = await fetch(TASK_API_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env["TOKEN"]}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: process.env["TASK_TEXT"],
        project_id: process.env["PROJECT_ID"],
        due_date: process.env["DUE_DATE"],
      }),
    });

    const json = await response.json();
    console.log({ json });
  } catch (err) {
    console.log({ err });
  }

  console.log("todoist-with-aws-lambda-sample-add-todo: FINISH");

  return;
}
