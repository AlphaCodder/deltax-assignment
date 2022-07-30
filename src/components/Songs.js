import '../App.css';
import StarRating from './StarRating';

// Songs table fetching data from API
function SongHead (){
    return(
    <thead>
        <tr className="col">
            <th>Artwork</th>
            <th>Song</th>
            <th>Date of Release</th>
            <th>Artists</th>
            <th>Rate</th>
        </tr>
    </thead>
    );
}

function SongElement (){
    return(
    <tr class='col'>
        <td><img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" className='img-thumbnail'></img></td>
        <td>Song 1</td>
        <td>01/01/2020</td>
        <td>Artist 1</td>
        <td>
            <div className="rating">
                <StarRating />
            </div>
        </td>
    </tr>
    );
}

function Songs() {
    return(
        <table className='table table-bordered'>
            <SongHead />
            <tbody>
                <SongElement />
            </tbody>
        </table>
    );
}

export default Songs;