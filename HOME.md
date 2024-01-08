# My Dashboard

Welcome to my Dashboard. Here you will find quick and organized access to all my Projects, Areas, Resources, and Archive.

- [📌 Actions](#%F0%9F%93%8C%20Actions)
- [🧠 Areas](#%F0%9F%A7%A0%20Areas)
- [📄 Projects](#%F0%9F%93%84%20Projects)
- [📚 Resources](#%F0%9F%93%9A%20Resources)
- [🗑️ Archive](#%F0%9F%97%91%EF%B8%8F%20Archive)

## 📌 Actions
```button 
name TODAY'S NOTE 
type link 
action obsidian://advanced-uri?vault=Second%20Brain&daily=true 
color red
```
  ```button 
name +NEW 🧠 Area 
type link 
action obsidian://advanced-uri?vault=Second%20Brain&filepath=2%20-%20Areas/Untitled.md&mode=new 
color green
```
  ```button 
name +NEW 📄 Project 
type link 
action obsidian://advanced-uri?vault=Second%20Brain&filepath=1%20-%20Projects/Untitled.md&mode=new 
color green
```
  ```button 
name +NEW 📚 Resource 
type link 
action obsidian://advanced-uri?vault=Second%20Brain&filepath=3%20-%20Resources/Untitled.md&mode=new 
color green
```

## 🧠 Areas
```dataview
TABLE area_principal, description 
FROM "2 - Areas" 
SORT file.mtime desc 
LIMIT 10
```

## 📄 Projects
```dataview 
table start_date, end_date, status from "1 - Projects"
SORT file.mtime desc
LIMIT 10
```

## 📚 Resources 
```dataview
list from "3 - Resources"
SORT file.mtime desc
LIMIT 25
```

## 🗑️ Archive
```dataview
list from "4 - Archive"
SORT file.mtime desc
LIMIT 5
```