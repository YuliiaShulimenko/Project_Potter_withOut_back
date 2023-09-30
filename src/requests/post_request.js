
const base_url = "http://localhost:3333";
const send_order_url = base_url + '/order/send'

export const send_order = (phone) => {
    fetch(send_order_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(phone)
    })
      .then(res => res.json())
      .then(data => console.log('Request sent', data))
      .catch(error => console.error('Error: ', error))
  }