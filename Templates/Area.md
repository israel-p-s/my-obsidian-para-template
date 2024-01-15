---
type: Area
tags:
  - tags
creation_date: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
domain: e.g. technology, finance, health
priority: e.g. high, medium, low
description: brief description of the area
---
## Related Projects
```dataviewjs
const currentTags = dv.current().file.tags;
const folderPath = "1 - Projects";

if (currentTags) {
    const pages = dv.pages()
        .where(page => page.file.path.startsWith(folderPath + "/") && 
                       page.file.tags &&
                       page.file.tags.some(tag => currentTags.includes(tag)));

    if (pages.length > 0) {
        pages.forEach(page => {
            const title = page.file.name;
            dv.paragraph(`- [[${page.file.path}|${title}]]`);
        });
    } else {
        dv.paragraph("None projects found.");
    }
} else { 
    dv.paragraph("Tags not added.");
}
```
## Related Resources
```dataviewjs
const currentTags = dv.current().file.tags;
const folderPath = "3 - Resources";

if (currentTags) {
    const pages = dv.pages()
        .where(page => page.file.path.startsWith(folderPath + "/") && 
                       page.file.tags &&
                       page.file.tags.some(tag => currentTags.includes(tag)));

    if (pages.length > 0) {
        pages.forEach(page => {
            const title = page.file.name;
            dv.paragraph(`- [[${page.file.path}|${title}]]`);
        });
    } else {
        dv.paragraph("None resources found.");
    }
} else { 
    dv.paragraph("Tags not added.");
}
```

