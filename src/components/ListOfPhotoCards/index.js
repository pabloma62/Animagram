import React from 'react'

import { useGetPhotos } from '../../hooks/useGetPhotos'
import { PhotoCard } from '../PhotoCard'
import { Loader } from '../Loader/Loader'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId)

  if (loading) return <Loader />
  if (error) return <p>error...</p>

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} id={photo.id} {...photo} />
      ))}
    </ul>

  )
}
