---
type: Project
project_id: unique-project-id
area_id: area-id
creation_date: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
last_modified: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
start_date: YYYY-MM-DD
end_date: YYYY-MM-DD (expected or actual)
status: eg. in progress, pending, blocked, finished
objectives: brief description of project objectives
---

# <% tp.file.title %>

## Description
Brief description of the project.

## Related Resources
```dataview
LIST FROM "3 - Resources" WHERE project_id = this.id
```

