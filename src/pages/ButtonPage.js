
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Button from '../component/Button';

function ButtonPage() {
    //not udpated but may be now update ?
    const handleClick=()=>{
        
    }
    return <div>
        <div>
            <Button
                secondary outline rounded
                className="mb-2"
                onClick={handleClick}
                onMouseMove={handleClick}
            >
                <GoBell />Click Me
            </Button>
        </div>
        <div>
            <Button danger >
                <GoCloudDownload />
                Buy Now </Button>
        </div>
        <div>
            <Button warning> <GoDatabase /> See Deal </Button>
        </div>
        <div>
            <Button secondary>Hide Ads </Button>
        </div>
        <div>
            <Button primary>Something </Button>
        </div>
    </div>
}
export default ButtonPage;
