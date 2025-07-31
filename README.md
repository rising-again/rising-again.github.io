## Instructions on how to add data
- [File Locations](#where-editing-files-are-located)
- [Adding Information](#how-to-edit-the-file)
- [Adding Articles](#adding-articles)

### Where editing files are located
Go to the following file (src/data/manifest.json)

<img width="1834" height="990" alt="image" src="https://github.com/user-attachments/assets/b52057fe-dcd6-4a04-b07c-d3e1356415fa" />
<img width="3166" height="760" alt="image" src="https://github.com/user-attachments/assets/e049ad78-4f06-4456-be73-b206c563e20e" />
<img width="1580" height="178" alt="Screenshot 2025-07-30 at 10 18 38 PM" src="https://github.com/user-attachments/assets/845f8b78-1c54-4e58-8e66-600d9200c97c" />


### How to edit the file
The format for the data inside of the file is very important (the indents don't matter but the punctuation and symbols is important).

All information is contained with brackets (`[ ]`). Each distinct entry is contained within braces (`{ }`) and separated by commas (`,`).
Within the braces, we add relevant information.

Here is an example of an empty file:
```json
[
  {
    "title":"",
    "description":"",
    "topic": "housing",
    "contact": {
      "phone": "",
      "email": "",
      "location": "",
    },
    "truths": [],
    "myths": [],
    "article": ""
  }
]
```

Here is what each field within the braces represents (all text items must be placed within qutoations, `"sample text"`)
- `"title"`: The title for the service (usually the company/organization providing support or specific service offered).
- `"description"`: A short description of the service offered.
- `"topic"`: The specific topic this service helps with. The currently supported topics are: `housing`, `food`, `healthcare`, `employment`, `financial`, `other`.
- `"contact"`: Braces supporting with fields for multiple contact options.
- `"truths"`: Brackets containing a comma separated list of truths about the specific service in question.
- `"myths"`: Brackets containing a comma separated list of myths about the specific service in question.
- `"article"`: Text pointing to the specific path with detailed information about the service. The article should be placed within the following folder `src/data/articles/` (more info below).

Note that comma at the end of each field is very important.

Here is a file with some valid sample data:
```json
[
  {
    "title": "Veterans Housing Assistance Program",
    "description": "Comprehensive support and resources to help veterans secure stable, affordable housing with access to specialized programs and benefits.",
    "audience": ["veteran", "senior"],
    "topic": "housing",
    "contact": {
      "phone": "1-800-827-1000",
      "email": "housing@va.gov",
      "location": "810 Vermont Ave NW, Washington, DC 20420"
    },
    "truths": [
      "Veterans are entitled to VA housing benefits regardless of income level",
      "Housing vouchers can be used nationwide in participating properties",
      "Emergency housing assistance is available 24/7 for homeless veterans"
    ],
    "myths": [
      "You must be unemployed to qualify for housing assistance programs",
      "VA housing loans are only available for first-time homebuyers",
      "Housing vouchers expire after one year and cannot be renewed"
    ],
    "article": "src/data/articles/veterans_housing_guide.txt"
  },
  {
    "title": "Emergency Food Bank Network",
    "description": "Access to fresh groceries, prepared meals, and nutrition assistance programs for individuals and families facing food insecurity.",
    "audience": ["veteran", "senior", "other"],
    "topic": "food",
    "contact": {
      "phone": "1-555-FOOD-HELP",
      "email": "help@foodbank.org",
      "location": "123 Community Drive, Your City, ST 12345"
    },
    "truths": [
      "Food assistance is available regardless of immigration status",
      "SNAP benefits can be used at farmers markets",
      "Emergency food boxes are available within 24 hours"
    ],
    "myths": [
      "You must have children to qualify for food assistance",
      "Food banks are only for homeless people",
      "SNAP benefits can only be used for basic groceries"
    ],
    "article": "src/data/articles/food_assistance_guide.txt"
  }
]
```

### Adding Articles
To add articles, got the folder where the `manifest.json` file is located (see above) and select the `articles` folder. 

From there, create a new file:
<img width="3184" height="512" alt="image" src="https://github.com/user-attachments/assets/6b7aabcb-c651-41a0-9daf-80f30074d358" />

Give your file a name and then add any information you want to the file.

Then save the file:
<img width="3178" height="238" alt="image" src="https://github.com/user-attachments/assets/4d06a0c1-798c-45a1-b32c-75f8d699f690" />


<img width="1106" height="1038" alt="image" src="https://github.com/user-attachments/assets/5902f1cc-a257-4aa9-bb3a-6dfb124eee36" />


To make the contents of the file visible on the website, go to edit the `"article"` section for your specific topic with the following `"src/data/articles/<your_file_name>"` (replace `<your_file_name>` with the name of the file you just created)
