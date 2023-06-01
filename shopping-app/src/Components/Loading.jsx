import React from 'react'
import './Style.css';
import loading from "../Assets/loading.gif"

export default function Loading() {
  return (
    <div className="isLoading">
        <img src={loading} alt='loading' className="loadimage"></img>
        <h2>Loading</h2>

    </div>
  )
}
