import '../style/AllStyle.css'


export default function ButtonNumber(props){
    return(
        <>
            <button className='button-number'>
                {props.number}
            </button>
        </>
    )
}