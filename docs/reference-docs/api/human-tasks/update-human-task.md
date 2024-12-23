---
sidebar_position: 9
slug: "/reference-docs/api/human-tasks/update-human-task"
description: "This API is used to update a claimed Human task."
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# Update Human Task

Used for updating a claimed task. Optionally this cane be used to complete the task.

:::note 
The invoking user should be a task owner, an ADMIN, or a claimant to the task. 
:::

## Input Payload

| Attribute    | Description                                                                                                         |
|--------------|---------------------------------------------------------------------------------------------------------------------| 
| taskId       | The *taskId* of the human task to be updated.                                                           | 
| complete     | Boolean to mark if the task is complete or not, send this as false for just updating data, and keep the task in progress. Set this is true to complete the task. | 
| Request Body | Output of the human task work - usually the payload of the human task form entries.                                | 

## API Endpoint

```
POST human/tasks/{taskId}/update
```