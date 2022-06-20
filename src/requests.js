export class Request {
  constructor(url) {
    this.url = url
  }

  async get() {
    const response = await fetch(this.url)
    const responseDate = await response.json()
    return responseDate
  }

  async post(data) {
    const postResponse = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8 ',
      },
    })
    const postResponseDate = await postResponse.json()

    return postResponseDate
  }

  async put(data, id) {
    const postResponse = await fetch(this.url + '/' + id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8 ',
      },
    })
    const postResponseDate = await postResponse.json()

    return postResponseDate
  }
  
  async delete(id) {
    const postResponse = await fetch(this.url + '/' + id, {
      method: 'DELETE',
    })
    return "Success delete data"
  }
}
