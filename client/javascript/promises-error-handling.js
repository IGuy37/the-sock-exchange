

fetch('https://ecs.the-sock-exchange.com/api/socks/1/10')
  .then(response => response.json())
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error))
  .finally(() => console.log('Fetch attempt completed.'));


