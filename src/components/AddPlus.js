import { faPlus, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// AddPlus component
const AddPlus = () => (
    <div>
      <FontAwesomeIcon icon={faPlus} /> Add Song
    </div>
);

const AddImage = () => (
    <div>
      <FontAwesomeIcon icon={faImage} /> Upload Image
    </div>
);

const AddArtist = () => (
    <div>
      <FontAwesomeIcon icon={faPlus} /> Add Artist
    </div>
);

export {AddImage, AddPlus, AddArtist};