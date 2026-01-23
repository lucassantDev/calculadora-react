import './ButtonNumber'
import '../style/index.css'

export default function ResultDiv(props){
    return(
        <>
            <div className="div-result">
                <ButtonNumber number={0}/>
                <ButtonNumber number={1}/>
                <ButtonNumber number={2}/>
                <ButtonNumber number={3}/>
                <ButtonNumber number={4}/>
                <ButtonNumber number={5}/>
                <ButtonNumber number={6}/>
                <ButtonNumber number={7}/>
                <ButtonNumber number={8}/>
                <ButtonNumber number={9}/>
            </div>
        </>
    )
}