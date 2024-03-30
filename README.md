# TableTS

A simple React component for displaying tabular data.

## Install

```bash
npm install @arnaud.derison/TableTS
```

## Usage

```Javascript
import React from 'react';
import Table from '@arnaud.derison/TableTS';

function Delete(){
  const handleClik = ()=>{
    console:log("click");
  }

  return (
    <Button onClick={()=>handleClik()}>Delete</Button>
    );
}

const title = ['Name', 'Age', 'City'];
const data = [
  ['John Doe', 'New York', <Delete />],
  ['Jane Smith', 'London', <Delete />],
  ['Bob Johnson', 'Paris', <Delete />],
];

function MyComponent() {
  return (
    <Table title={title} data={data} />
  );
}
```
