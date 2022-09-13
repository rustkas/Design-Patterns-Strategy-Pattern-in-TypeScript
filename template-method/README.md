# Template Method Pattern

[The article](https://javascript.plainenglish.io/design-patterns-template-method-pattern-in-typescript-ce0c8b158985)

Add package for CSV parsing: `npm install --save-dev d3-dsv`.
Add package for executing TypeScript file: `npm install --save-dev esno`.

Use `esno` to execute the parse-cvs.ts file: `npx esno src/parse-csv.ts`.

Add package for Markdown parsing: `npm install --save-dev marked`.

Use `esno` to execute the parse-md.ts file: `npx esno src/parse-md.ts`.


```
>nm run start
[
  { id: '1', Name: 'Bytefer' },
  { id: '2', Name: 'Kakuqo' },
  columns: [ 'id', 'Name' ]
]
<h3 id="users">Users</h3>
<ul>
<li>Bytefer</li>
<li>Kakuqo</li>
</ul>

```



![UML Diagram](https://miro.medium.com/max/700/1*r92a_dkhPOtN5WC6hqnWjg.png)
