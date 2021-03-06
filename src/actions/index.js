export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const ASK_USERNAME = 'ASK_USERNAME';

export const fetchMessages = (channel) => {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
};

export const createMessage = (channel, author, content) => {
  const body = { author, content };
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;

  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
};

export const askUsername = () => {
  return {
    type: ASK_USERNAME,
    payload: prompt('What is your username?') || `anonymous${Math.floor(10 + (Math.random() * 90))}`
  };
};

