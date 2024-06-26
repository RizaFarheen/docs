---
sidebar_position: 10
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LLM Chat Complete

A system task to complete the chat query. It can be used to instruct the model's behavior accurately to prevent any deviation from the objective.

## Definitions

```json
  {
     "name": "llm_chat_complete",
     "taskReferenceName": "llm_chat_complete_ref",
     "inputParameters": {
       "llmProvider": "openai",
       "model": "gpt-4",
       "instructions": "your-prompt-template",
       "messages": [
         {
           "role": "user",
           "message": "${workflow.input.text}"
         }
       ],
       "temperature": 0.1,
       "topP": 0.2,
       "maxTokens": 4,
       "stopWords": "spam",
       "promptVariables": {
         "text": "${workflow.input.text}",
         "language": "${workflow.input.language}"
       }
     },
     "type": "LLM_CHAT_COMPLETE"
   }
```

## Input Parameters

| Attribute | Description |
| --------- | ----------- |
| llmProvider | Choose the required LLM provider. You can only choose providers to which you have access for at least one model from that provider.<br/><br/>**Note:**If you haven’t configured your AI / LLM provider on your Orkes console, navigate to the **Integrations** tab and configure your required provider. Refer to this doc on [how to integrate the LLM providers with Orkes console and provide access to required groups](https://orkes.io/content/category/integrations/ai-llm). | 
| model | Choose from the available language model for the chosen LLM provider. You can only choose models for which you have access.<br/><br/>For example, If your LLM provider is Azure Open AI & you’ve configured *text-davinci-003* as the language model, you can choose it under this field. |
| instructions | Set the ground rule/instructions for the chat so the model responds to only specific queries and will not deviate from the objective.<br/><br/>Under this field, choose the AI prompt created. You can only use the prompts for which you have access.<br/><br/>**Note:**If you haven’t created an AI prompt for your language model, refer to this documentation on [how to create AI Prompts in Orkes Conductor and provide access to required groups](https://orkes.io/content/reference-docs/ai-tasks/prompt-template). |
| promptVariables | The instructions/prompts can include **_promptVariables_**, allowing for dynamic input. These variables support multiple data types, including string, number, boolean, null, and object/array. |
| messages | Choose the role and messages to complete the chat query.<p align="center"><img src="/content/img/llm-chat-complete-messages.png" alt="Role and messages in LLM Chat complete task" width="50%" height="auto"></img></p><ul><li>Under ‘Role,’ choose the required role for the chat completion. It can take values such as *user*, *assistant*, *system*, or *human*.<ul><li>The roles “user” and “human” represent the user asking questions or initiating the conversation.</li><li>The roles “assistant” and “system” refer to the model responding to the user queries.</li></ul></li><li>Under “Message”, choose the corresponding input to be provided. It can also be [passed as variables](https://orkes.io/content/developer-guides/passing-inputs-to-task-in-conductor). </li></ul> | 
| temperature | A parameter to control the randomness of the model’s output. Higher temperatures, such as 1.0, make the output more random and creative. Whereas a lower value makes the output more deterministic and focused.<br/><br/>Example: If you're using a text blurb as input and want to categorize it based on its content type, opt for a lower temperature setting. Conversely, if you're providing text inputs and intend to generate content like emails or blogs, it's advisable to use a higher temperature setting. |
| stopWords | Provide the stop words to be omitted during the text generation process. It can be string or object/array.<br/><br/>In LLM, stop words may be filtered out or given less importance during the text generation process to ensure that the generated text is coherent and contextually relevant. |
| topP | Another parameter to control the randomness of the model’s output. This parameter defines a probability threshold and then chooses tokens whose cumulative probability exceeds this threshold.<br/><br/>For example: Imagine you want to complete the sentence: “She walked into the room and saw a ______.” Now, the top 4 words the LLM model would consider based on the highest probabilities would be:<ul><li>Cat - 35%</li><li>Dog - 25% </li><li>Book - 15% </li><li>Chair - 10%</li></ul>If you set the top-p parameter to 0.70, the AI will consider tokens until their cumulative probability reaches or exceeds 70%. Here's how it works:<ul><li>Adding "Cat" (35%) to the cumulative probability.</li><li>Adding "Dog" (25%) to the cumulative probability, totaling 60%.</li><li>Adding "Book" (15%) to the cumulative probability, now at 75%.</li></ul>At this point, the cumulative probability is 75%, exceeding the set top-p value of 70%. Therefore, the AI will randomly select one of the tokens from the list of "Cat," "Dog," and "Book" to complete the sentence because these tokens collectively account for approximately 75% of the likelihood. |
| maxTokens<br/><br/>(Referred as **_Token limit_** in UI) | The maximum number of tokens to be generated by the LLM and returned as part of the result. A token should be approximately 4 characters. |
| cacheConfig | Enabling this option allows saving the cache output of the task. On enabling, you can provide the following parameters:<ul><li>ttlInSecond - Provide the time to live in seconds. You can also [pass this parameter as a variable](https://orkes.io/content/developer-guides/passing-inputs-to-task-in-conductor).</li><li>key - Provide the cache key, which is a string with parameter substitution based on the task input. You can also [pass this parameter as a variable](https://orkes.io/content/developer-guides/passing-inputs-to-task-in-conductor).</li></ul> |
| optional | Enabling this option renders the task optional. The workflow continues unaffected by the task's outcome, whether it fails or remains incomplete. | 

## Output Parameters

The task output displays the completed chat by the LLM.

## Examples

<Tabs>
<TabItem value="UI" label="UI" className="paddedContent">

<div className="row">
<div className="col col--4">

<br/>
<br/>

1. Add task type **LLM Chat Complete**.
2. Choose the LLM provider, model & prompt template.
3. Provide the input parameters.

</div>
<div className="col">
<div className="embed-loom-video">

<p><img src="/content/img/llm-chat-complete-ui-method.png" alt="LLM Chat Complete Task" width="500" height="auto"/></p>

</div>
</div>
</div>



</TabItem>
 <TabItem value="JSON" label="JSON">

```json
 {
     "name": "llm_chat_complete",
     "taskReferenceName": "llm_chat_complete_ref",
     "inputParameters": {
       "llmProvider": "openai",
       "model": "gpt-4",
       "instructions": "your-prompt-template",
       "messages": [
         {
           "role": "user",
           "message": "${workflow.input.text}"
         }
       ],
       "temperature": 0.1,
       "topP": 0.2,
       "maxTokens": 4,
       "stopWords": "spam",
       "promptVariables": {
         "text": "${workflow.input.text}",
         "language": "${workflow.input.language}"
       }
     },
     "type": "LLM_CHAT_COMPLETE"
   }
```
</TabItem>
</Tabs>