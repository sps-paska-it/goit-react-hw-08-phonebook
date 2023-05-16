const base = 'https://64632c7d7a9eead6fadf02c2.mockapi.io/';

export const getContactsApi = () => {
  return fetch(`${base}/contacts`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      //   // Data handling
      // })
      // .catch(error => {
      //   // Error handling
      // });
    });
};
