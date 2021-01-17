import { useEffect } from 'react';

export const List = ({ langs }) => {

  useEffect(() => {
    return () => {
      
    }
  })

  return (
    <div>
      {
        langs.map((lang, index) => {
        return <div key={index}>{ lang }</div>
        })
      }
    </div>
  )
}