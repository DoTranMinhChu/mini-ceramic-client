import ReactLoading from 'react-loading';

export default function Loader() {
    return (
        <div style={{width:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>
            <ReactLoading type="bubbles" color="#000" />
        </div>
    )

}