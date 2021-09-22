import React from "react";

const Editor = ({
  handleImage,
  handleFirstLine,
  handleSecondLine,
  handleExport,
  theme
}) => {
  return (
    <div className="my-2">
      {/* Select Picker (memes) */}
      <select className={`shadow-sm form-select p-1 ${theme.bg} ${theme.text}`} onChange={handleImage}>
        <option value="fire">Burning House</option>
        <option value="futurama">Futurama</option>
        <option value="trollface">Troll Face</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
        <option value="burning">Burning Dog</option>
      </select>

      <div className="row">
        {/* Input Text - First Line */}
        <div className="col-md-6">
          <input
            className={`shadow-sm form-control my-1 p-1 col-md-6 ${theme.bg} ${theme.text}`}
            type="text"
            onChange={handleFirstLine}
            placeholder="First Line"
          />
        </div>
        {/* Input Text - Second Line */}
        <div className="col-md-6">
          <input
            className={`shadow-sm form-control my-1 p-1 col-md-6 ${theme.bg} ${theme.text}`}
            type="text"
            onChange={handleSecondLine}
            placeholder="Second Line"
          />
        </div>
      </div>

      {/* Export Button */}
      <div className="d-grid gap-2">
        <button className={`btn my-1 p-1 btn-warning shadow`} onClick={handleExport}>
        <i className="far fa-file-image"></i> Export
        </button>
      </div>
    </div>
  );
};

export default Editor;
