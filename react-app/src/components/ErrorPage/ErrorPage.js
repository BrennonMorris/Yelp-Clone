import squeezer from '../../icons/squeezer.png'
import './ErrorPage.css'
import broken from '../../icons/broken.png';

function ErrorPage() {
    return (
        <div id='error-page'>
            <img id='squeezer' src={squeezer} alt='squeezer' width='300px' onError={e => e.target.src=broken} />
            <div id='error-text'>
                <h2 id='cooking'>This page is still being cooked up.</h2>
                <h4 id='apologies'>We apologize for the inconvenience.</h4>
            </div>
        </div>
    )
}

export default ErrorPage
