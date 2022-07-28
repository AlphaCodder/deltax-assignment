import '../App.css';
// import StarRating from './StarRating';

function ArtitstsHead (){
    return(
    <thead>
        <tr className="col">
            <th>Artists</th>
            <th>Date Of Birth</th>
            <th>Songs</th>
        </tr>
    </thead>
    );
}

function ArtistsElement (){
    return(
    <tr class='col'>
        <td>Artist 1</td>
        <td>01/01/2020</td>
        <td>Song 1</td>
    </tr>
    );
}



function Artists() {
    return(
        <table className='table table-bordered'>
            <ArtitstsHead />
            <tbody>
                <ArtistsElement />
            </tbody>
        </table>
    );
}

export default Artists;