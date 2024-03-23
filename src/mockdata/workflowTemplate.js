
const workflowTemplateData = {
    "createdAt": "2023-11-21T23:55:18.768Z",
    "updatedAt": "2023-12-04T18:38:16.276Z",
    "id": "3L3lqQUSwXyvP0W2",
    "name": "test workflow 222",
    "active": false,
    "nodes": [
        {
            "parameters": {},
            "id": "7390c012-eda1-4208-92cf-050e4865ba16",
            "name": "When clicking \"Execute Workflow\"",
            "type": "n8n-nodes-base.manualTrigger",
            "typeVersion": 1,
            "position": [
                800,
                380
            ]
        },
        {
            "parameters": {
                "from": "+18333772230",
                "to": "+526691636851",
                "message": "Hello there",
                "additionalFields": {}
            },
            "id": "2a988dcd-1b8c-4470-bcb8-250191bf53e9",
            "name": "Vonage",
            "type": "n8n-nodes-base.vonage",
            "typeVersion": 1,
            "position": [
                1020,
                380
            ],
            "credentials": {
                "vonageApi": {
                    "id": "3xKOgR6ChtlKhvqc",
                    "name": "Vonage account"
                }
            }
        },
        {
            "parameters": {
                "toRecipients": "rmartinez@patientnow.com",
                "subject": "Test",
                "bodyContent": "Hello there",
                "additionalFields": {}
            },
            "id": "b4c80347-d471-455a-bb17-b7ba32cfa77c",
            "name": "Microsoft Outlook",
            "type": "n8n-nodes-base.microsoftOutlook",
            "typeVersion": 2,
            "position": [
                1240,
                380
            ],
            "credentials": {
                "microsoftOutlookOAuth2Api": {
                    "id": "CKfB5qncLj6WmVa8",
                    "name": "Microsoft Outlook account"
                }
            }
        }
    ],
    "connections": {
        "When clicking \"Execute Workflow\"": {
            "main": [
                [
                    {
                        "node": "Vonage",
                        "type": "main",
                        "index": 0
                    }
                ]
            ]
        },
        "Vonage": {
            "main": [
                [
                    {
                        "node": "Microsoft Outlook",
                        "type": "main",
                        "index": 0
                    }
                ]
            ]
        }
    },
    "settings": {},
    "staticData": null,
    "meta": null,
    "pinData": null,
    "versionId": "7903a551-894d-4cf4-b884-6782c9c92def",
    "triggerCount": 0
}


export function fetchWorkflowTemplate() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(workflowTemplateData);
      }, 2000); // 2 seconds delay to mimic API call
    });
  }

export default fetchWorkflowTemplate



