

// query by username for progress
// client sent "data" to server
// client receives "response" from ther server
// both "data" and "response" are json data
// example: url = /action_query
//
async function queryByUsername(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // this cannot be 'no-cors'
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
