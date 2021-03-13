import { useState } from "react";
import "./App.css";

function App() {
  const [elements, setElements] = useState([
    {
      id: 1,
      name: "<a>",
      text: "a",
      display: false,
    },
    {
      id: 2,
      name: "<article>",
      text: "article",
      display: false,
    },
    {
      id: 3,
      name: "<aside>",
      text: "aside",
      display: false,
    },
    {
      id: 4,
      name: "<body>",
      text: "body",
      display: false,
    },
    {
      id: 5,
      name: "<button>",
      text: "button",
      display: false,
    },
    {
      id: 6,
      name: "<div>",
      text: "div",
      display: false,
    },
    {
      id: 7,
      name: "<em>",
      text: "em",
      display: false,
    },
    {
      id: 8,
      name: "<figure>",
      text: "figure",
      display: false,
    },
    {
      id: 9,
      name: "<footer>",
      text: "footer",
      display: false,
    },
    {
      id: 10,
      name: "<form>",
      text: "form",
      display: false,
    },
    {
      id: 11,
      name: "<h1>",
      text: "h1",
      display: false,
    },
    {
      id: 12,
      name: "<head>",
      text: "header",
      display: false,
    },
    {
      id: 13,
      name: "<hr>",
      text: "hr",
      display: false,
    },
    {
      id: 14,
      name: "<html>",
      text: "html",
      display: false,
    },
    {
      id: 15,
      name: "<img>",
      text: "img",
      display: false,
    },
    {
      id: 16,
      name: "<input>",
      text: "input",
      display: false,
    },
    {
      id: 17,
      name: "<li>",
      text: "li",
      display: false,
    },
    {
      id: 18,
      name: "<link>",
      text: "link",
      display: false,
    },
    {
      id: 19,
      name: "<main>",
      text: "main",
      display: false,
    },
    {
      id: 21,
      name: "<nav>",
      text: "nav",
      display: false,
    },
    {
      id: 22,
      name: "<section>",
      text: "section",
      display: false,
    },
    {
      id: 23,
      name: "<span>",
      text: "span",
      display: false,
    },
    {
      id: 24,
      name: "<strong>",
      text: "strong",
      display: false,
    },
    {
      id: 25,
      name: "<ul>",
      text: "ul",
      display: false,
    },
  ]);
  const [search, setSearch] = useState("");

  const handleButtonClick = (e, id) => {
    console.log(id);
    const updatedElements = elements.map((element) => {
      const elToCheck = { ...element };
      if (elToCheck.id === id) {
        elToCheck.display = true;
      }
      return elToCheck;
    });
    setElements(updatedElements);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedElements = elements.map((element) => {
      const elToCheck = { ...element };
      if (elToCheck.text === search) {
        elToCheck.display = true;
      }
      return elToCheck;
    });
    setElements(updatedElements);
    setSearch("");
  };

  return (
    <div className="container">
      <div className="row text-center">
        <h1>Guess an HTML Element!</h1>
      </div>
      <div className="row">
        <div className="col">
          <form
            className="row d-flex justify-content-center pt-5"
            onSubmit={handleFormSubmit}
          >
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Guess an element!"
                />
              </div>
            </div>
            <div className="col-sm-3">
              <button type="submit" className="btn btn-secondary">
                Guess!
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        {elements.map((element) => (
          <div className="col-sm-2 text-center" key={element.id}>
            <button
              className={`btn ${
                element.display ? "btn-success" : "btn-primary"
              } btn-lg`}
              disabled={element.display}
              onClick={(e) => handleButtonClick(e, element.id)}
            >
              {element.display ? element.name : "?"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
