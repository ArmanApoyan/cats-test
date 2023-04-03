import style from './Cats.module.css'

const Cats = ({cats}) => {
    return (
        <div className={style.all_cats}>
            {cats.map(el=>{
                return (
                    <div className={style.one_cat} key={el.id}>
                        <img src={el.url} alt={`Cat with id ${el.id}`} loading="lazy"/>
                    </div>
                )
            })}
        </div>
    )
}

export default Cats