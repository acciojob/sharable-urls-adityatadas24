// your code here
document.getElementById('urlForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  // Get the values from the input fields
  const name = document.getElementById('name').value;
  const year = document.getElementById('year').value;
  
  // Construct the query string
  const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
  
  // Update the URL in the h3 element
  document.getElementById('url').textContent = `https://localhost:8080/${queryString}`;
});
