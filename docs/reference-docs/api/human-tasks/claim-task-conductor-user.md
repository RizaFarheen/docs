---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Claim Task (Conductor User)

Used to claim a human task by an authenticated Conductor user. Use this API to claim a task for a user with Conductor identity.

:::note
The invoking user should be a task owner, an ADMIN, or a CONDUCTOR_USER or CONDUCTOR_GROUP assignee to the task. If the task is not assigned to anyone/group, any Conductor user will be able to retrieve the task. 
:::

## Input Payload

| Attribute  | Description                                                |
|------------|------------------------------------------------------------| 
| taskId     | The *taskId* of the human task to be claimed. | 

## API Endpoint 

```
POST human/tasks/{taskId}/claim
```

## Client SDK Methods

<Tabs>
<TabItem value="Java" label="Java">

```java
TODO: Coming soon to the SDKs
```

</TabItem>
<TabItem value="Go" label="Go">

```go
TODO: Coming soon to the SDKs
```

</TabItem>
<TabItem value="Python" label="Python">

```python
TODO: Coming soon to the SDKs
```

</TabItem>
<TabItem value="CSharp" label="CSharp">

```csharp
TODO: Coming soon to the SDKs
```

</TabItem>
<TabItem value="Javascript" label="Javascript">

```javascript
HumanExecutor.claimTaskAsConductorUser(taskId: string);
```

</TabItem>
<TabItem value="Typescript" label="Typescript">

```typescript
HumanExecutor.claimTaskAsConductorUser(taskId: string);
```

</TabItem>
<TabItem value="Clojure" label="Clojure">

```clojure
TODO: Coming soon to the SDKs
```

</TabItem>
</Tabs>
