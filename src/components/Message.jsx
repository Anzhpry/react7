import style from './Message.module.scss'

export const Message = ({ messageText }) => {

    return (<>
        <p className={style.message}>{messageText}</p>
    </>
    )
}