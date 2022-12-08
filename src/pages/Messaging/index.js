import React from 'react'
import { useParams } from "react-router-dom";


export default function Messaging() {
  let params = useParams();
  const { id } = params;
  return (
    <>
    {id ? (
      <div>Messaging page with this {id}</div>
    ) : (
      <div>No id on this Messaging Page</div>
    )}
  </>
  )
}
