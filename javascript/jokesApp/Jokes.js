async function getJokes() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const data = await response.json();

    document.getElementById("setup").innerText = data.setup;
    document.getElementById("punchline").innerText = data.punchline;
    document.getElementById("s").innerText = "Smile, Cutie 😍!!!!";
    

  } catch (error) {
    console.log(error);
  }
}

// fetch("https://official-joke-api.appspot.com/random_joke");
