import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function PrivateRoute(props) {
    const navigate = useNavigate();
    let Cmp = props.Cmp
    useEffect(() => {
        if(!localStorage.getItem('user'))
        {
          navigate('/login')
        }
      })
  return (
    <div>
        <Cmp />
    </div>
  )
}
