---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'

# HTTP Poll 

The HTTP_POLL is a conductor task used to invoke HTTP API until the specified condition matches.

## Definitions
```json
    {
      "name": "http_poll_task",
      "taskReferenceName": "http_poll_task_ref",
      "type": "HTTP_POLL",
      "inputParameters": {
        "http_request": {
          "uri": "https://orkes-api-tester.orkesconductor.com/get",
          "method": "GET",
          "connectionTimeOut": 3000,
          "readTimeOut": 3000,
          "accept": "application/json",
          "contentType": "application/json",
          "terminationCondition": "1",
          "pollingInterval": "60",
          "pollingStrategy": "FIXED"
        }
      }
    }
```

### Input Parameters
| Attribute         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| terminationCondition | Specifies the condition to be evaluated after every HTTP API invocation. If the condition is evaluated as **true**, the task will be marked as completed. On the other hand, if the condition is evaluated as **false**, the conductor will schedule the next poll according to the configurations (pollingInterval & pollingStrategy). By default, this value is set to `true`.<br/>                                   **Note**: While writing the termination condition, <ul><li>It can be [parameterized](/content/developer-guides/passing-inputs-to-task-in-conductor).</li><li> In order to use the current http poll as input to the condition, a `$` needs to be prefixed. For example, **$.output.status**</li></ul> |
| pollingInterval   | Specify the time duration in seconds between each HTTP invocation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| pollingStrategy   | It can take any of the following values: <ul><li>**FIXED** - The duration between each HTTP API invocation will be fixed.</li><li> **LINEAR_BACKOFF** - The duration between each HTTP API invocation will be calculated by multiplying the poll count with pollingInterval. Note that the poll count is the incremental value based on each invocation.</li><li>**EXPONENTIAL_BACKOFF** - The duration between each HTTP API invocation will be calculated by multiplying poll count with 2 base exponential of pollingInterval.</li></ul>                                                                                                                                                                      |

Apart from the above parameters, ensure that the following basic parameters for an HTTP task are also provided.

<br/>

| Attribute         | Description                                                                                                                                                                 |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| uri               | Provide the Uniform Resource Identifier (URI) for the service. It can be partial when using vipAddress or else it indicates the server address.                             |
| method            | Indicates the required action to be performed on the source. It can be GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS or TRACE.                                               |
| accept            | Provide the accept header as required by the server. By default, it is set to **application/json**.                                                                         |
| contentType       | Provide the content type for the server. The supported types are text/plain, text/html, and application/json. By default, it is set to **application/json**.                |
| headers           | Indicate a map of additional http headers to be sent along with the request.                                                                                                |
| body              | Indicates the request body.                                                                                                                                                 |
| asyncComplete     | If set, the task remains in the IN_PROGRESS state even after the execution. An external event (Task Update API or Event handler) is expected to mark the task as completed. |
| connectionTimeOut | Set the connection timeout in milliseconds.  If set to 0, it is equivalent to infinity. By default, the value is set to 100.                                                |
| readTimeOut       | Set the read timeout in milliseconds.  If set to 0, it is equivalent to infinity. By default, the value is set to 150.                                                      |
| encode | Determines whether the URI needs encoding. When set to true (the default), the Conductor will automatically encode the query parameters before sending the HTTP request.<br/><br/>Set this to false if the URI is already encoded. In this case, the Conductor will assume the query parameters are properly encoded and pass them to the HTTP endpoint as specified in the URI. |
| cacheConfig | Enabling this option allows saving the cache output of the task. On enabling you can provide the following parameters:<ul><li>**TTL (in seconds)** - Provide the time to live in seconds.You can also pass this parameter as variables.</li><li>**Cache Key** - Provide the cache key, which is a string with parameter substitution based on the task input. You can also pass this parameter as variables.</li></ul>|

### Output Parameters
| Attribute    | Description                                                                  |
|--------------|------------------------------------------------------------------------------|
| response     | JSON body containing the response if present.                                |
| headers      | Response Headers.                                                            |
| statusCode   | [HTTP Status Code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). |
| reasonPhrase | HTTP Status Code's reason phrase.                                            |

## Examples

<Tabs>
<TabItem value="UI" label="UI" className="paddedContent">

<div className="row">
<div className="col col--4">

<br/>
<br/>

1. Add task type `HTTP Poll`.
2. Configure the Polling endpoint.
3. Configure the interval.

</div>
<div className="col">
<div className="embed-loom-video">

<p><img src="/content/img/ui-guide-http-poll-task.png" alt="Adding HTTP Poll Task" width="500" height="auto"/></p>

</div>
</div>
</div>



</TabItem>
 <TabItem value="JSON" label="JSON">

```json
    {
      "name": "http_poll_task",
      "taskReferenceName": "http_poll_task_ref_1",
      "type": "HTTP_POLL",
      "inputParameters": {
        "http_request": {
          "uri": "https://orkes-api-tester.orkesconductor.com/api",
          "method": "POST",
          "connectionTimeOut": "3000",
          "readTimeOut": "3000",
          "accept": "application/json",
          "contentType": "application/json",
          "terminationCondition": "(function () {\n  return $.output.body.length > 10;\n})();",
          "pollingInterval": "60",
          "pollingStrategy": "FIXED",
          "body": "${workflow.input.payload}"
        }
      }
    }
```

</TabItem>
</Tabs>


<details><summary>Sample Workflow</summary>
<p>

Let’s see an example workflow:

```json
    {
      "name": "your_workflow_name",
      "description": "Sample workflow to get started with HTTP POLL task.",
      "tasks": [
        {
          "name": "example",
          "taskReferenceName": "example",
          "inputParameters": {
            "http_request": {
              "uri": "https://jsonplaceholder.typicode.com/posts/1",
              "method": "GET",
              "terminationCondition": "$.output.body.length > 10 ? true : false;",
              "pollingInterval": "60",
              "pollingStrategy": "FIXED"
            }
          },
          "type": "HTTP_POLL"
        }
      ]
    }
```

So, here the input parameters for the HTTP_POLL task are defined as follows:
```json
      "terminationCondition": "$.output.body.length > 10 ? true : false;",
      "pollingInterval": "60",
      "pollingStrategy": "FIXED"
```

The above configuration defines that the Conductor will invoke the HTTP API every 60 seconds until the jsonplaceholder gives the output that is longer than 10 characters.
<br/>

:::note

Current invocation output can be referred to using <b>$.output</b>. Similarly, previous tasks' output can also be referred to using **$.task_ref_name.output**.
:::

</p>
</details>