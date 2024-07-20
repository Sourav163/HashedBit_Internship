import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import BookingDetails from "./components/BookingDetails";
import TicketDetails from "./components/TicketDetails";

// Page 1 - 20 - Show List of Movies (Add few images and arrange it in 4x4 structure)
// Page 2 - 20 - click on movie, go to movie details page, click on book seat
// Page 3 - 30 - fill the form - name, email, mobile, submit button.
// Page 4 - 30 - seat booked screen with random booking id, also show name, email and mobile filled.

function App() {
  let movies = [
    {
      id: 1,
      Img: "Godhra.jpg",
      Title: "Accident or Conspiracy: Godhra",
      Type: "Drama",
      Rating: "Yet to be rated",
      Duration: "2h 13m",
      Release: "19 Jul 2024",
      Languages: "Hindi",
      Visuals: "2D",
      About:
        "Based on the Godhra train burning incident and riots in 2002, focusing on the Nanavati commission enquiry and report.",
    },
    {
      id: 2,
      Img: "BadNewz.jpg",
      Title: "Bad Newz",
      Type: "Comedy/Drama",
      Rating: "Yet to be rated",
      Duration: "2h 22m",
      Release: "19 Jul 2024",
      Languages: "Hindi",
      Visuals: "2D",
      About:
        "A crazy laugh riot which will show the outcomes of two sophisticated Punjabi men and a Christian-Hindu girl. One of the men has a one night stand with the girl and somehow, craziness happens when she is pregnant unexpectedly.",
    },
    {
      id: 3,
      Img: "Deadpool&Wolverine.jpg",
      Title: "Deadpool & Wolverine",
      Type: "Action/Adventure/Comedy",
      Rating: "Yet to be rated",
      Duration: "2h 7m",
      Release: "26 Jul 2024",
      Languages: "Hindi, English, Tamil, Telugu",
      Visuals:
        "2D, IMAX 2D, 3D, 2D SCREEN X, MX4D 3D, 3D SCREEN X, 4DX 3D, ICE 3D, IMAX 3D",
      About:
        "Wolverine is recovering from his injuries when he crosses paths with the loudmouth Deadpool. They team up to defeat a common enemy.",
    },
    {
      id: 4,
      Img: "Kalki.jpg",
      Title: "Kalki 2898 AD",
      Type: "Action/Sci-Fi/Thriller",
      Rating: "7.7/10",
      Duration: "3h 1m",
      Release: "27 Jun 2024",
      Languages: "Hindi, Telugu, Tamil, Malayalam, Kannada",
      Visuals: "2D, IMAX 2D, 3D, IMAX 3D",
      About:
        "A modern-day avatar of Vishnu, a Hindu god, who is believed to have descended to earth to protect the world from evil forces.",
    },
    {
      id: 5,
      Img: "Twisters.jpg",
      Title: "Twisters",
      Type: "Action/Adventure/Thriller",
      Rating: "7.1/10",
      Duration: "2h 2m",
      Release: "18 Jul 2024",
      Languages: "Hindi, English",
      Visuals: "2D, MX4D, ICE, 2D SCREEN X, 4DX, IMAX 2D",
      About:
        "A retired tornado-chaser and meteorologist is persuaded to return to Oklahoma to work with a new team and new technologies.",
    },
    {
      id: 6,
      Img: "Kill.jpg",
      Title: "Kill",
      Type: "Action/Thriller",
      Rating: "8.0/10",
      Duration: "1h 46m",
      Release: "5 Jul 2024",
      Languages: "Hindi",
      Visuals: "2D",
      About:
        "During a train trip to New Delhi, a pair of commandos face an army of invading bandits.",
    },
    {
      id: 7,
      Img: "Sarfira.jpg",
      Title: "Sarfira",
      Type: "Biography/Drama",
      Rating: "8.8/10",
      Duration: "2h 35m",
      Release: "12 Jul 2024",
      Languages: "Hindi",
      Visuals: "2D, ICE",
      About:
        "A man fights to make his dream of creating a low cost airline a reality, facing opposition from devious competitive airline owners who threaten his business and his passengers' safety.",
    },
    {
      id: 8,
      Img: "SpyXFamily.jpg",
      Title: "Spy X Family: Code White",
      Type: "Action/Anime/Comedy",
      Rating: "7.4",
      Duration: "1h 50m",
      Release: "19 Jul 2024",
      Languages: "Japanese",
      Visuals: "2D, MX4D, 4DX",
      About:
        "After receiving an order to be replaced in Operation Strix, Loid decides to help Anya win a cooking competition at Eden Academy, by making the director's favorite meal in order to prevent his replacement.",
    },
    {
      id: 9,
      Img: "Immaculate.jpg",
      Title: "Immaculate",
      Type: "Horror/Thriller",
      Rating: "5.8",
      Duration: "1h 28m",
      Release: "19 Jul 2024",
      Languages: "English",
      Visuals: "2D",
      About:
        "Cecilia, a woman of devout faith, is warmly welcomed to the picture-perfect Italian countryside where she is offered a new role at an illustrious convent. But it becomes clear to Cecilia that her new home harbors dark and horrifying secrets.",
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setName(urlParams.get("name"));
    setEmail(urlParams.get("email"));
    setMobile(urlParams.get("mobile"));
  }, [name, email, mobile]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="container">
          <h1 className="page-heading">Available Movies to Watch</h1>
          <div className="cards">
            {movies.map((movie) => (
              <Card
                key={movie.id}
                id={movie.id}
                img={movie.Img}
                title={movie.Title}
                type={movie.Type}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      path: "/:movie_title",
      element: (
        <div className="container">
          <MovieDetails movies={movies.map((movie) => movie)} />
        </div>
      ),
    },
    {
      path: "/:movie_title/book",
      element: <BookingDetails movies={movies.map((movie) => movie)} />,
    },
    {
      path: "/:movie_title/ticket",
      element: (
        <TicketDetails
          movies={movies.map((movie) => movie)}
          name={name}
          email={email}
          mobile={mobile}
        />
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
