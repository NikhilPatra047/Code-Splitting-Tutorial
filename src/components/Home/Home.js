// import { sum } from '../../sum';
import React, { lazy, useState, useTransition } from 'react';
// import { Admin } from '../Admin/Admin';
const Admin = lazy(() => import('../Admin/Admin').then((module) => {
  return { default: module.Admin };
}));

export default function Home () {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPending, startTransition] = useTransition(); 

  const calcSum = function () {
    import('../../sum').then((module) => {
      module.sum(2, 2);
    });
  };

  const setAdmin = function () {
    startTransition(() => {
      setIsAdmin(!isAdmin);
    });
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={ () => { setAdmin(); calcSum(); } }>Add 2 + 2</button>
      {
        isPending && 'Loading...'
      }
      { isAdmin ? <Admin /> : <h2>Hello World</h2> }
    </>
  );
}