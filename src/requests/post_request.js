
const base_url = "http://localhost:3333";  //основная ссылка
const send_order_url = base_url + '/order/send' //заказ
const send_sale_url = base_url + '/order/send'  //скидка

export const send_sale = (phone) => {
  fetch(send_sale_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(phone)
  })
    .then(res => res.json())
    .then(data => console.log('Successfully', data))  // в случае успешной отправик
    .catch(error => console.error('Error: ', error))  //в случае ошибки
} 


export const send_order = (phone) => {
  fetch(send_order_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(phone)
  })
    .then(res => res.json())
    .then(data => console.log('Successfully', data))
    .catch(error => console.error('Error: ', error))
}