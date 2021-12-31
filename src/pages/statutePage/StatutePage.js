import '../../App'
import './StatutePageStyle.css'


//File to download
import Statute from '../../AditionalFiles/Regulamin.pdf'

function StatutePage() {
    return (
        <div>
            <div className="statute-page-wrapper">
                <p>Wynająć można na dzień lub kilka miesięcy</p>
                <p>Podstawiamy samochody w dowolne miejsce, darmowo w obrębie 10km od siedziby, a dalej za opłatą zależną od odległosci</p>
                <p>Podczas wynajmu jesteśmy dostepni pod telefonem przez 24H każdego dnia</p>
                <p>Przed wynajmem pobieramy zwrotną kaucję do czego potrzebna jest karta kredytowa</p>
                <p>W wypadku jakiejś szkody w pierwszej kolejności kontakuj się z nami</p>
                <p>Przede wszsytkim czerp przyjemność z jazdy</p>
                <a href={Statute} download>Regulamin</a>
            </div>
        </div>
    );
}

export default StatutePage;
