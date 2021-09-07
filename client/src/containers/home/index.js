import React, {useEffect} from 'react'; // , { useEffect }
import Cards from '../../components/Cards/Cards';
import NavBar from '../../components/NavBar/NavBar';
import HomeStyle from './home.module.css';
import { useDispatch } from 'react-redux';
import { getAll } from '../../redux/actions';



export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll()); // pre carga de todos los paises para mostrarlos de 1
  }, [dispatch]);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className={HomeStyle.cards}>
        <Cards />
      </div>
    </div>
  );
}
