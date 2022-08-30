export const Message = ({ messageList }) => {
    return (
        <ul>
            {messageList.map((item, idx) => (
                <li key={idx}>
                    {item.author} : {item.text}
                </li>
            ))}
        </ul>
    )
}; 