import React from 'react'

export default function Course(props) {
    const { curso } = props
    console.log('curso', curso)
  return (
    <div>
        <h1> {curso.titulo}</h1>
        <img src={curso.imagen} ></img>
        {
                curso.videos.map(video => {
                    return <p> {video.titulo}</p>
                })
            }
    </div>
  )
}
