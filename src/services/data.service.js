export async function getLogementList() {
  try {
    const response = await fetch('/src/data/logements.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    console.log(response);
    return response.json();
  } catch (e) {
    return console.log(JSON.stringify(e));
  }
}

export async function getOneLogement(id) {
  const response = await fetch('../src/data/logements.json', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const logements = await response.json();
  if (logements.some((logement) => logement.id === id)) {
    return logements.find((logement) => logement.id === id);
  }
  window.location.href = '/NotFound';
}
