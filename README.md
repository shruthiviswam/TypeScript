# TypeScript

TypeScript is a super set of JavaScript, ie, any valid JS code is also valid in TypeScript. TS also has additional features that does not exist in JS.

## Installation :

```
> npm install -g typescript
```

## Check Version :

```
> tsc --version
```

## Execution :

### Step 1 :

Create a folder. Here its 'TypeScript'

### Step 2 :

Create a file named 'main.ts'

### Step 3 :

In main.ts, 
```
function log(message) {
	console.log(message)
	}
	
let message = 'Hello World'
log (message)
```

### Step 4 :

Compile the file. In termimal :
```
>tsc main.ts
```
A new file named 'main.js' appears. This is the JS vesion of main.ts. This file should be executed.

### Step 5 :

Execute the JS file using node.
```
>node main.js
```

'Hello World' is shown in the output.
