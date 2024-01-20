const jsonData = {
    "employees": [
      { "firstName": "John", "lastName": "Doe" },
      { "firstName": "Anna", "lastName": "Smith" },
      { "firstName": "Peter", "lastName": "Jones" }
    ]
  };
  
  console.log(JSON.stringify(jsonData, null, 2));
  