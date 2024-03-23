const generateItem = (id) => ({
    "links": [
      {
        "rel": "string",
        "href": "string",
        "action": "string",
        "types": ["string"]
      }
    ],
    "id": id.toString(),
    "name": "string",
    "description": "string",
    "trigger": "string",
    "lastExecution": "2023-12-03T01:38:14.556Z",
    "executionsLast30Days": 0,
    "active": true
  });
  
  const mockData = {
    "items": [],
    "itemsCount": 10,
    "page": 1,
    "pageSize": 10,
    "morePages": false
  };
  
  for (let i = 0; i < mockData.itemsCount; i++) {
    mockData.items.push(generateItem(i + 1));
  }
  
  export function fetchWorkflows() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 2000); // 2 seconds delay to mimic API call
    });
  }