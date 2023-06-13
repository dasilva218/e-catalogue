const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://wip-five.vercel.app/'
    : 'http://localhost:3000/';

/**
 * ! post dealer
 * @param {*} formData
 * @returns
 */
export async function postDealer(formData) {
  try {
    const Options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    const request = await fetch(`${URL}api/dealers`, Options);
    const response = await request.json();
    return response;
  } catch (error) {
    return error;
  }
}

/**
 * ! post user
 * @param {*} formData
 * @returns
 */
export async function postUser(formData) {
  try {
    const Options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    const request = await fetch(`${URL}api/users`, Options);
    const response = await request.json();

    return response;
  } catch (error) {
    return error;
  }
}

/**
 *! get dealers
 */
export const getDealers = async () => {
  const response = await fetch(`${URL}api/dealers`);
  return response.json();
};

export const compare = async (rent, model, marque) => {
  const response = await fetch(
    `${URL}api/compare?rent=${rent}&model=${model}&marque=${marque}`
  );
  return response.json();
};

export function numStr(a, b) {
  a = '' + a;
  b = b || ' ';
  var c = '',
    d = 0;
  while (a.match(/^0[0-9]/)) {
    a = a.substr(1);
  }
  for (var i = a.length - 1; i >= 0; i--) {
    c = d != 0 && d % 3 == 0 ? a[i] + b + c : a[i] + c;
    d++;
  }
  return c;
}
