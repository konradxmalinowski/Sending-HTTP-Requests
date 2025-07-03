export async function fetchAvailablePlaces() {
  const response = await fetch('http://localhost:3000/places');
  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }

  const data = await response.json();
  return data.places;
}

export async function fetchUserPlaces() {
  const response = await fetch('http://localhost:3000/user-places');
  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }

  const data = await response.json();
  return data.places;
}

export async function updatePlaces(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to update places');
  }

  return responseData.message;
}
