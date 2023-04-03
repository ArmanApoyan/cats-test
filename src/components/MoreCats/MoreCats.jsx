import style from './MoreCats.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../store/action';

const MoreCats = () => {
    const dispatch = useDispatch()
    let {page} = useSelector(state=>state)
    const handleClick = () => {
        //change page in store when clicking on more cats
        dispatch(setPage(++page))
    }
    return (
        <div className={style.more_cats_container}>
            <p onClick={()=>handleClick()}>More Cats</p>
        </div>
    )
}

export default MoreCats