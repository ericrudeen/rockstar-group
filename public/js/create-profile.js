const createProfileHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const fullName = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const password = document.querySelector("#password").value.trim();
  const age = document.querySelector("#age").value.trim();
  const location = document.querySelector("#location").value.trim();
  const gender = document.querySelector("#gender-selected").value.trim();
  const interestedIn = document.querySelector("#interested-in").value.trim();
  const favoriteGenre1 = document
    .querySelector("#favorite-genre1")
    .value.trim();
  const favoriteGenre2 = document
    .querySelector("#favorite-genre2")
    .value.trim();
  const favoriteGenre3 = document
    .querySelector("#favorite-genre3")
    .value.trim();
  const favoriteArtist1 = document
    .querySelector("#favorite-artist1")
    .value.trim();
  const favoriteArtist2 = document
    .querySelector("#favorite-artist2")
    .value.trim();
  const favoriteArtist3 = document
    .querySelector("#favorite-artist3")
    .value.trim();

  if (
    fullName &&
    email &&
    phone &&
    password &&
    age &&
    location &&
    gender &&
    interestedIn &&
    favoriteArtist1 &&
    favoriteArtist2 &&
    favoriteArtist3 &&
    favoriteGenre1 &&
    favoriteGenre2 &&
    favoriteGenre3
  ) {
    const response = await fetch(`/api/user`, {
      method: "POST",
      body: JSON.stringify({
        fullName,
        email,
        phone,
        password,
        age,
        location,
        gender,
        interestedIn,
        favoriteArtist1,
        favoriteArtist2,
        favoriteArtist3,
        favoriteGenre1,
        favoriteGenre2,
        favoriteGenre3,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert("Failed to create account");
    }
  }
};

document
  .querySelector(".profile-form")
  .addEventListener("submit", createProfileHandler);
