import "../vc-css/folder-files.css";

function FolderFiles() {
  return (
    <>
      <div className="folder-separataion">
        <ul>
          <li>All</li>
          <li>My Docs</li>
          <li>Favorite</li>
          <li>Bookmark</li>
          <li>Share</li>
        </ul>
        <div className="folder-border-line"></div>
      </div>

      <div className="fixed-li-div">
        <div className="fixed-li">
          <ul>
            <li>Name</li>
            <li>Location</li>
            <li>Date viewed</li>
          </ul>
          <div className="folder-border-line"></div>
        </div>
      </div>

      <div className="file-list-div">
        <div className="file-list">
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>College project</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FolderFiles;
