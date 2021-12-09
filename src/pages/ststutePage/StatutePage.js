import '../../App'

import Statute from '../../AditionalFiles/Regulamin.pdf'

function StatutePage() {
    return (
        <div>
            <h1>Statute Page</h1>
            <a href={Statute} download>download</a>
        </div>
    );
}

export default StatutePage;
