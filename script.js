//your JS code here. If required.
// Helper function to create one promise
function createRandomPromise(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.5; // 50% chance
      if (success) {
        const randomNum = Math.floor(Math.random() * 10) + 1; // 1–10
        resolve(randomNum);
      } else {
        reject(`Promise ${index + 1} rejected with error`);
      }
    }, Math.random() * 1000); // small random delay
  });
}

function runPromises() {
  const promises = Array.from({ length: 5 }, (_, i) => createRandomPromise(i));

  Promise.allSettled(promises).then(results => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // clear before appending

    results.forEach((result, index) => {
      const p = document.createElement("p");
      if (result.status === "fulfilled") {
        p.textContent = result.value; // show resolved value
      } else {
        p.textContent = `Promise ${index + 1} rejected with error`;
      }
      outputDiv.appendChild(p);
    });
  });
}

// run on page load
runPromises();
