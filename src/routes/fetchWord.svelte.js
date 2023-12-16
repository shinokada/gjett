class UsersResponse {
  users = $state();
  error = $state();
  isLoading = $state(false);
}

export default function useFetchUsers() {
  const resp = new UsersResponse();

  async function fetchData() {
    resp.isLoading = true;
    try {
      const response = await fetch("https://randomuser.me/api/?results=3");
      resp.users = (await response.json()).results;
      resp.error = undefined;
    } catch (err) {
      resp.error = err;
      resp.users = undefined;
    }
    resp.isLoading = false;
  }

  fetchData();
  return resp;
}

class WordResponse {
  word = $state()
  error = $state()
  isLoading = $state(false)
}

export function fetchWord () {
  const resp = new WordResponse()

  async function fetchData () {
    resp.isLoading = true
    try {
      let random = Math.floor(Math.random() * 200)
      
      const response = await fetch('http://localhost:5173/api/${random}')
      // console.log('response: ', response)
      resp.word = (await response.json());
      
      console.log('word: ', resp.word)
      resp.error = undefined;
    } catch (err) {
      resp.error = err;
      resp.word = undefined;
    }
    resp.isLoading = false;
  }
  fetchData();
  return resp;
}