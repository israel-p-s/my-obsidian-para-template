---
type: Area
area_id: unique-area-id
creation_date: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
last_modified: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
domain: e.g. technology, finance, health
priority: e.g. high, medium, low
---

# <% tp.file.title %>

## Description
Brief description of the area.

## Related Projects
```dataview
LIST FROM "1 - Projects" WHERE area_id = this.id
```
## Related Resources

```dataview
LIST FROM "3 - Resources" WHERE area_id = this.id
```
