export default function LeftPane({result}){
    return(
        <div className="left">
            <h3> Result</h3>
            <p className={result.toLowerCase()}>{result}</p>
        </div>
    )
}