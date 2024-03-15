import React, { useState } from 'react';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import Rating from './components/Rating';
import profileImage from './logo192.png'; // Pot do vaše profilne slike

function App() {
  const [comments, setComments] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [disableRatingClick, setDisableRatingClick] = useState(false); // Dodajanje stanja za onemogočanje klika na zvezdice

  const handleMouseEnter = () => {
    setDisableRatingClick(true); // Ko miška vstopi v blok, onemogočimo klike na zvezdice
  };

  const handleMouseLeave = () => {
    setDisableRatingClick(false); // Ko miška zapusti blok, omogočimo klike na zvezdice
  };

  const handleAddComment = (comment) => {
    console.log('Dodajam komentar:', comment);
    const updatedComments = [...comments, comment]; // Dodajanje komentarja kot objekta
    setComments(updatedComments);

    // Izračun povprečne ocene
    const ratings = updatedComments.map(comment => comment.rating); // Pretvorba ocen v celoštevilske vrednosti
    const avgRating = ratings.length > 0 ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0;
    setAverageRating(avgRating.toFixed(1));
  };

  console.log('Seznam komentarjev:', comments); // Preverimo, ali se komentarji pravilno posodabljajo

  return (
    <div style={{ marginLeft: '10px' }} className="container mt-5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="row">
        <div className="col-lg-4">
          <header className="text-center mb-4" style={{ position: 'sticky', top: '0', zIndex: '100', background: 'white' }}>
            <img src={profileImage} alt="Profile" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
            <h1>Naslov</h1>
            <hr style={{ marginLeft: '-25px' }} />
            <p>Location</p>
            <p>Average Rating: {averageRating} ({comments.length} ratings)</p>
            <Rating value={parseFloat(averageRating)} disableClick={disableRatingClick} /> {/* Prikaz povprečne ocene v obliki obarvanih zvezdic */}
          </header>
          <CommentList comments={comments} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <CommentForm onAddComment={handleAddComment} />
        </div>
      </div>
    </div>
  );
}

export default App;
