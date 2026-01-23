import '../style/AllStyle.css'

export default function ButtonOperation(props){
    return(
        <>
            <button className="button-operator">
                {props.operator}
            </button>
        </>
    )
}